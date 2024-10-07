
import Box from './Box';
import InputBox from './InputBox';
import { useState} from 'react';
function App() {
  const [color, setColor] = useState('');
  const [hexValue, setHexValue] = useState('');
  const [isDarkText, setIsDarkText] = useState(true);

  return (
    <div className="App">
      <Box
        color={color}
        hexValue={hexValue}
        isDarkText={isDarkText}
      />
      <InputBox 
        color={color}
        setColor={setColor}
        setHexValue={setHexValue}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}

      />
      
    </div>
  );
}

export default App;
