import React, { useEffect, useState } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import Api from "../../services/Api";
import { useParams } from "react-router-dom";

const ItemDetailContainer = ({ greeting }) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const {id} = useParams();

  const getProduct = async () => {
    try {
      const result = await Api.get();
      const product = result.data;
      const prod = product.find(p => p.id === parseInt(id));
      console.log(prod);
      setProduct(prod);
    } catch { console.log("error"); } 
    finally { setLoading(false); }
  };

  useEffect(()=>{
    getProduct()
  },[])

  return (
    <div>
      <h1>{greeting}</h1>
      {<>{loading ? <h1>Espera mientras cargamos tu informacion...</h1> : <ItemDetail product={product} />}</>}
    </div>
  );
};

export default ItemDetailContainer;

