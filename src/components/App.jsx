import React from 'react';
import Header from './Header';
import PostArea from './PostArea';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';

function App() {
  return (
    <div>
      <Header/>
      <PostArea/>
    </div>
  );
}



export default App;