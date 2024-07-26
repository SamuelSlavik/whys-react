import styled from "styled-components";

export const StyledArticle = styled.div`
  width: 100%;
  height: auto;
  text-align: left;
  
  h2 {
    font-size: 1.5rem;
    margin-bottom: 0;
    padding: 0;
    color: ${({theme}) => theme.accentColor};
  }
  .date {
    margin-top: 0;
    padding: 0;
    color: ${({theme}) => theme.secondaryColor};
  }
  .text {
    color: ${({theme}) => theme.primaryColor};
  }
`

export const Hr = styled.hr`
  border: 0;
  height: 1px;
  background: ${({theme}) => theme.secondaryColor};
  margin: 1.5rem 0;
`