import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ id, title, info }) => {
  const [toggle, setToggle] = useState(false);

  const toggler = () => {
    if (!toggle) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };

  return (
    <article>
      <header>
        <h4>{title}</h4>
        <button onClick={() => toggler()}>{toggle ? '-' : '+'}</button>
      </header>
      {toggle && <p>{info}</p>}
    </article>
  );
};

export default Question;
