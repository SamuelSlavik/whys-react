import React from "react";

type LoaderProps = {
  loading?: boolean
  children?: React.ReactNode
}

export const Loader: React.FC<LoaderProps> = ({loading = true, children}) => {
  return (
    <>
      {
        loading ?
          <div>Loading... </div> :
          <>{children}</>
      }
    </>
  )
}