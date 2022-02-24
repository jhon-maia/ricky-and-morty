import React from 'react';
 
const Btns=({previousCharacter,nextCharacter})=>
{
	return(
         
         <>
           <div className="btn-container">
           <button onClick={previousCharacter} className="btn">Previous</button>
           <button onClick={nextCharacter}className="btn">Next</button>
           </div>
         </>

		);
}

 export default Btns;