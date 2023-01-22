import "./css.css";
import logo2 from "../Media/logo2.png"
import logo3 from "../Media/logo3.png"
import p1 from "../Media/pict1.png";
import p2 from "../Media/pict2.png";
import p3 from "../Media/pict3.png";
import p4 from "../Media/pict4.png";
function Body(params) {
    var index=1;
    const animation=()=>{
         const elements=document.getElementsByClassName("bag");
         for (let i = 0; i < elements.length; i++) {
            elements[i].classList.remove("anim") 
           elements[i].classList.add("rem") 
         }
         const elementss=document.getElementsByClassName('item');
        for (let i = 0; i < elements.length; i++) { 
            elementss[i].classList.remove("on") ;
        }
        elementss[index].classList.add("on");
         elements[index].classList.add("anim");
         elements[index].classList.remove("rem");
         index++;
         if (index==4) {
            index=0;
         }
        
    }
    setInterval(() => {
        slide();
        animation();
    }, 30000);
    const move=(e)=>{
        
        const elements=document.getElementsByClassName('item');
        for (let i = 0; i < elements.length; i++) { 
            elements[i].classList.remove("on") ;
        }
        e.target.classList.add("on") ;
       index=parseInt(e.target.id);
       slide();
       animation();
       
        
    }
    const slide=()=>{
     const slide=document.getElementById('slider');
     switch (index) {
        case 0:
            slide.scroll(0, 0);
            break;
        case 1:
                slide.scroll( 230,0);
            break;
        case 2:
                slide.scroll( 480,0);
            break;
        case 3:
            slide.scroll( 880,0);
            break;
     }
    }
    return(
        <>
        <div id="body">
            <img src={logo2} alt="" id="img1"/>
            <div id="pict1" className="bag anim">
                <div>
                    <h1>Great Game You can't miss in 2023</h1>
                    <p>From Innovative indie games to cutting-edge big budget title,<br />discover the most exicting games coming to ps5 next year</p>
                    <button>Start Exploring</button>
                </div>
            </div>
            <div id="pict2" className="bag rem ">
                <div className="div22">
                <h1>Adventures are Unforgetable</h1>
                <p>Play as one the Straw Hat crew members in this all-new RPG set in <br />the World of the hit anime One Piece ,out Now on ps4 and ps5</p>
                <button>More Informations</button>
                </div>
            </div>
            <div id="pict3" className="bag rem">
                <div>
                <h1><img src={logo3} alt="" />Live a New Reality</h1>
                <p>Move than 3à Games are on track to accompany the launch of ps VR2, <br />including a free update for Gran Turisom7,while other titles  <br />in developement ,such as Beat Saber</p>
                <button>More Informations</button>
                </div>
            </div>
            <div id="pict4" className="bag rem">
                 <div id="div44">
                   <h1>Explore  Great Holiday Deals</h1>
                   <p>Incredibale offres are available with the renwal of the January  Super Promo ,Descover what's New</p>
                   <button id="btns">see Offre</button>
                 </div>
            </div>
            
           
        </div>
        <div className="slider" id="slider">
            <div className="item on" >
                <img src={p1} alt=""onClick={(e)=>move(e)}id="0" />
            </div>
            <div className="item ">
            <img src={p2} alt="" onClick={(e)=>move(e)}id="1"/>
            </div>
            <div className="item ">
            <img src={p3} alt="" onClick={(e)=>move(e)} id="2"/>
            </div>
            <div className="item ">
            <img src={p4} alt="" onClick={(e)=>move(e)} id="3"/>
            </div>
        </div>
        </>
    );
}export default Body;