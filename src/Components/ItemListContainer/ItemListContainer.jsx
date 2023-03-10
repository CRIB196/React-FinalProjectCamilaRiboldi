import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../productMock";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  const { categoryName } = useParams();

  const [items, setItems] = useState([]);

  const FilteredProducts = products.filter(
    (element) => element.category === categoryName
  );

  useEffect(() => {
    const productList = new Promise((resolve, reject) => {
      resolve(categoryName ? FilteredProducts : products);
    });

    productList
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [categoryName]);

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;