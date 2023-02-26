import React from 'react';
import { useDraggable } from '@dnd-kit/core';

export default function Movableimg({id,src,atext}) {
    const { isDragging, attributes, setNodeRef } = useDraggable({
        id: id,
        data: { type: 'image' }
    });

    return (
        <img 
            ref={setNodeRef} 
            src={src} 
            alt={atext}
            style={{ border: isDragging ? '5px solid pink' : 'none' }}
            {...attributes}
        />
    );
}