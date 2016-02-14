import React from 'react';

export const Space = React.createClass({
  render() { return(
    <a-scene>
      {this.props.children}

      <a-light color="red" groundColor="gray" type="hemisphere" intensity="10"></a-light>

      <a-sky color="#000"></a-sky>
    </a-scene>
  )},

  componentDidMount() {
  }
});