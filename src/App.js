import { useState } from 'react';
import './App.css';

function App() {
  const [likes, setLikes] = useState(0);
  function modificarLikes(operacion){
    setLikes(likes + operacion);
  }
  return (
    <> 
      <h1 className='title'>Cantidad de likes: {likes}</h1>
      <div className='panel__review'>
        <span onClick={() => modificarLikes(1)} className="material-symbols-outlined">thumb_up</span>
        <span onClick={() => modificarLikes(-1)} className="material-symbols-outlined">thumb_down</span> 
      </div>
    
    </>

  );
}

export default App;
