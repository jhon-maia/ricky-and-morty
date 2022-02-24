import React from 'react'

const InfoContainer=({info})=>
{
	return(

         <>
         <div className="info-container">
		 <p>specie:{info?.species}</p>
         <p>gender:{info?.gender}</p>
         <p>status:{info?.status}</p>
         <p>location:{info?.location.name}</p>
         </div>
         </>
        

		
    )
}


export default InfoContainer;