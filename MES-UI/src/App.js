import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import './App.css';
import MESScreen from './Components/HomeTabs/MESScreen';
import NavBar from './Components/NavBar/NavBar';
import PRODReleaseScreen from './Components/ReleaseScreen/PRODReleaseScreen';
import INWDReleaseScreen from './Components/ReleaseScreen/INWDReleaseScreen';
import ExecutionScreenTabs from './Components/HomeTabs/ExecutionScreenTabs';
import DISPReleaseScreen from './Components/ReleaseScreen/DISPReleaseScreen';
import POSummaryScreen from './Components/HomeTabs/POSummaryScreen';
import ModificationScreen from './Components/ModificationScreen/ModificationScreen';

function App() {
  return (
    <Router>
    <div className="App">
     <NavBar/>
     <Switch>
     <Route exact path="/" component={MESScreen}/>
     <Route exact path='/prodreleasescreen/:id' component={PRODReleaseScreen}/>
     <Route exact path='/inwdreleasescreen/:id' component={INWDReleaseScreen}/>
     <Route exact path='/dispreleasescreen/:id' component={DISPReleaseScreen}/>
     <Route exact path='/poexecscreen' component={ExecutionScreenTabs}/>
     <Route exact path='/posummaryscreen' component={POSummaryScreen}/>
     <Route exact path='/modificationscreen' component={ModificationScreen}/>
     </Switch>
    </div>
    </Router>
  );
}

export default App;
