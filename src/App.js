import React, {useState} from 'react'
import Navbar from './components/Navbar'
import Imgdrags from './components/Imgdrags'
import { DndContext, CollisionDetection ,closestCenter } from '@dnd-kit/core'
import Changeobjects from './components/Changeobjects'
import {SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { names, handleDragEnd } from './components/Changeableobjects'

export default function App() {
    const[items,setItems] = useState(names);
  return (
    <>
      <Navbar/>

      <DndContext>
        <Imgdrags/>
      </DndContext>
      
      <DndContext CollisionDetection={closestCenter} onDragEnd={(event) => handleDragEnd(event, items, setItems)}>
      <SortableContext items={items}
        strategy = {verticalListSortingStrategy}>
          {items.map((item) => <Changeobjects key = {item} id ={item} />)}
      </SortableContext>
      </DndContext>

    </>
  )
  
}
