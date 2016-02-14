import React from 'react';

const generateRandoms = ({
  lower = 0,
  digit = 3,
  upper = 1,
}={})=> {
  const output = [];

  for(let x=0;x<digit;++x) {
    output.push(lower+Math.random()*(upper+lower*-1));
  }

  return output.join(` `);
};

export const Star = React.createClass({
  color: `blue`,

  render() {
    const
        pos = generateRandoms({
          lower: -150,
          upper: 150
        }),
        rot = generateRandoms({
          upper: 360
        });

    return(
      <a-entity>
        <a-cube
          color={this.color}
          width="1"
          height="1"
          depth="1"
          position={pos}
          rotation={rot}
        ></a-cube>
        <a-cube
          color={this.color}
          width="2"
          height="2"
          depth="2"
          position={pos}
          rotation={rot}
          opacity="0.3"
        ></a-cube>
      </a-entity>
    )
  }
});
