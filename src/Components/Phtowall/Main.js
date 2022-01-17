import React, { Component, useState } from "react";
import AddPhoto from "./AddPhoto";
import Photowall from "./Photowall";
import Title from "./Title";
import { Route } from "react-router-dom";

function Main() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      desrciption: "Tuffy",
      pic: "https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
    },
    {
      id: 2,
      desrciption: "Blush",
      pic: "https://picsum.photos/id/237/200/300",
    },
    {
      id: 3,
      desrciption: "snow",
      pic: "https://picsum.photos/id/237/200/300",
    },
  ]);

  const removePhoto = (posttoremove) => {
    console.log(posttoremove.desrciption);
    const newposts = posts.filter((posts) => posts !== posttoremove);
    setPosts(newposts);
  };

  const addPost = (postsubmit) => {
    console.log(postsubmit.desrciption);
    console.log(postsubmit.pic);
    const newposts = posts.concat(postsubmit);
    setPosts(newposts);
  };

  return (
    <div>
      <Route path="/" exact component={Photowall}>
        <Title title="PhotoWall" />
        <Photowall posts={posts} onremovePhoto={removePhoto} />
      </Route>
      <Route path="/AddPhoto" component={AddPhoto}>
        <AddPhoto
          onAddPhoto={(addedPost) => {
            console.log(addedPost);
            addPost(addedPost);
          }}
        />
      </Route>
    </div>
  );
}

export default Main;
