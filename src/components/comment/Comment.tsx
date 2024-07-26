import {StyledComment} from "./Comment.styled";

type CommentProps = {
  author: string
  text: string
  date: string
}

export const Comment: React.FC<CommentProps> = ({author, text, date}) => {
  return (
    <StyledComment>
      <div>
        <p className={"author"}><b>{author}</b></p>
        {/* Basing date parsing, for better result I would suggest to separate parsing function into some helperFunctions.ts */}
        <p className={"date"}>{new Date(date).toLocaleString()}</p>
      </div>
      <p className={"text"}>{text}</p>
    </StyledComment>
  )
}