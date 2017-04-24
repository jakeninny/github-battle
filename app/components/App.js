var React = require('react');
const Popular = require('./popular');

class App extends React.Component {
  render() {
    return(
      <div className="container">
        <Popular />
      </div>
    )
  }
}

module.exports = App;
