import Saludo from "./Saludo";
import foto from './assets/terminator.jpg';
function App(){
  const usuario1 = {nombre:"Victor", edad:30}
  return (
    <>
      <img src={foto} alt="mi foto" width="200"></img>
    <Saludo usuario={usuario1} />

    <h3>Estoy modificando el proyecto con mi nueva funcionalidad</h3>
    
    </>
  );
}

export default App;
