import React from "react";
import {StyledArticle, Hr} from "./Article.styled";

type ArticleProps = {
  author: string
  date: string
  text: string
}

export const Article: React.FC<ArticleProps> = ({author, date, text}) => {
  return (
    <StyledArticle>
      <h2>{author}</h2>
      {/* Basing date parsing, for better result I would suggest to separate parsing function into some helperFunctions.ts */}
      <p className={"date"}>{new Date(date).toLocaleString()}</p>
      <p className={"text"}>{text}</p>
      <Hr></Hr>
    </StyledArticle>
  )
}