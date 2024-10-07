import React from 'react'

const Box = ({color, hexValue, isDarkText}) => {
  return (
    <div 
        className="box"
        style={{
            backgroundColor: color,
            color: isDarkText ? "#000": "#FFF"
        }}
    ><p>{color? color: "Empty Value"}</p>
    <p>{hexValue? hexValue: null}</p>
    </div>
  )
}

export default Box;