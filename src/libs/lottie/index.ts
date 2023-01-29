import React, { useEffect, useState } from 'react';
import { ILottieAnimation } from '@/interfaces';

const LottieAnimation = (props: ILottieAnimation) => {
  const {
    children
  } = props;

  const [play, setPlay] = useState(false);
  const [direction, setDirection] = useState(1);
  const [isCompleted, setIsCompleted] = useState(false);
  const [speed, setSpeed] = useState(1);

  useEffect(() => {
    setPlay(props.play);
    if(props.reverse) {
      setDirection(-1);
    }
    setSpeed(props.speed);
  }, []);
  

  const handleOnClick = () => {
    // hack for when in middle of animation and its clicked again
    if (!isCompleted && play) {
      setSpeed(100);
    }

    setPlay(true);
    setIsCompleted(false);
  }

  const handleOnComplete = () => {
    if (
      typeof props.onClick == 'function' &&
      props.onClick
    ) {
      props.onClick();
    }
    
    setSpeed(props.speed);
    setPlay(false);
    setDirection(0-direction);
    setIsCompleted(true);
  }

  return (
    React.cloneElement(children as React.ReactElement<any>, {
      onClick: props.onClick, 
      className: props.className,
      play,
      direction,
      loop: props.loop,
      autoPlay: props.autoPlay,
      handleOnComplete,
      handleOnClick,
      speed,
      style: props.style,
    })
  )
}

LottieAnimation.defaultProps = {
  play: false,
  reverse: false,
  className: '',
  onClick: null,
  width: 16,
  height: 16,
  loop: false,
  autoPlay: false,
  speed: 1
}

export default LottieAnimation;