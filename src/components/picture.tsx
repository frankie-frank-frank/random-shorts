import React from 'react'
import { useDrag } from 'react-dnd'

export type PictureProps = {
    url: string;
    id: number;
}

function Picture({url, id}: PictureProps) {
  const [{isDragging}, drag] = useDrag(() => ({
    type: "image",
    item: {id: id},
    collect: (monitor) => ({
        isDragging: !!monitor.isDragging()
    })
   }))
  return (
    <img ref={drag} src={url} alt="Image welll" width={220} height={220} style={{border: isDragging ? "5px solid pink" : ""}}/>
  )
}

export default Picture