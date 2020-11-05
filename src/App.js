import {BrowserRouter as Router, Route} from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react';
import './App.css';
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import SinglePost from './pages/SinglePost'
import MenuBar from './components/MenuBar';

function App() {
  return (
    <Router>
              <Container>
              <MenuBar />
              <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/posts/:postId" component={SinglePost} />
    </Container>
    </Router>
  );
}

export default App;
