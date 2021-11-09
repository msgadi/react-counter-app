import React,{useState} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    const handleIncrementCount =()=>{
        setCount(count + 1);
    }

    const formatCount = () => count > 0 ? count : 'zero';

    return ( <>  
        <div> 
            <h1 className={count === 0 ? "badge bg-secondary m-2" :""}>{ formatCount()   }</h1> 
            <button className="btn btn-primary" onClick={ handleIncrementCount}>+</button>
        </div>
    </> );
}
 
export default Counter;