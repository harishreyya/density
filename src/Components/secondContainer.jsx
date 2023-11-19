import barsPic from "../Images/bars-pic.png"
import circularBall from "../Images/circular-ball.png"
import squarePic from "../Images/square-pic.png"

export const SecondContainer = () =>{
    return <div className="second-container flex">
        <div >
        <br />
        <br />
        <br />
        <div className="mobile-frames">
            <br />
            <img src={barsPic} alt="bars" />
            <br />
           <p>One App. Endless Possibilities</p>
           
        </div>
    <br />
    <br />
    <div className="mobile-frames">
    <br />
    <br />
            <img src={circularBall} alt="bars" />
            <br />
           <p>Future of Derivative Trading.</p>
           
        </div>
        <br />
        <br />
        <div className="mobile-frames">
        <br />
        <br />
            <img src={squarePic} alt="bars" />
            <br />
           <p>Is now here, for you.</p>
           
        </div>
        <br />
        </div>
    </div>
}