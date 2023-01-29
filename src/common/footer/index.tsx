import dayjs from 'dayjs';
import React from 'react';
import './index.module.scss';

const Footer = (props: any) => {
  const {
    isMobile,
    isDesktop
  } = props;
  
  return (
    <footer>
      Santosh Panna &copy; {dayjs().year()}
    </footer>
  )
}

export default Footer;