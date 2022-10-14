import React, { useState} from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from './components/Cart/Cart';
import CartProvider from "./Store/CartProvider";

function App() {
	const [cartIsSown, setCartIsShown] = useState(false);

	const showCartHandler = () =>{
		setCartIsShown(true)
	}

	const hideCartHandler = () =>{
		setCartIsShown(false)
	}
	return (
		<CartProvider>
			{cartIsSown && <Cart onClose={hideCartHandler}/>}
			<Header onShowCart={showCartHandler}/>

			<main>
				<Meals></Meals>
			</main>
		</CartProvider>
	);
}

export default App;
