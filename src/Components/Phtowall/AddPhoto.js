import React, { useState } from "react";
import { Link } from "react-router-dom";

function AddPhoto(props) {
  const [post, setPost] = useState({
    id: 0,
    description: "",
    pic: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const description = e.target.elements.description.value;
    const pic = e.target.elements.pic.value;
    const post = {
      desrciption: description,
      pic: pic,
    };
    if (description && pic) {
      props.onAddPhoto(post);
    }
  };

  const handledescChange = (event) => {
    setPost((post) => ({
      ...post,
      description: event.target.value,
    }));
  };
  const handlepicChange = (event) => {
    setPost((post) => ({
      ...post,
      pic: event.target.value,
    }));
  };

  return (
    <div className="table-div">
      <h1>Add new Components</h1>
      <form onSubmit={handleSubmit}>
        <table>
          <tr>
            <th>Add Description</th>
            <td>
              <input
                type="text"
                placeholder="description.."
                name="description"
                value={post.description}
                onChange={handledescChange}
              />
            </td>
          </tr>
          <tr>
            <th>Add Link</th>
            <td>
              <input
                type="text"
                placeholder="link.."
                name="pic"
                value={post.pic}
                onChange={handlepicChange}
              />
            </td>
            <tr></tr>
          </tr>
          <th colSpan="2">
            <button className="remove-btn">Post</button>
          </th>
        </table>
      </form>
      <Link to="/" className="link">
        Go to Home
      </Link>
    </div>
  );
}

export default AddPhoto;
