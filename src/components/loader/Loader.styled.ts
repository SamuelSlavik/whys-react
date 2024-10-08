import styled from "styled-components";

export const StyledLoader = styled.div `
  width: 3rem;
  aspect-ratio: 4;
  --_g: no-repeat radial-gradient(circle closest-side, ${({theme}) => theme.accentColor} 90%, transparent);
  background:
    var(--_g) 0%   50%,
    var(--_g) 50%  50%,
    var(--_g) 100% 50%;
  background-size: calc(100%/3) 100%;
  animation: dots 1s infinite linear;
  
  @keyframes dots {
    33%{background-size:calc(100%/3) 0%  ,calc(100%/3) 100%,calc(100%/3) 100%}
    50%{background-size:calc(100%/3) 100%,calc(100%/3) 0%  ,calc(100%/3) 100%}
    66%{background-size:calc(100%/3) 100%,calc(100%/3) 100%,calc(100%/3) 0%  }
  }
`