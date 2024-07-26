import React from "react";
import {StyledArticle} from "./Article.styled";

type ArticleProps = {
  author: string
  date: string
  text: string
}

export const Article: React.FC<ArticleProps> = ({author, date, text}) => {
  return (
    <StyledArticle>
      <h2>{author}</h2>
      <p>{date}</p>
      <p>{text}</p>
    </StyledArticle>
  )
}