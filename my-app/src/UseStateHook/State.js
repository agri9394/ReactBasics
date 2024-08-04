import { useState } from "react";


function UseStateHook() {
  //This will reset everytime  the parent component rerenders
  // const [state,setState] = useState({count:0,theme:'red'})


  //This willnot reset everytime  the parent component rerenders
  const [state, setState] = useState(() => { return { count: 0, theme: 'red' } })

  const increment = () => {
    setState(prevState => {
      return {
        ...prevState,
        count: prevState.count + 1,
      }
    }
    )
  }

  const decrement = () => {
    setState(prevState => {
      return {
        ...prevState,
        count: prevState.count - 1,
      }
    }
    )
  }



  return (
    <div>
      <p onClick={increment }>+</p>
      <p>{state.count}</p>
      <p onClick={decrement }>-</p>
    </div>)
}

export default UseStateHook;
