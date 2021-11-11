import {useState} from 'react'

const Counter = ({initialCount}) => {
    const [count, setCount] = useState(initialCount)
    const handleIncrementCount =()=>{
        setCount(count + 1);
    }

    const handleDecrementCount =()=>{
        setCount(count - 1);
    }
 
    const formatCount = () => count > 0 ? count : 'zero'; 
    const getBadgeClass = () => count === 0 ? "badge bg-warning " :"";

    return ( <>  
        <div className="container"> 
            <span className={ "ml-2 " + getBadgeClass()}>{ formatCount()}</span> 
            <button className="btn btn-primary m-5" onClick={ handleIncrementCount}>+</button>
            <button className={`btn btn-${ count > 0 ? 'primary' : 'secondary disabled'}`} onClick={ handleDecrementCount}>-</button>
        </div>
    </> );
}
 
export default Counter;