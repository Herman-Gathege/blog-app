from flask import Flask, request, jsonify
from extensions import db  # Import db from extensions
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_bcrypt import Bcrypt
from flask_login import LoginManager
from flask_cors import CORS
import jwt
import datetime

# Initialize the Flask application
app = Flask(__name__)

# App configurations
app.config['SECRET_KEY'] = 'your_secret_key'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize extensions
db.init_app(app)  # Use init_app to initialize db
migrate = Migrate(app, db)  # Initialize Migrate with the app and db
bcrypt = Bcrypt(app)
login_manager = LoginManager(app)
CORS(app)  # Enables cross-origin requests

# Import models after db initialization
from models import User, Post

# Route to get all posts
@app.route('/api/posts', methods=['POST'])
def create_post():
    data = request.get_json()
    token = request.headers['Authorization'].split()[1]
    decoded_token = jwt.decode(token, app.config['SECRET_KEY'], algorithms=['HS256'])
    user = User.query.get(decoded_token['user_id'])
    post = Post(title=data['title'], content=data['content'], author=user)
    db.session.add(post)
    db.session.commit()
    return jsonify({"message": "Post created successfully!"}), 201

@app.route('/api/posts', methods=['GET'])
def get_posts():
    posts = Post.query.all()
    posts_data = [{"id": post.id, "title": post.title, "content": post.content} for post in posts]
    return jsonify(posts_data)

@app.route('/api/register', methods=['POST'])
def register():
    data = request.get_json()

    # Ensure 'username' is provided
    if 'username' not in data or not data['username']:
        return jsonify({"message": "Username is required!"}), 400

    # Ensure 'email' and 'password' are provided
    if 'email' not in data or not data['email']:
        return jsonify({"message": "Email is required!"}), 400
    if 'password' not in data or not data['password']:
        return jsonify({"message": "Password is required!"}), 400

    # Hash the password
    hashed_password = bcrypt.generate_password_hash(data['password']).decode('utf-8')

    # Create the new user
    user = User(username=data['username'], email=data['email'], password=hashed_password)
    db.session.add(user)
    db.session.commit()

    return jsonify({"message": "User created successfully!"}), 201

# Route for logging in a user and generating a JWT token
@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()

    # Ensure 'email' and 'password' are provided
    if 'email' not in data or not data['email']:
        return jsonify({"message": "Email is required!"}), 400
    if 'password' not in data or not data['password']:
        return jsonify({"message": "Password is required!"}), 400

    # Check if the user exists
    user = User.query.filter_by(email=data['email']).first()
    if not user:
        return jsonify({"message": "Invalid email or password!"}), 401

    # Check if the password is correct
    if not bcrypt.check_password_hash(user.password, data['password']):
        return jsonify({"message": "Invalid email or password!"}), 401

    # Generate a JWT token
    token = jwt.encode({
        'user_id': user.id,
        'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=1)
    }, app.config['SECRET_KEY'], algorithm='HS256')

    return jsonify({'token': token})

if __name__ == "__main__":
    app.run(debug=True)
