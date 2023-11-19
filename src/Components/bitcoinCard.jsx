import bitcoin from '../Images/Vector.jpg'
import dummygraph from '../Images/dummyGraph.png'
export const BitcoinCard = () =>{
    return <div className="bitcoin-card">
    <div className='flex'>
       <img className='bitcoin-logo' src={bitcoin} alt="bitcoin" />
       <div>
           <p>Bitcoin</p>
           <p>BTC/USDT</p>
       </div>
       <img className='dummy-graph-pic' src={dummygraph} alt="dummygraph" />
    </div>
    <div className='flex bitcoin-text-wrap'>
      <div>
       <p className='grey-text'>Price</p>
       <p className='medium-text'>$25,776.80</p>
      </div>
      <div>
      <p> <span className='grey-text'>Vol</span> $8.5B</p>
       <p><span className='grey-text'>CHG</span> <span className='green-text'>23.1%</span></p>
      </div>
    </div>
   </div>
}