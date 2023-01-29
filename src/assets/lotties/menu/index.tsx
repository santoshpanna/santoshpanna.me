import React from 'react';
import Lottie from 'react-lottie-player';
import animationData from './animationData.json';

const animation = (props: any) => {

  const rendererSettings = {
    preserveAspectRatio: "xMidYMax slice",
    useSubFrame: false
  };

  return (
    <Lottie 
      className={`lottie-animated-icons ${props.className}`}
      onClick={props.handleOnClick} 
      animationData={animationData}
      loop={props.loop}
      play={props.play}
      onComplete={props.handleOnComplete}
      direction={props.direction}
      rendererSettings={rendererSettings}
      speed={props.speed}
    />
  )
}

export default animation;