
import './App.css';
import Box from './Box';
import InputBox from './InputBox';
import { useState} from 'react';
function App() {
  const [color, setColor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(color);
    setColor('')
  }
  return (
    <div className="App">
      <Box
        color={color}
      />
      <InputBox 
        color={color}
        setColor={setColor}
        handleSubmit={handleSubmit}
      />
      
    </div>
  );
}

export default App;
