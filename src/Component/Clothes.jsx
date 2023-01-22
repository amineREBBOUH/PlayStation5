import { Fragment } from "react";
import "./clothes.css";
import C from "../Media/C.png";
import C1 from "../Media/Gear/C1.webp"
import C2 from "../Media/Gear/C2.webp"
import C3 from "../Media/Gear/C3.webp"
import C4 from "../Media/Gear/C4.webp"
function Clothes(params) {
    return(
        <Fragment>
            <div id="Clothes">
                <div className="Cinfo">
                    <img src={C} alt="" />
                    <h2>Officially licensed PlayStation <br/> apparel and merchandise</h2>
                    <p>Browse the PlayStation Gear store for official accessories,<br/> collectibles, apparel and more</p>
                </div>
                <div className="Cpict">
                    <div className="CLitem">
                        <div><img src={C1} alt="" /></div>
                        <h3>PlayStation™ Heritage Zip Hoodie</h3>
                        <button>Buy Now</button>
                    </div>
                    <div className="CLitem">
                        <div><img src={C2} alt="" /></div>
                        <h3>PlayStation™ Logo T-Shirt</h3>
                        <button>Buy Now</button>
                    </div>
                    <div className="CLitem">
                        <div><img src={C3} alt="" /></div>
                        <h3>PlayStation™ 47 - Cap</h3>
                        <button>Buy Now</button>
                    </div>
                    <div className="CLitem">
                        <div><img src={C4} alt="" /></div>
                        <h3>PlayStation™ Heritage Mug</h3>
                        <button>Buy Now</button>
                    </div>
                </div>
                <div className="btnC"> <button>Descover The Collctions</button></div> 
            </div>
        </Fragment>
    );
}export default Clothes;