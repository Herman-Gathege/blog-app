// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Dashboard = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:5000/api/posts') // Make sure to use the correct URL
//       .then(response => {
//         setPosts(response.data);
//       })
//       .catch(error => {
//         console.error("There was an error fetching the posts:", error);
//       });
//   }, []);

//   return (
//     <div>
//       <h2>Blog Posts</h2>
//       <ul>
//         {posts.map(post => (
//           <li key={post.id}>
//             <h3>{post.title}</h3>
//             <p>{post.content}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/posts') // Make sure to use the correct URL
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the posts:", error);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Blog Posts</h2>
      <div className="row">
        {posts.map(post => (
          <div className="col-md-4 mb-4" key={post.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.content}</p>
                <button className="btn btn-primary">Read More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
