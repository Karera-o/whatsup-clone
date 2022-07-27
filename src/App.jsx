import './App.css';
import './AppResponsive.css';
import { Contact } from './ui/components/leftSide/contact/contact';
import { LeftSideHeader } from './ui/components/leftSide/header/leftSideHeader';
import { RightSideHeader } from './ui/components/rightSide/header/rightSideHeader';
import { RightSideFooter } from './ui/components/rightSide/rightSideFooter/rightSideFooter';
import { RightSideMain } from './ui/components/rightSide/rightSideMain/rightSideMain';


function App() {
  return (
    <div className="App">
      
      <div id="app_leftSide">
        <LeftSideHeader/>
        <Contact />
      </div>
      <div id="app_mainSide">
        <RightSideHeader />
        <RightSideMain />
        <RightSideFooter/>
      </div>
    </div>
  );
}

export default App;
