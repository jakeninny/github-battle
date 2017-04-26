var React = require('react');
const Popular = require('./popular');
const ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
const Nav = require('./Nav');
const Home = require('./Home');
const Battle = require('./Battle');
const Results = require('./Results');


class App extends React.Component {
  render() {
    return(
      <Router>
        <div className="container">
          <Nav/>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/battle' component={Battle} />
            <Route path='/battle/results' component={Results} />
            <Route path='/popular' component={Popular} />
            <Route render={function(){
              return <p>Page Not Found</p>;
            }}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

module.exports = App;
