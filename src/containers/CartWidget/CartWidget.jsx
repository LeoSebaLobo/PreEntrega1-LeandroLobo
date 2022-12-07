import styles from './styles/CartWidget.module.scss';
import Cart from '../../assets/Icons/Cart';

const CartWidget = () => {
	return (
		<div className= {styles.cartwidget}>
			<Cart />
			<span className= {styles.badge}>6</span>
		</div>
	)
}

export default CartWidget;
