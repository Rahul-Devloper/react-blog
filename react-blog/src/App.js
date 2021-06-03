import Navbar from './Navbar'
import Home from './Home'
import Create from './Create'
import { BrowserRouter as Router, Route, Switch } from  'react-router-dom'
import BlogDetails from './BlogDetails';

function App() {
  return (
      <Router>
      <div className="App"> 
       <Navbar />
     <div className = 'content'>
     <Switch>
     <Route path = '/' exact component = { Home }/>
     <Route path = '/create'  component = { Create }/>
     <Route path = '/blogs/:id'  component = { BlogDetails }/>
     </Switch>
     </div>
     </div>

     </Router>
     
  );
}

export default App;
