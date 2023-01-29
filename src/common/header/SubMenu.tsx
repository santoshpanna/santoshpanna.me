import React, { useState } from 'react';
import MenuIcon from '../../assets/lotties/menu';
import styles from './index.module.scss';
import Link from 'next/link';
import LottieAnimation from '../../libs/lottie';

const SubMenu = (props: any) => {
  const {
    isMobile
  } = props;

  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <>
      {
        isMobile ?
        <LottieAnimation 
          onClick={handleToggleMenu}
          className="cursor-pointer"
          speed={4}
        >
          <MenuIcon/>
        </LottieAnimation>
        :
        <div className={styles.menu}>
          <Link href='/blog'>Blog</Link>
          <Link href='/projects'>Projects</Link>
          <Link href='/about'>About Me</Link>
        </div>
      }
      {
        showMenu && isMobile ?
        <div className={styles.overlay_menu}>
          <Link href='/blog'>Blog</Link>
          <Link href='/projects'>Projects</Link>
          <Link href='/about'>About Me</Link>
        </div>
        :
        <></>
      }
    </>
  )
}

export default SubMenu;