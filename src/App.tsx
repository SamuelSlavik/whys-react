import React from 'react';
import './assets/styles/default.css';
import {Container} from "./components/styles/Container.styled";
import {Article} from "./components/article/Article";

function App() {

  return (
    <Container>
      <Article author={"test"} date={"test"} text={"tes text"}/>
    </Container>
  )
}

export default App;
