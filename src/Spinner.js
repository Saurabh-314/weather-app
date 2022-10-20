import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";
export default function Spinner(props) {
  return (
    <div className="loader">
      <ClipLoader loading={props.loading} color="green" width="200" height="100" size={200} />
    </div>
  )
}
