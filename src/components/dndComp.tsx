import React from 'react'
import Picture from './picture'

export const PictureList = [
    {
        id: 1,
        url: "https://www.unwomen.org/sites/default/files/Headquarters/Images/Sections/Partnerships/GoodwillAmbassadors/UNwomen_AH_Photo_400px.jpg?h=375&la=en&w=300"
    },
    {
        id: 2,
        url: "https://www.sheknows.com/wp-content/uploads/2022/12/charlize-theron-1.jpg?resize=1280,960"
    },
    {
        id: 3,
        url: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/9hJ59ogLxgcZDkvfGcjLHqbB5Pl.jpg"
    }
]

function DndComp() {
  return (
    <div className='flex-row-style'>
        <div className='flex-col-style'>
            {
                PictureList.map((item) => {
                    return <Picture id={item.id} url={item.url} key={item.id}/>
                })
            }
        </div>
        <div className='flex-col-style'></div>
    </div>
  )
}

export default DndComp