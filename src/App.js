import React , {useState} from 'react';
import Navbar from './components/Navbar';
import Newnav from './components/Newnav';
import Amazon from './components/Amazon';
import Cart from './components/Cart';
import './styles/amazon.css';
import './styles/newnav.css';
import "./styles/index.css";
import Addbook from './components/Addbook';
import SignIn from './components/Signin';

const App = () => {
	const [show, setShow] = useState(true);
	const [cart , setCart] = useState([]);
	const [warning, setWarning] = useState(false);
	const[popup,setPopUp]=useState(true)
	const[admin,setAdmin]=useState(true)

	const handleClick = (item)=>{
		let isPresent = false;
		cart.forEach((product)=>{
			if (item.id === product.id)
			isPresent = true;
		})
		if (isPresent){
			setWarning(true);
			setTimeout(()=>{
				setWarning(false);
			}, 2000);
			return ;
		}
		setCart([...cart, item]);
	}

	const handleChange = (item, d) =>{
		let ind = -1;
		cart.forEach((data, index)=>{
			if (data.id === item.id)
				ind = index;
		});
		const tempArr = cart;
		tempArr[ind].amount += d;
		
		if (tempArr[ind].amount === 0)
			tempArr[ind].amount = 1;
		setCart([...tempArr])
	}

  return (
	
	<React.Fragment
	
	>
	 <div className={popup?"darkover":null}></div>
		<Newnav size={cart.length} admin={admin} popup={false} setPopUp={setPopUp} setShow={setShow} />
		{
			show ? <Amazon popup={popup} handleClick={handleClick} setPopUp={setPopUp} /> : <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
		}
		{
			warning && <div className='warning'>Item is already added to your cart</div>
		}
		{

	}
   {	0 &&<SignIn/>}
	</React.Fragment>
  )
}

export default App