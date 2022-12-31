import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";
import * as ROUTES from '../../Constants/Route';

const Card = ({ item }) => {
  console.log(item);
  return (
    <Link className='link' to={ROUTES.SINGLEPRODUCTS}>
      <div className='card'>
        <div className="image">
        {!item.isNew && <span>New Season</span>}
          <img
            src={item.img} 
            alt=""
            className="mainImg"
          />
          <img
           src={item.img2} 
            alt=""
            className="secondImg"
          />
        </div>
        <h2>{item.title}</h2>
        <div className="prices">
          <h3>${item.oldprice}</h3>
          <h3>${item.price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;