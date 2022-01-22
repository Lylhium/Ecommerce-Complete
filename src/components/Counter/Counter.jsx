import {useState} from 'react'
import '../Counter/Counter.css'

const Counter = ({stock, initial = 0, onAdd}) => {

    
	const [count, setCount] = useState(initial)
	return (
		<div>
			<div>
				<button disabled={stock === 0 || count <= 0} onClick={() => setCount(count - 1)} 
				className='substract' > - </button>
				
				<span className='btn-stock'>{stock === 0 ? 'Sin stock' : count}</span>
				<button disabled={stock === 0 || count >= stock } onClick={() => setCount(count + 1)} 
				 className="add">+</button>
			</div>
			<div className="total-stock">(Quedan {stock - count} disponibles)</div>

            <button className="button1" disabled={stock === 0 || count <= 0 || count > stock} 
			onClick={() => onAdd(count)}> Agregar al carrito </button>
		</div>
	)
}

export default Counter
