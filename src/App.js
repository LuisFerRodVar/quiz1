import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState("");
  const [likes, setLikes] = useState(0);
  const [popupVisible, setPopupVisible] = useState(true);
  const [firstValue, setFirstValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);
  const [result, setResult] = useState(0);

  function modifyLikes(operation) {
    setLikes(likes + operation);
  }
  const handleChange = (event) => {
    setName(event.target.value);
  };
  const handleFirstValue = (event) =>{
    setFirstValue(event.target.value);
  }
  const handleSecondValue = (event) =>{
    setSecondValue(event.target.value);
  }
  function add(){
    setResult(parseInt(firstValue) + parseInt(secondValue));
  }
  function sub(){
    setResult(parseInt(firstValue) - parseInt(secondValue));
  }
  function reset(){
    setResult(0);
  }

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
      <h1 className='title'>Actividad el contador </h1>
      <input className='values' type='number' onChange={handleFirstValue} />
      <input className='values' type='number' onChange={handleSecondValue} />  
      <input value='sumar' type='button' onClick={() => add()} />
      <input value='restar' type='button' onClick={() => sub()} />
      <input value='resetar' type='button' onClick={() => reset()} />
      <h1>El resultado es: {result}</h1>
    </>

  );
}

export default App;
