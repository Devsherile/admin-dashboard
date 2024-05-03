import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div 
    className="items-center space-y-8 text-center justify-center m-16 "
    >
      <h1>This is the Home page</h1>
    <Link to="/login"
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</Link>
    
 
    </div>
  )
}
