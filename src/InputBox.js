import React from 'react'

const InputBox = ({color, setColor, handleSubmit}) => {
  return (
    <form className='changeColorForm' onSubmit={handleSubmit}>
        <label></label>
        <input
            id="changeColor"
            type="text"
            placeholder='choose color'
            required
            value={color}
            onChange={(e) => setColor(e.target.value)}
        />
    </form>
  )
}

export default InputBox