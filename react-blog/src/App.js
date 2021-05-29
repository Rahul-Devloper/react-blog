import Navbar from './Navbar'
import Home from './Home'
import Create from './Create'
import { BrowserRouter as Router, Route, Switch } from  'react-router-dom'

function App() {
  return (
    <div className="App"> 
     <Navbar />
     <Router>
     <div className="content">
       <Switch>
         <Route exact path = '/'>
          <Home />
         </Route>
         <Route path = '/create'>
          <Create />
         </Route>
       </Switch>
     </div>
     </Router>
    </div>
  );
}

export default App;
