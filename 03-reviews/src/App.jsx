import { useState } from "react";
import users from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = users[index];

  const checkLength = (num) => {
    if (num > users.length - 1) {
      return 0;
    } else if (num < 0) {
      return users.length - 1;
    }
    return num;
  };

  const nextUser = () => {
    setIndex((curInd) => {
      const newIndex = curInd + 1;
      return checkLength(newIndex);
    });
  };

  const prevUser = () => {
    setIndex((curInd) => {
      const newIndex = curInd - 1;
      return checkLength(newIndex);
    });
  };

  const randomUser = () => {
    let random = Math.floor(Math.random() * users.length);
    if (random === index) random = index + 1;
    console.log(random);
    setIndex(checkLength(random));
  };

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />

          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>

        <h4 className="name">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>

        <div className="btn-container">
          <button className="prev-btn" onClick={prevUser}>
            <FaChevronLeft />
          </button>

          <button className="next-btn" onClick={nextUser}>
            <FaChevronRight />
          </button>
        </div>

        <button className="btn btn-hipster" onClick={randomUser}>
          Surpirse me!
        </button>
      </article>
    </main>
  );
};

export default App;
