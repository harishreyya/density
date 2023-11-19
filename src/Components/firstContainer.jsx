import main from '../Images/main.jpg'
import mobileFirstPic from "../Images/mobile-1pic.jpg"
import mobileSecondPic from "../Images/mobile-2pic.jpg"
import mobileThirdPic from "../Images/mobile-3pic.jpg"

export const FirstContainer = () =>{
    return <div className="first-container">
        <h1>It’s time to trade, the <span className="hightlight-word">future.</span></h1>
        <p className="tag-line">Trade BTC, ETH Futures with 125x leverage and earn rewards.</p>
        <br />
        <br />
        <div className="mobile-parent">
        <div className="mobile-wrapper-bg"></div>
        <div className="mobiles-showcase flex">
            <div className='mobile-display mobile-left'>
                <img  className='main-mobile-pic' src={main} alt="main" />
                <img src={mobileThirdPic}alt="img" />
            </div>
            <div className='mobile-display mobile-middle'>
                <img src={main} alt="main" />
                <img src={mobileFirstPic} alt="img" />
            </div>
            <div className='mobile-display mobile-right'>
                <img  className='main-mobile-pic' src={main} alt="main" />
                <img src={mobileSecondPic} alt="img" />
            </div>

        </div>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className='achievement-numbers flex'>
             <div>
                <h2>00%</h2>
                <p>Conversion Fee</p>
             </div>
             <div className='highlight-vline'></div>
             <div>
                <h2>500 Mn+</h2>
                <p>Lifetime Volume Traded</p>
             </div>
             <div className='highlight-vline'></div>
             <div>
                <h2>250+</h2>
                <p>Total Tradable Pairs</p>
             </div>
             <div className='highlight-vline'></div>
             <div>
                <h2>15,000+</h2>
                <p>Traders</p>
             </div>

        </div>
    </div>
}