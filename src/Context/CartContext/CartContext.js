import { createContext , useState} from 'react';

export const CartContext = createContext();

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  const addItem = (count)  => {
    const product = { id: props.id ,title: props.title, price: props.price ,img: props.image, count: count};
  
   let cartElement = { product ,count} 
    console.log('Elemento del Carrito',cartElement)

  if (isInCart(product)) {
      console.log('esta en carro')
     cartElement = cart.find( item => item.id === props.id) 
     cartElement.count = cartElement.count + count
  } else {
      setCart(currenState => [...currenState, product])
  }
  
}    

const isInCart = () => {
    return cart && cart.some(item => item.id === props.id)
  }

//eliminar items
const clear = () => {

  return setCart ([])
}



return (
         <CartContext.Provider value= {[cart, setCart,clear,addItem,isInCart]}>
              {props.children}
         </CartContext.Provider>
       );
}
