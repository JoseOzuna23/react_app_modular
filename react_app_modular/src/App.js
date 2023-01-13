import Nuestrosaludo from './componente_hola/saludo';
import Listas from './componente_lista/lista';
import './App.css';


function App() {
  return (
    <div className="App">           
      <Nuestrosaludo saludoname="Hola Dojo" />
      <Nuestrosaludo descripcion="Listas de tecnologia para aprender" />
      <Listas uno="Java" dos= "php" tres="html" cuatro="css" cinco="javascripts"/>
    </div>
    
  );
}

export default App;
