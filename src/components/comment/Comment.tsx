import {StyledComment} from "./Comment.styled";

type CommentProps = {
  author: string
  text: string
  date: string
}

export const Comment: React.FC<CommentProps> = ({author, text, date}) => {
  return (
    <StyledComment>
      <p><b>{author}</b></p>
      <p>{date}</p>
      <p>text</p>
    </StyledComment>
  )
}