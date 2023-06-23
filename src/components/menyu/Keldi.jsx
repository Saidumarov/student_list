import React, { useState } from 'react'

const Keldi = () => {
    const [buttonText, setButtonText] = useState("kelmadi");

    const handleClick1 = () => {
      setButtonText('Keldi');
      console.log(buttonText);
    };
  
    return (  
      <div>
        <p onClick={handleClick1}>{buttonText}</p>
      </div>
    );
}

export default Keldi