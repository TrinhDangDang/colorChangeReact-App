import colorNames from 'colornames';
import React from 'react'

const InputBox = ({color, setColor, setHexValue, isDarkText, setIsDarkText}) => {
  return (
    <form className='changeColorForm' onSubmit={(e)=> e.preventDefault()}>
        <input
            autoFocus
            id="changeColor"
            type="text"
            placeholder='choose a color'
            required
            value={color}
            onChange={(e) => {
                setColor(e.target.value);
                setHexValue(colorNames(e.target.value));
            }}
        />
        <button
            type="button"
            onClick={()=> setIsDarkText(!isDarkText)}
        >
            Toggle Text Color
        </button>
    </form>
  )
}

export default InputBox