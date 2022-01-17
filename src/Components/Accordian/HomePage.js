import React, { useState } from "react";
import QueList from "./QueList";
import data from "./data";

import "./home.css";
function HomePage() {
  const [ques, setQues] = useState(data);

  return (
    <main>
      <div className="container">
        Questions And Answers 
        <section className="info">
          {ques.map((singleques) => {
            return <QueList key={singleques.id} {...singleques} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default HomePage;
