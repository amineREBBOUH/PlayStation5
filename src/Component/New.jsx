import "./New.css";
import title from "../Media/New00.png"
function New(params) {
    return(
        <div id="new">
           <div id="Ninfo">
            <div>
                <img src={title} alt="" />
                <h2>New PlayStation  Store Discounts</h2>
                <p>Discover the latest seasonal offers and promotions <br/> on the best games and additional content for PS5 <br/> and PS4.</p>
                <button>See All Offers</button>
            </div>
           </div>
           <div id="Npict"></div>
        </div>
    );
}export default New;