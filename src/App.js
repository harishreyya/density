import { Header } from './Components/Header';
import './App.css';
import { FirstContainer } from './Components/firstContainer';
import { SecondContainer } from './Components/secondContainer';
import { ThirdContainer } from './Components/thirdContainer';
import { FourthContainer } from './Components/fourthContainer';
import { FifthContainer } from './Components/fifthContainer';
import { SixthContainer } from './Components/sixthContainer';
import { SeventhContainer } from './Components/seventhContainer';
import { EightContainer } from './Components/eightContainer';
import { NinthContainer } from './Components/ninthContainer';
import { TenthContainer } from './Components/tenContainer';

function App() {
  return (
    <div>
    <div className="App">
      <Header/>
      <div class="styled-div"></div>
      <br/><br/><br/>
      <FirstContainer/>
      <SecondContainer/>
      <br/><br/><br/>
      <ThirdContainer/>
      <br/><br/><br/>
      <FourthContainer/>
      
      <br/><br/><br/>
      <FifthContainer/>
      </div>
     
      <br/><br/><br/>
      <SixthContainer/>
      <div className='App'>
      <br/><br/><br/>
      <SeventhContainer/>
      <br/><br/><br/>
      <EightContainer/>
      </div>
      <div>
      <br/><br/><br/>
      <NinthContainer/>
      
      <br/><br/><br/>
      <TenthContainer/>
      </div>
    </div>
  );
}

export default App;
