import React from "react";
import {StyledLoader} from "./Loader.styled";

type LoaderProps = {
  loading?: boolean
  children?: React.ReactNode
}

export const Loader: React.FC<LoaderProps> = ({loading = true, children}) => {
  return (
    <>
      {
        loading ?
          <StyledLoader></StyledLoader> :
          <>{children}</>
      }
    </>
  )
}