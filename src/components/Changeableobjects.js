import { arrayMove } from '@dnd-kit/sortable'


export const names = ["Drag me 1","Drag me 2","Drag me 3"];
export function handleDragEnd(event, items, setItems) {
  const { active, over } = event;

  if (active.id !== over.id) {
    setItems((items) => {
      const activeIndex = items.indexOf(active.id);
      const overIndex = items.indexOf(over.id);
      return arrayMove(items, activeIndex, overIndex);
    });
  }
}
