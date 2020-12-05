import './App.scss';

import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import MainHeader from './components/header/MainHeader.js';
import Main from './Pages/main/Main';
import Member from './Pages/member/Member';
function App() {

  return (
    <Router>
    <div className="App">
      <Route component={MainHeader} />
      <Switch>
      <Route exact path='/' component={Main} />
      <Route path='/members' component={Member}/>
      <Route path='/*'>404 NOT FOUND</Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
