import unflash1 from "../Images/unsplash_ZHvM3XIOHoE.jpg"
import unflash2 from "../Images/unsplash_iEEBWgY_6lA.jpg"
import unflash3 from "../Images/unsplash_o5NBw8GTnMc.jpg"

export const NinthContainer = ()=>{
    return <div className="ninth-container">
        <br /><br />
   <h2>Don’t take our word for it.</h2>
         <br />
        <p className="tag-line">Hear it from our expert community of traders who have made insane amounts in a short amount of time</p>
        <br /><br />
        <div className="funders-cards flex">
            <div>
             <p>I'm not a seasoned trader, but this website has made it easy for me to get started with crypto futures trading. Their KYC was very fast and the educational resources were really helpful.</p>
             <h4>Prakash Jamatia.</h4>
             <p>Founder, Tradeshala</p>
             <img className="unflash" src={unflash1} alt="" />
            </div>
            <div>
            <p>I'm not a seasoned trader, but this website has made it easy for me to get started with crypto futures trading. Their KYC was very fast and the educational resources were really helpful.</p>
             <h4>Shambhavi Nayak.</h4>
             <p>Commodity Trader</p>
             <img className="unflash" src={unflash2} alt="" />
            </div>
            <div>
            <p>I'm not a seasoned trader, but this website has made it easy for me to get started with crypto futures trading. Their KYC was very fast and the educational resources were really helpful.</p>
             <h4>Arjun Naik.</h4>
             <p>Equity Trader</p>
             <img className="unflash" src={unflash3} alt="" />
            </div>
        </div>
        <br /><br /><br />
    </div>
}