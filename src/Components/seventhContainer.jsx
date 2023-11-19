import smallMain from '../Images/small-main.jpg'
import main from "../Images/main.jpg"
import mobileFirstPic from "../Images/mobile-1pic.jpg"
import acountDp from "../Images/acount-dp.png"
import amountCredit from "../Images/amountGiven.png"
import mobileGraph from "../Images/mobile-graph.jpg"

export const SeventhContainer = () =>{
    return <div className="seveth-container">
        <h1>Derivates made simple in  <span className="hightlight-word">3 Easy</span> Steps</h1><br />
        <br /><br />
        <div className='flex create-acount-wrap'>
        <div className='mobile-display mobile-middle'>
                <img src={main} alt="main" />
                <img src={mobileFirstPic} alt="img" />
            </div>
            <div className='create-acount-rule'>
                <br /><br /><br /><br /><br />
                <img className='acount-dp' src={acountDp} alt="dp" />
                <h3>Create Account</h3>
                <p>Register and Complete your verification <br/>
                Verification in less than 2 minutes
                </p>
                <button className="trade-btn explore-btn">TRADE NOW</button>
            </div>
            </div>

            <br /><br />
            <div class="styled-div"></div>
            <br /><br />

            <div className='flex create-acount-wrap'>
        <div className='mobile-display mobile-middle'>
                <img src={smallMain} alt="main" />
                <img src={amountCredit} alt="img" />
            </div>
            <div className='create-acount-rule'>
                <br /><br /><br /><br /><br />
                <img className='acount-dp' src={acountDp} alt="dp" />
                <h3>Deposit Funds</h3>
                <p>Add funds quickly using <br />a variety of payment methods
                </p>
                <button className="trade-btn explore-btn">TRADE NOW</button>
            </div>
            </div>

            <br /><br />
            <div class="styled-div"></div>
            <br /><br />

            <div className='flex create-acount-wrap'>
        <div className='mobile-display mobile-middle'>
                <img src={smallMain} alt="main" />
                <img src={mobileGraph} alt="img" />
            </div>
            <div className='create-acount-rule'>
                <br /><br /><br /><br /><br />
                <img className='acount-dp' src={acountDp} alt="dp" />
                <h3>Become a Trader</h3>
                <p>Choose Your Trading <br />Pair & Trade Seamlessly
                </p>
                <button className="trade-btn explore-btn">TRADE NOW</button>
            </div>
            </div>

    </div>
}