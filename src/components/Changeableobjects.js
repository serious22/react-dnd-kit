import { arrayMove } from '@dnd-kit/sortable'


export const names = ["my name","is","Sid"];
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
