import { Fragment } from "react";
import "./Games.css";
import Parte1 from "./ItemGames"
function Games(params) {
    
    return(
        <Fragment>
            <div id="games">
                <h1>New Games</h1>
              <div className="cont gg">
                
                {Parte1.Parte1().map((el,key)=>
                   <div className="itemG" key={key}>
                   <div><img src={el.img} alt="" /></div>
                   <p>{el.name}</p>
                    </div>
                )}
              </div>
              <div className="cont">
                 {Parte1.Parte2().map((el,key)=>
                   <div className="itemG" key={key}>
                   <div><img src={el.img} alt="" /></div>
                   <p>{el.name}</p>
                    </div>
                )}
              </div>
            </div>
        </Fragment>
    )
}export default Games;