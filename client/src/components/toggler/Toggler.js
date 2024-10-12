import React from 'react'
import './toggler.css'
const Toggler = ({onToggle,ischecked}) => {

  return (
    <>
    
    <label htmlFor="check" className="menuButton">
  <input id="check" type="checkbox" onClick={onToggle} checked={ischecked}/>
  <span className="top" />
  <span className="mid" />
  <span className="bot" />
</label>

  </>
  
  )
}

export default Toggler
