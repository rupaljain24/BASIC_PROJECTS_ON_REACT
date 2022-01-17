import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(2); // passing index kyuki ek hee dislay krna hai at a time not a list
  const { id, image, job, name, text } = people[index]; // can also use this instead of destructure

  const checkCorrectIndex = (num) => {
    // rhis funnction is used to check if theindex is greterthan, less than to the no. of elements in array if
    if (num > people.length - 1) {
      return 0;
    }
    if (num < 0) {
      return people.length - 1;
    } else {
      return num;
    }
  };
  const prevIndex = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkCorrectIndex(newIndex);
    });
    //return
    console.log("prev clicked");
  };
  const nextIndex = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkCorrectIndex(newIndex);
    });
    console.log("next clicked");
  };

  const showRandom=()=>{
      let newIndex= Math.floor(Math.random() * people.length) //random returs floating no. therefore use math.floor
      console.log(newIndex)
      return setIndex(newIndex);
  }

  return (
    <article className="review">
      <div className="img-container">
        <img
          src={people[index].image}
          alt={people[index].name}
          className="person-img"
        />
      </div>
      <h2 className="author">{people[index].name}</h2>
      <h2 className="job">{people[index].job}</h2>
      <p className="info">{people[index].text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevIndex}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextIndex}>
          <FaChevronRight />
        </button>

        <button className="random-btn" onClick={showRandom}>
          genrate randomly
        </button>
      </div>
    </article>
  );
};

export default Review;
