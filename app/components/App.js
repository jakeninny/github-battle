var React = require('react');
const Popular = require('./popular');
const ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
const Nav = require('./Nav');
const Home = require('./Home');

class App extends React.Component {
  render() {
    return(
      <Router>
        <div className="container">
          <Nav/>
          <Route exact path='/' component={Home} />
          <Route path='/popular' component={Popular} />
        </div>
      </Router>
    );
  }
}

module.exports = App;
