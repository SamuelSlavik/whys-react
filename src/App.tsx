import React from 'react';
import './assets/styles/default.css';
import {Container} from "./components/styles/Container.styled";
import {Article} from "./components/article/Article";
import {Comment} from "./components/comment/Comment";

function App() {

  return (
    <Container>
      <Article author={"test"} date={"test"} text={"tes text"}/>
      <Comment author={"test comment"} text={"test com"} date={" test com date"} />
    </Container>
  )
}

export default App;
