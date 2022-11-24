import styles from './styles/ItemListContainer.module.scss';


const ItemListContainer  = (props)=> {
	return (
    <div className={styles.container}>
      <h1>{props.greeting}</h1>
      <h2>{props.title}</h2>
      <p>{props.phrase}</p>
    </div>
	);
}

export default ItemListContainer;
