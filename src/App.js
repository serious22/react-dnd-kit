import React, {useState} from 'react'
import Navbar from './components/Navbar'
import Imgdrags from './components/Imgdrags'
import { DndContext, CollisionDetection ,closestCenter } from '@dnd-kit/core'
import Changeobjects from './components/Changeobjects'
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'



export default function App() {
  
  const names = ["my name","is","Sid"];
  const[name,setName] = useState(names);
  return (
    <>
      <Navbar/>

      <DndContext>
        <Imgdrags/>
      </DndContext>
      
      <DndContext CollisionDetection={closestCenter} onDragEnd = {handledragend}>
        <SortableContext items={name}
        strategy = {verticalListSortingStrategy}>
          {name.map(name => <Changeobjects key = {name} id ={name} />)}
        </SortableContext>
      </DndContext>

    </>
  )
  function handledragend(event) {
    const{active,over} = event;

    if (active.id !== over.id) {  
      setName((items)=> {
        const activeIndex = items.indexOf(active.id);
        const overIndex = items.indexOf(over.id);
        return arrayMove(items,activeIndex,overIndex);
      })
      
    }
    
  }
}
