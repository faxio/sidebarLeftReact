import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Pagina1 } from './routes/Pagina1'
import { Pagina2 } from './routes/Pagina2'
import { Pagina3 } from './routes/Pagina3'
import { Sidebar } from './Sidebar'

export const AppRoutes = () => {
  return (
    <>
        <Sidebar/>
        <Routes>
            <Route path="pagina1"  element={<Pagina1/>}/>
            <Route path="pagina2"  element={<Pagina2/>}/>
            <Route path="pagina3"  element={<Pagina3/>}/>
        </Routes>
    </>
  )
}
