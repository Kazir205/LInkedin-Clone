import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Right__sidebar from './Right__sidebar';
import Feed from './Feed';
import { Provider, useSelector } from 'react-redux';
import { selectUser } from './userSlice';
import Login from './Login';
import { store } from './app/store';

function App() {
  const user = useSelector(selectUser)
  return (
    <div className="App">
      {/* header */}
      <Header/>
     {!user ? (
       <Login/>
     ) :
     (
          <div className="appBody">
          {/* sidebar */}
          <Sidebar/>
          {/* feed */}
          <Feed/>
          {/* rightsidebar */}
          <Right__sidebar/>
        </div>
     )
     }
      {/* app body */}

        
    </div>
 
  );
}


export default App;
