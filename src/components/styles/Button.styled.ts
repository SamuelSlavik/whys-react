import styled from "styled-components";

export const StyledButton = styled.button `
  background-color: ${({theme}) => theme.primaryColor};
  color: ${({theme}) => theme.backgroundColor};
  padding: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 1rem;
  
  &:hover {
    background-color: ${({theme}) => theme.accentColor};
  }  
`