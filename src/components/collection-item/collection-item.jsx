import React from "react";
import "./collection-item.styles.scss";
import CustomBtn from "../custom-button/custome-button";
import { addItem } from "../../redux/card/card.action";
import { useDispatch } from "react-redux";


const CollectionItem = ({item } ) => {
    const {id, name, imageUrl, price }=item;

    const dispatch=useDispatch();

    const handAddItem=()=>{
        dispatch(addItem(item))
    }

  return (
    <div key={id} className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomBtn inverted onClick={handAddItem}>Add to Cart</CustomBtn>
    </div>
  );
};



export default (CollectionItem);
 