import React from "react";
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/collection-preview/collection-preview";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collection: SHOP_DATA,
    };
  }

  render() {
    const {collection} =this.state;
    return(
      <div className="collection-page">
        {
          collection.map(({id , ...otherProps}) => (
            <CollectionPreview key={id} {...otherProps}/>
          ))
        }
      </div>
    )
  }
}

export default (ShopPage);
