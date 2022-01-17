import React from "react";

function Photo(props) {
  //onst post=props.posts
  return (
    <figure className="figure">
      <img src={props.posts.pic} alt={props.posts.desrciption} />
      <figcaption className="caption">{props.posts.desrciption}</figcaption>
      <div className="btn-container">
        <button
          className="remove-btn"
          onClick={() => {
            props.onremovePhoto(props.posts);
          }}
        >
          Remove
        </button>
      </div>
    </figure>
  );
}

export default Photo;
