import React from 'react'
import InfoContainer from './InfoContainer'


const ImgContainer=({character})=>{

return(
	<div className="img-container">
	  <h1>{character?.name}</h1>
	  <img src={character?.image} />
      <InfoContainer info={character}/>
	  
           
          

	</div>

	);

} 


export default ImgContainer; 