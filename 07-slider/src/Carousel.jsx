import React, { useEffect } from "react";
import { shortList, list, longList } from "./data";
import { useState } from "react";
import { FaChevronLeft, FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function Carousel() {
  const [people, setPeople] = useState(list);
  const [currPerson, setCurrPerson] = useState(0);

  const prevSlide = () => {
    setCurrPerson((prevPerson) => {
      const result = (prevPerson - 1 + people.length) % people.length;
      return result;
    });
  };
  const nextSlide = () => {
    setCurrPerson((prevPerson) => {
      const result = (prevPerson + 1) % people.length;
      return result;
    });
  };

  //auto slide
  useEffect(() => {
    let sliderId = setInterval(() => {
      nextSlide();
    }, 2000);
    return () => {
      clearInterval(sliderId);
    };
  }, [currPerson]);

  return (
    <section className="slider-container">
      {people.map((person, personIndex) => {
        const { id, image, name, title, quote } = person;
        return (
          <article
            className="slide"
            style={{
              transform: `translateX(${100 * (personIndex - currPerson)}%)`,
              opacity: personIndex === currPerson ? 1 : 0,
              visibility: personIndex === currPerson ? "visible" : "hidden",
            }}
            key={id}
          >
            <img src={image} alt={name} className="person-img" />
            <h5 className="name">{name}</h5>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        );
      })}
      <button className="prev" type="button" onClick={prevSlide}>
        <FiChevronLeft />
      </button>

      <button className="next" type="button" onClick={nextSlide}>
        <FiChevronRight />
      </button>
    </section>
  );
}

export default Carousel;
