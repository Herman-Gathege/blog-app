// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';


// const NewPost = () => {
//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post('http://localhost:5000/api/posts', { title, content }, {
//       headers: {
//         'Authorization': `Bearer ${localStorage.getItem('token')}`
//       }
//     })
//     .then(response => {
//       navigate('/posts'); // Redirect to '/posts' after successful post creation

//     })
//     .catch(error => {
//       console.error("There was an error creating the post:", error);
//     });
//   };

//   return (
//     <div>
//       <h2>Create New Post</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Title:</label>
//           <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
//         </div>
//         <div>
//           <label>Content:</label>
//           <textarea value={content} onChange={(e) => setContent(e.target.value)} required></textarea>
//         </div>
//         <button type="submit">Create Post</button>
//       </form>
//     </div>
//   );
// };

// export default NewPost;

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NewPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/posts', { title, content }, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(response => {
      navigate('/posts'); // Redirect to '/posts' after successful post creation
    })
    .catch(error => {
      console.error("There was an error creating the post:", error);
    });
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Create New Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title:</label>
          <input 
            type="text" 
            id="title" 
            className="form-control" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            required 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="form-label">Content:</label>
          <textarea 
            id="content" 
            className="form-control" 
            rows="5" 
            value={content} 
            onChange={(e) => setContent(e.target.value)} 
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Create Post</button>
      </form>
    </div>
  );
};

export default NewPost;
