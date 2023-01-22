import { Fragment } from "react";
import "./lastest.css";
import games from "../Media/games.png";
import ps from "../Media/ps_0.png"
import png from "../Media/png.png";
function Lastest(params) {
    return(
        <Fragment>
            <div id="lastest">
               <div className="l1">
               <div className="l11">
                <div>
                <h1> <img src={ps} alt="" /> PlayStation Plus </h1>
                <p>Enhance your PlayStation experience with access to online multiplayer <br/> games of the month, exclusive discounts and more.</p>
                <button>Browse PlayStation Plus</button>
                </div>
               </div>
               <div className="l22">
               <img src={games} alt="" className="g ani"/>
               </div>
               </div>
               <div className="l2">
                  <div id="su">
                    <img src={png} alt="" />
                    <h1>Season 4 has started</h1>
                    <button>More Informations</button>
                  </div>
               </div>
            </div>
        </Fragment>
    );
}export default Lastest;