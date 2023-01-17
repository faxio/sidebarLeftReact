import React from 'react'
import { Link } from 'react-router-dom'

export const Sidebar = () => {
  return (
    <div className='SidebarContainer'>
        <Link to="./pagina1"> Página 1</Link>
        <Link to="./pagina2"> Página 2</Link>
        <Link to="./pagina3"> Página 3</Link>
    </div>
  )
}
