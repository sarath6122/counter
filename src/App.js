import{useState}from 'react'
import './App.css';

function App() {
  const[counter,setCounter]=useState(0);
//counter -state-to hold values

function incrementCounter(){
  setCounter(counter+1);
}
function decrementCounter(){
  if(counter!==0){
  setCounter(counter -1);
  }
}
function setToZero(){
  setCounter(0)
}


  return (
    <div 
    style={{
      display:'flex',
      flexdirection:'column',
      alignItems:'center',
      justifyContent:'center',
      border:'solid',
      border:'5',
      borderColor:'green',
      width:'30%',
      height:'100%',
      marginTop:'300px',
      marginLeft:'550px',
      backgroundColor:'silver',
      borderRadius:'20px'
    }}
    
    className="App">
      <header className="App-header">
      <h3
      style={{
        color:'black',
        fontSize:'25px',
        fontFamily:'timesNewRoman'
        
      }}
      >COUNTER APPLICATION</h3>
      <h2
      style={{
        border:'solid',
        textAlign:'center',
        borderRadius:'20px',
        backgroundColor:'white'

      }}
      >{counter}</h2>
      <button 
      style={
        {
         
          
          backgroundColor:'black',
          color:'white',
          padding:'10px',
          marginLeft:'60px',
          borderRadius:'50px'
          

        }
      }
       onClick={incrementCounter}>  ADD  </button>
      <button
       style={
        {
          backgroundColor:'black',
          color:'white',
          padding:'10px',
          marginLeft:'6px',
          borderRadius:'50px'

        }
      }
       onClick={decrementCounter}>RED</button>
      <button 
       style={
        {
          backgroundColor:'black',
          color:'white',
          padding:'10px',
          marginLeft:'10px',
          borderRadius:'50px'

        }
      }
      onClick={setToZero}>SET</button>
      </header>
    </div>
  );
}

export default App;
