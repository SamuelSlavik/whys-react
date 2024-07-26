import styled from "styled-components";

export const StyledComment = styled.div`
  width: 70%;
  height: auto;
  text-align: left;
  color: ${({theme}) => theme.primaryColor};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  margin-bottom: 1rem;
  margin-left: 1rem;
  border-radius: 10px;
  border: 1px solid ${({theme}) => theme.secondaryColor};
  
  .author {
    font-weight: 600;
    margin: 0;
    padding: 0;
  }
  .date {
    color: ${({theme}) => theme.secondaryColor};
    margin: 0;
    padding: 0;
  }
  .text {
    margin: 0;
    color: ${({theme}) => theme.primaryColor};
  }
`