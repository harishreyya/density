import graphPicNifty from "../Images/graph-nifty-pic.png"
export const FifthContainer = () =>{
    return <div className="fifth-container">
        
        <div className='achievement-numbers flex trading-graph'>
             <div>
                <p>Same</p>
                <p>Strategies</p>
             </div>
             <div className='highlight-vline'></div>
             <div>
                <p>Same</p>
                <p>Indicators</p>
             </div>
             <div className='highlight-vline'></div>
             <div>
                <p>Better</p>
                <p>Levearage</p>
             </div>
             <div className='highlight-vline'></div>
             <div>
                <p>24x7</p>
                <p>Trading</p>
             </div>

        </div>
        <br /><br />
        <div>
            <img  src={graphPicNifty} alt="graph pic" />
        </div>
    </div>
}