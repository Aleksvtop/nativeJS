import React from 'react';

import './App.css';
import {messages} from "./05/05";
import {User} from "./06/06callBack";

const App = () => {

    const users = [{name: 'Dima'}, {name: 'Sveta'}, {name: 'Victor'}, {name: 'Ignat'}, {name: 'Alex'}]
    const liElements = users.map((u, index)  => <li key={index}>{u.name}</li>)
  return (
    <div className="App">
        <ul>
            {liElements}
        </ul>
        <User/>

    </div>
  );
}

export default App;
