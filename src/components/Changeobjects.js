import React from 'react'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities';
import '../App.css';

export default function Changeobjects(props) {
    const{
        attributes,
        listeners,
        setNodeRef,
        transition,
        transform,
        isDragging
    } = useSortable({id:props.id});

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.5:1
    }
  return (
    <div className="changeContainer">
        <div ref={setNodeRef} style={style} className ="mycard" {...attributes} {...listeners}>
            {props.id}
        </div>
    </div>
  )
}
