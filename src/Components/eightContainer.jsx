import pic1 from "../Images/1675483650655 Background Removed 1.jpg"
import pic2 from "../Images/20200117133556-UtsavSomani Background Removed 1.jpg"
import pic3 from "../Images/6IHD3HIa_400x400 Background Removed 1.jpg"
import pic4 from "../Images/IMG_20220825_085142_768 Background Removed 1.jpg"
import pic5 from "../Images/image Background Removed 1.jpg"
import pic6 from "../Images/image 117.jpg"
import pic7 from "../Images/image 116.jpg"
import pic8 from "../Images/pic-A Background Removed 1.jpg"

export const EightContainer = () =>{
    return <div className="eight-container">
    <h1>Backed by the Best.</h1><br />
        <br />
         <br />
        <div>
           
        
            <div className="flex ceo-images">
                <div><img src={pic1} alt="" />
                <p>Utsav Somani</p></div>
                <div><img src={pic2} alt="" />
                <p>Aditya Nagarsheth</p></div>
                <div><img src={pic3} alt="" />
                <p>Gokul Rajaram</p></div>
                <div><img src={pic4} alt="" />
                <p>Sajid Rehman</p></div>
                <div><img src={pic5} alt="" />
                <p>Arjun Sethi</p></div>
            </div>
            <br />
            <div className="flex ceo-images">
                <div><img src={pic6} alt="" />
                <p>Kunal Shah</p></div>
                <div><img src={pic7} alt="" />
                <p>Sandeep Nailawal</p></div>
                <div><img src={pic8} alt="" />
                <p>Karn Vivek Nagpal</p></div>
            </div>
        </div>
        
    </div>
}