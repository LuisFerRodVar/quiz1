import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState("");
  const [likes, setLikes] = useState(0);
  const [popupVisible, setPopupVisible] = useState(true);

  function modifyLikes(operation) {
    setLikes(likes + operation);
  }
  const handleChange = (event) => {
    setName(event.target.value);
  };

  const togglePopup = () => {
    setPopupVisible(!popupVisible);
  };
  return (
    <>
      <h1 className='title'>Cantidad de likes: {likes}</h1>
      <div className='panel__review'>
        <span onClick={() => modifyLikes(1)} className="material-symbols-outlined">thumb_up</span>
        <span onClick={() => modifyLikes(-1)} className="material-symbols-outlined">thumb_down</span>
      </div>
      <h2 className='title2'>Su nombre es: {name} </h2>
      <input onChange={handleChange} type='text' placeholder='nombre' />

      {popupVisible ? (
        <div className='popup'>
          <h3 className='title__popup'> Bienvenido al curso de multimedios </h3>
          <input type='button' value='cerrar' onClick={togglePopup} />
        </div>
      ) : (
        <input className='button__open' type='button' value='abrir' onClick={togglePopup} />
      )}

    </>

  );
}

export default App;
