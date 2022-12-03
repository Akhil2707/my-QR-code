
import {QRCodeSVG} from 'qrcode.react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Scan my QR code</p>
      <QRCodeSVG value="https://github.com/Akhil2707"
      size="256" /> 
      </header>
    </div>
  );
}

export default App;
