import React, {useState} from 'react'
import Movableimg from './Movableimg';
import '../App.css';



const Allimages = [
  {
    id: 1,
    atext:"Image1",
    src:"https://images.nightcafe.studio/jobs/ud0WEyAT9wdIzAxf2Apw/ud0WEyAT9wdIzAxf2Apw--1--bfrnf.jpg?tr=w-1600,c-at_max"
  },
  {
    id: 2,
    atext:"Image2",
    src:"https://images.nightcafe.studio/jobs/00zd4GEPKqlxOka7xyzg/00zd4GEPKqlxOka7xyzg--1--9028a.jpg?tr=w-1600,c-at_max"
  },
  {
    id: 3,
    atext:"Image3",
    src:"https://images.nightcafe.studio/jobs/6zXwg7BzE0RHbqAvv0Tv/6zXwg7BzE0RHbqAvv0Tv--2--fwbnz.jpg?tr=w-640,c-at_max"
  }
];



export default function Imgdrags() {
  return (
    <>
      <div className="imgcontainer">
        {Allimages.map ((ele) =>
          {
            return<Movableimg key={ele.id} src = {ele.src} id = {ele.id} alt = {ele.atext}/>;
          })
        }
      </div>


      <div className="imgdropper"></div>
    
    </>
  )
}

