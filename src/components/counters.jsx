import {useState} from 'react'
import Counter from './counter';

const Counters = () => { 
    const countersInitialState = [{initialCount:0},
                                    {initialCount:10},
                                    {initialCount:5}];
    const [counters, setCounters] = useState(countersInitialState);
    

    return ( <> 
      <div className="container">
      <h1>Counters</h1> 
      <button   className="btn btn-danger">Reset</button>
        {counters.map(x => <Counter initialCount={x.initialCount}/>)}
      </div>
      </> );
}
 
export default Counters;