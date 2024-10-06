import React from 'react'

const Box = ({color}) => {
  return (
    <div 
        className="box"
        style={{backgroundColor: color}}
    >{color}</div>
  )
}

export default Box;