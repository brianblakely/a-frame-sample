import React from 'react';

export const Cockpit = React.createClass({
  color: `grey`,

  render() {
    return(
      <a-entity position="0 0 0">
        <a-entity ref="camera" camera look-controls wasd-controls="fly: true; acceleration: 150">
          <a-animation
            attribute="position"
            from="0 0 100"
            to="0 0 -100"
            dur="60000"
            fill="forwards"
            easing="linear"
            direction="alternate"
            repeat="indefinite"
          ></a-animation>
        </a-entity>
      </a-entity>
    )
  },

  componentDidMount() {
  }
});
