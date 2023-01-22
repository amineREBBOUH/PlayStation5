import "./css.css";
import $ from 'jquery'; 
import logo from "../Media/logo.png"
function Nav() {
    const rotate=(e)=>{
      e.preventDefault();
      $(".sudiv").slideUp();
        console.log(e.target);
    const elemnts=document.getElementsByClassName("fa-angle-right");
    const a=document.getElementsByClassName("a");
      for (let index = 0; index < elemnts.length; index++) {
        elemnts[index].classList.remove("rotate");
        
      }
      for (let index = 0; index < a.length; index++) {
        a[index].classList.remove("active")
        
      }
      e.target.classList.add("active")
    const i=e.target.getElementsByTagName("i")[0];
    i.classList.add("rotate");
    $("."+e.target.name).slideToggle();
    }
    const derotate=()=>{
        const elemnts=document.getElementsByClassName("fa-angle-right");
    const a=document.getElementsByClassName("a");
      for (let index = 0; index < elemnts.length; index++) {
        elemnts[index].classList.remove("rotate");
        
      }
      for (let index = 0; index < a.length; index++) {
        a[index].classList.remove("active")
        
      }
     }
     const slide=()=>{
        $(".sudiv").slideUp();
         derotate();
     }
    return(
        <>
        <nav>
          <div className="div1">
            <img src={logo} alt="" />
            <ul>
                <li onClick={(e)=>rotate(e)}  ><a href=""name="G" className="a ">Games <i className="fa-solid fa-angle-right" ></i></a></li>
                <li onClick={(e)=>rotate(e)} ><a href=""name="M"className="a ">Material <i className="fa-solid fa-angle-right"></i></a></li>
                <li onClick={(e)=>rotate(e)} ><a href=""name="S"className="a ">Services <i className="fa-solid fa-angle-right"></i></a></li>
                <li onClick={(e)=>rotate(e)}><a href=""name="N"className="a ">News <i className="fa-solid fa-angle-right"></i></a></li>
                <li onClick={(e)=>rotate(e)} ><a href=""name="Sh"className="a ">Shop <i className="fa-solid fa-angle-right"></i></a></li>
            </ul>
          </div>
          <div className="div2">
             <button>login</button>
             <span><i className="fa fa-search" aria-hidden="true"></i></span>
             <span><i className="fa fa-bars" aria-hidden="true"id="bars"></i></span>
          </div>
        <div className="sudiv G" onMouseLeave={(e)=>slide(e)}></div>
        <div className="sudiv M" onMouseLeave={(e)=>slide(e)}></div>
        <div className="sudiv S" onMouseLeave={(e)=>slide(e)}></div>
        <div className="sudiv N" onMouseLeave={(e)=>slide(e)}></div>
        <div className="sudiv Sh" onMouseLeave={(e)=>slide(e)}></div>
        </nav>
      
        </>
    );
}export default Nav;