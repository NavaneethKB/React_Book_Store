import React , {useState} from 'react';

import Newnav from './components/Newnav';
import Amazon from './components/Amazon';
import Cart from './components/Cart';
import './styles/amazon.css';
import './styles/newnav.css';
import "./styles/index.css";








import Addbook from './components/Addbook';
import SignIn from './components/Signin';
import Login from './components/Login';

const App = () => {
	const [show, setShow] = useState(true);
	const [cart , setCart] = useState([]);
	const [warning, setWarning] = useState(false);

	const[popup,setPopUp]=useState(false)
	const[logflag,setLogflag]=useState(false)

	const[admin,setAdmin]=useState(false)
	const[userAuth,setUserAuth]=useState(false)
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
	
	 <div className={0?"darkover":null}></div>
	 
	 		<Newnav  signup={signup} setSignup={setSignup} logflag={logflag} setLogflag={setLogflag}  setUserAuth={setUserAuth
			} userAuth={userAuth} size={cart.length} admin={admin} popup={false} setPopUp={setPopUp} setShow={setShow} />
		{
			
			logflag?<Login setUserAuth={setUserAuth} setLogflag={setLogflag} setAdmin={setAdmin}
				signup={signup} setSignup={setSignup}
			/>
			:
			show  ? <Amazon popup={popup} handleClick={handleClick} setPopUp={setPopUp} admin={admin} /> : 
			<Cart cart={cart} setCart={setCart} handleChange={handleChange} />
		}
		{
			warning && <div className='warning'>Item is already added to your cart</div>
		}
	

	
		
	</React.Fragment>
  )
}

export default App