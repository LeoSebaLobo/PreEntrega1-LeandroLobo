import styles from './styles/Search.module.scss';

const Search = () => {
	return (
		<form class={styles.search} action="">
			<input type="search" placeholder="Ingrese el producto requerido" required />
			<button type="submit">Buscar</button>
		</form>   
	)
}

export default Search;

