import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from './index.module.scss';
import SubMenu from './SubMenu';
import Image from 'next/image';
import { useScroll } from '@/libs/hooks';

const Header = (props: any) => {
  const {
    isMobile,
    isDesktop
  } = props;

  const scrolled = useScroll(50);

  return (
    <header
      className={`fixed top-0 w-full text-primary-light ${
        scrolled
          ? styles.header__glass
          : styles.header__transparent
      } transition-all`}
    >
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#2b5797"/>
        <meta name="theme-color" content="#ffffff"/>
      </Head>
      <div className={`${styles.container} flex flex-row justify-between items-center`}>
        <Link href="/" legacyBehavior>
          <a className={styles.title}>
          {
            isDesktop ?
              'SANTOSH PANNA' :
              (
                <Image src='/static/logo/logo-4x.png' width={32} height={32} alt='Santosh Panna'/>
              )
          }
          </a>
        </Link>
        <SubMenu
          isMobile={isMobile}
        />
      </div>
    </header>
  )
}

Header.defaultProps = {
  isMobile: false
}

export default Header;