import React from 'react';
import 'css-doodle';
import PropTypes from "prop-types"
import { ICssDoodle } from '@/interfaces';

const Doodle = (
  {
    children='',
    use, 
    grid
  } : ICssDoodle
) => {
  return(
    <css-doodle use={use} grid={grid}>{children}</css-doodle>
  )
}

Doodle.defaultProps = {
  grid: "6x4"
}

export default Doodle;