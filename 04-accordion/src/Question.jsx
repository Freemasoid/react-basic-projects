import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";

function Question({ title, info }) {
  const [deets, setDeets] = useState(false);

  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button className="question-btn" onClick={() => setDeets(!deets)}>
          {deets ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {deets && <p>{info}</p>}
    </article>
  );
}

export default Question;
