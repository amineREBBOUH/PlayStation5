import "./History.css";
import l from "../Media/logo2.png"
import { Fragment } from "react";
function History(params) {
    setTimeout(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.className="show";
                } else {
                    entry.target.className="hidden";
                }
              })
          },{rootMargin: ' -50% 0% -50% 0%'})
          
          const blogs = document.getElementById('history0')
          observer.observe(blogs)
      }, 100);
    return(
        <Fragment>
            <h1 id="ev">The evaluation of create PlayStation</h1>
        <div id="history0">
        <div id="history">
            <div className="Hitem">
                <div className="Hinfo">
                    <div>
                        <h1> <img src={l} alt="" /> PlayStation I <span>(1994 / 1995)</span></h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Dolorum, asperiores.</p>
                        <button>Explore Now</button>
                    </div>
                </div>
                <div className="one h">
                </div>
            </div>
            <div className="Hitem">
                <div className="Hinfo">
                    <div>
                    <h1> <img src={l} alt="" /> PlayStation II <span>(1994 / 1995)</span></h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Dolorum, asperiores.</p>
                        <button>Explore Now</button>
                    </div>
                </div>
                <div className="two h">
                </div>
            </div>
            <div className="Hitem">
                <div className="Hinfo">
                    <div>
                    <h1> <img src={l} alt="" /> PlayStation III <span>(1994 / 1995)</span></h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Dolorum, asperiores.</p>
                        <button>Explore Now</button>
                    </div>
                </div>
                <div className="tree h">
                </div>
            </div>
            <div className="Hitem">
                <div className="Hinfo">
                    <div>
                    <h1> <img src={l} alt="" /> PlayStation IV <span>(1994 / 1995)</span></h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Dolorum, asperiores.</p>
                        <button>Explore Now</button>
                    </div>
                </div>
                <div className="four h">
                </div>
            </div>
            <div className="Hitem">
                <div className="Hinfo">
                    <div>
                    <h1> <img src={l} alt="" /> PlayStation V <span>(1994 / 1995)</span></h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Dolorum, asperiores.</p>
                        <button>Explore Now</button>
                    </div>
                </div>
                <div className="five h">
                </div>
            </div>
        </div>
        </div>
        </Fragment>
    );
}export default History;