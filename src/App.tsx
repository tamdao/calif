import { Layout } from 'components'
import { Home, NotFound, Resources } from 'pages'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/resources/:id" />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
