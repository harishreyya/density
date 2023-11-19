
import { BitcoinCard } from './bitcoinCard'
import graphPic from '../Images/Rectangle.png'

export const FourthContainer = ()=>{
    return <div className="fourth-container">
        <h2>Explore the Markets like it is your <span className="hightlight-word">Playground.</span> </h2>
        <p className="tag-line">Search for your favorite coins and stay ahead of the market</p>
        <br/><br/><br/>
        <br/><br/><br/>
        <br/><br/><br/>
        <div className="flex bitcoin-card-wrapper">
            <BitcoinCard/>
            <BitcoinCard/>
            <BitcoinCard/>
        </div>
        <div>
            <img className='graph-pic' src={graphPic} alt="" />
        </div>
        <div>
            <button className="trade-btn explore-btn">EXPLORE MARKETS</button>
        </div>
    </div>
}