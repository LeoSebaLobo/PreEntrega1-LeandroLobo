import React from 'react';
import styles from './styles/ItemDetail.module.scss';

const Item = ({ product }) => {
  return (
    <div className={styles.card}>
      <nav>
        <a href="/">Atras</a>
      </nav>
      <div className={styles.photo}>
        <img src={product.image} alt={product.title} />
      </div>
      <div className={styles.description}>
        <h2>{product.title}</h2>
        <h1>$ {product.price}</h1>
        <p>{product.description}</p>
      </div>
      <button className={styles.btn}>Añadir al carrito</button>
    </div>
  );
};

export default Item;

