import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';


const UserInput = (props) =>{
  return (
    <input name='username'  type='text' value={props.value} onChange={props.onChange}  maxlength="50"/>

  );
};

function UserOutput({data}) {
  return (
    <div>
      <div>
        {data.map((username) => {
            return <p key={username}>{username}</p>;
          })}
      </div>
    </div>
  );
};

function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className='App'>
      <UserOutput data={['first', 'second', 'third']} />
      <UserInput value={inputValue} onChange={({target}) =>{setInputValue(target.value)}}/>
      <h3>{inputValue}</h3>
    </div>
  );
  };

export default App;
