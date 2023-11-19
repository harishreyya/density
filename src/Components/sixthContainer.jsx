import twentypercent from "../Images/twentyfivepercent.png"
import slentpic from "../Images/slentpic.png"
export const SixthContainer = () =>{
    return <div className="sixth-container">
        <br /><br />
   <h2>Start Small. Earn Big.</h2>
         <br />
        <p className="tag-line">Deposity a minimum of 1000 and get a Deposit bonus + dedicagted relationship manager</p>
        <br /><br />
        <div className="flex percent-wrapper">
            <div className="percent-div">
                <div className="flex">
               <img className="twenty-pic" src={twentypercent} alt="25%" />
               </div>
               <h3>Deposit <br/> Bonus.</h3>
               <p>Our assets' liquidity is unmatched in the market, with a small bid-ask spread and a well-balanced order book.</p>
            </div>
            <div className="percent-div">
                <div className="flex">
                <img className="twenty-pic" src={slentpic} alt="slenthuman" />
                </div>
                <h3>Dedicated <br/>
                 Relationship Manager.</h3>
               <p>Our assets' liquidity is unmatched in the market, with a small bid-ask spread and a well-balanced order book.</p>
            </div>
        </div>
        <br /><br /><br />
    </div>
}