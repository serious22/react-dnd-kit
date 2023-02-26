import React from 'react'
import Navbar from './components/Navbar'
import Imgdrags from './components/Imgdrags'
import { DndContext } from '@dnd-kit/core'

export default function App() {
  return (
    <>
      <Navbar/>

      <DndContext>
        <Imgdrags/>
      </DndContext>

    </>
  )
}
