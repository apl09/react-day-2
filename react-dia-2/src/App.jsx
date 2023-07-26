import Counter from "./components/Counter";
import Greeting from "./components/Greeting";
import './App.css'

function App() {
  

  return (
    <>   
      <div >
        <Counter initialValue= {0}/>
        <Counter initialValue= {2}/>
        <Counter initialValue= {4}/>                
      </div>
      <div>
      <Greeting name="Euralio" name2="Alfonsina"/>
      </div>
      </>        
  )
}

export default App
