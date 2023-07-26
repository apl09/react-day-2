import { useState } from 'react'


    const Counter = (props)=> {
        const[counter, setCounter] = useState(props.initialValue)
        const increment=()=> {
            setCounter(counter+1)
        }
        const decrement=()=> {
            setCounter(counter-1)
        }    
        
        return <div>
            <button onClick={decrement}>-</button>
            <h1>{counter}</h1>
            <button onClick={increment}>+</button>
        </div>
        
    
  }

export default Counter
