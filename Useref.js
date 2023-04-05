import React, { useRef } from 'react'

function Useref() {
    const ref = useRef(null)

    function handleclick () {
        ref.current.focus();
        
        
    }
  return (
    <div>
        <input type='text' placeholder='enter here' ref={ref}></input>
        <button onClick={handleclick}>click to add</button>
    </div>
  )
}

export default Useref