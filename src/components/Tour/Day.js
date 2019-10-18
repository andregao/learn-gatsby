import React, { useState } from 'react';
import css from '../../css/day.module.css';
import { FaAngleDown } from 'react-icons/all';

const Day = ({ data }) => {
  const [showInfo, setShowInfo] = useState(false);
  const handleToggle = () => setShowInfo(!showInfo);
  return (
    <article className={css.day}>
      <h4 style={{ cursor: 'pointer' }} onClick={handleToggle}>
        {data.day}
        <button className={css.btn}>
          <FaAngleDown />
        </button>
      </h4>
      {showInfo && <p>{data.info}</p>}
    </article>
  );
};

export default Day;
