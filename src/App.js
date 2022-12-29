import React , {useState} from 'react';

import Navbar from './components/Navbar';
import Shop from './components/Shop';
import Cart from './components/Cart';
import './styles/shop.css';
import './styles/navbar.css';
import "./styles/index.css";









import Login from './components/Login';

const App = () => {
	const [show, setShow] = useState(true);
	const [cart , setCart] = useState([]);
	const [warning, setWarning] = useState(false);

	const[popup,setPopUp]=useState(false)




	const[admin,setAdmin]=useState(false)
	const[userAuth,setUserAuth]=useState(false)



	const[logflag,setLogflag]=useState(false)
const [signup,setSignup]=useState(false)
	const handleClick = (item)=>{
		
		if(userAuth==false){alert("Please Sign In to Add into Cart")
		return}
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
	 
	 		<Navbar  signup={signup} setSignup={setSignup} logflag={logflag} setLogflag={setLogflag}  setUserAuth={setUserAuth
			} userAuth={userAuth} size={cart.length} admin={admin} popup={false} setPopUp={setPopUp} setShow={setShow} />
		{
			
			logflag?<Login setUserAuth={setUserAuth} setLogflag={setLogflag} setAdmin={setAdmin}
				signup={signup} setSignup={setSignup}
			/>
			:
			show  ? <Shop popup={popup} handleClick={handleClick} setPopUp={setPopUp} admin={admin} /> : 
			<Cart cart={cart} setCart={setCart} handleChange={handleChange} />
		}
		{
			warning && <div className='warning'>Item is already added to your cart</div>
		}
	

	
		
	</React.Fragment>
  )
}

export default App