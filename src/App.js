import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState("");
  const [likes, setLikes] = useState(0);
  function modificarLikes(operacion){
    setLikes(likes + operacion);
  }
  const handleChange = (event) => {
    setName(event.target.value);
  };
  return (
    <> 
      <h1 className='title'>Cantidad de likes: {likes}</h1>
      <div className='panel__review'>
        <span onClick={() => modificarLikes(1)} className="material-symbols-outlined">thumb_up</span>
        <span onClick={() => modificarLikes(-1)} className="material-symbols-outlined">thumb_down</span> 
      </div>
      <h2 className='title2'>Su nombre es: {name} </h2>
      <input onChange={handleChange} type='text' placeholder='nombre' />
    
    </>

  );
}

export default App;
