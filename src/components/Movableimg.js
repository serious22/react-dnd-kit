import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import {CSS} from '@dnd-kit/utilities';

export default function Movableimg(props) {
   
    const { isDragging, attributes, setNodeRef, transform, listeners } = useDraggable({
        id: props.id,
        data: {
            supports: ['images'],
          },
        item:{id: props.id},
    });
    
    const style = {
        transform: CSS.Translate.toString(transform),
        border: isDragging ? '5px solid pink' : 'none'
      };
    return (
        <>
            
            <img 
                ref={setNodeRef} 
                src={props.src} 
                alt={props.atext}
                style={style}
                {...attributes}
                {...listeners}
            />
        </>
    );
}
