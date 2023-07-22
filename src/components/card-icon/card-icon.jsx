import React from "react";
import { LiaShoppingBagSolid } from "react-icons/lia";
import "./card-icon.styles.scss";
import { toggleCardHidden } from "../../redux/card/card.action";
import { useDispatch } from "react-redux";

const CardIcon = () => {
  const dispatch = useDispatch();
  
  const toggleHide = () => {
    dispatch(toggleCardHidden());
  };

  return (
    <div className="card-icon" onClick={toggleHide}>
      <LiaShoppingBagSolid className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CardIcon;
