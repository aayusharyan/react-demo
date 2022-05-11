import React from 'react'
import { Link } from 'react-router-dom'

const nav = () => {
  return (
    <div>
      <Link to="/">Homepage</Link>
      &nbsp; | &nbsp;
      <Link to="/about">About</Link>
    </div>
  )
}

export default nav