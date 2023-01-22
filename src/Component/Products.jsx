import { Fragment } from "react";
import "./products.css";
import $ from 'jquery'; 
import play5 from "../Media/Products/playstation-5.png"
import headset from "../Media/Products/headset.png";
import DualSense from "../Media/Products/DualSense.png";
import hd_camera from "../Media/Products/hd-camera.png";
import Media_Remote from "../Media/Products/Media-Remote.png";
function Products() {
    var index=0;
    var ind=4;
    const Products=[
        {
            img:play5,
            title:"PlayStation 5 Console",
            describe:"Enjoy a whole new generation <br /> of great PlayStation games."
        },
        {
            img:headset,
            title:"PULSE 3D™ Wireless Headset",
            describe:"Enjoy a seamless experience with the headset<br/> designed specifically to deliver 3D sound <br/>on PS5 consoles."
        },
        {
            img:DualSense,
            title:"DualSense Edge™ Wireless Controller",
            describe:"Gain the advantage in-game with configurable keys <br/> adjustable thumbsticks and triggers <br/> swappable thumbstick caps <br/> changeable rear keys, and more."
        },
        {
            img:hd_camera,
            title:"HD camera",
            describe:"Add yourself to your videos of game footage <br/> and other broadcasts with smooth and<br/> precise rendering, in full-HD."
        },
        {
            img:Media_Remote,
            title:"Multimedia remote control",
            describe:"Easily control your movies, streaming services <br/> and more from your PS5 console and its<br/> intuitive organization."
        }
    ]
   const move=()=>{
    index++;
     if(index==Products.length){
         index=0;
     }
     $(".pictP img")[0].src=Products[index].img;
     $(".infoP h1")[0].innerHTML=Products[index].title;
     $(".infoP p")[0].innerHTML=Products[index].describe;
     
   }
   const back=()=>{
    index--;
    if (index<0) {
        index=4
    }
    $(".pictP img")[0].src=Products[index].img;
    $(".infoP h1")[0].innerHTML=Products[index].title;
    $(".infoP p")[0].innerHTML=Products[index].describe;
    if(index<=0){
        index=4;
    }
  }
  setInterval(() => {
    move();
  }, 30000);
  const increase=()=>{
    move();
  }
  const decrease=()=>{
    back();
  }
   return(
    <Fragment>
         <div id="Products">
         <button id="prev" onClick={()=>decrease()}><i className="fa-solid fa-angle-left" ></i></button>
           <div className="product active">
            <div className="infoP">
                <h1> PlayStation 5 Console</h1>
                <p>Enjoy a whole new generation <br /> of great PlayStation games.</p>
                <button>Learn More</button>
            </div>
            <div className="pictP"><img src={play5} alt="" /></div>
           </div>
           <button id="next" onClick={()=>{increase()}}><i className="fa-solid fa-angle-right" ></i></button>
         </div>
    </Fragment>
   ) 
} export default Products;