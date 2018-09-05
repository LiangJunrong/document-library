import React, { Component } from 'react';

/**
 * import { Component } from 'react';
 * 
 * 等价于
 * 
 * import React from 'react'
 * const Component = React.Component
 */

class App extends Component {
  // JSX
  render() {
    return (
      <h3>Hello React!</h3>
    );
  }
}

export default App;