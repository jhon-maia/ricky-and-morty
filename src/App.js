import React,{useState,useEffect} from 'react';
import ImgContainer from './componentes/ImgContainer.jsx';
import api from './api.js';
import Btns from './componentes/Btns';




function App() {
  
  
  const[character,setCharacter]=useState([]);
  const [number, setNumber]=useState(0);


  const nextCharacter=()=>
  {
    setNumber(number+1)
    console.log(number)
  }
 
 const previousCharacter=()=>
 { setNumber(number-1)
   console.log(number)
 }

  
  useEffect(()=>{
    api.get('/character')
    .then((promise)=>{
      setCharacter(promise.data.results)
  })

   },[])
  
   console.log(character)
  
  
  return(
      <> 
      <div className="main-container">
      <ImgContainer character={character[number]}/>
      <Btns nextCharacter={nextCharacter} previousCharacter={previousCharacter} />
      </div>
      </>
  )
}

export default App;
