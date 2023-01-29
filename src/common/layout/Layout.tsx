import React, { useState, useEffect } from 'react'
import { debounce } from 'lodash';
import Header from '../header';
import Footer from '../footer';

import Head from 'next/head';

import dynamic from 'next/dynamic';
const Doodle = dynamic(()=> import('../doodle'), {ssr: false});

const Layout = (props: any) => {

  // isMobile and isDesktop states
  const [isMobile, setIsMobile] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  // resize event handler
  useEffect(()=>{
    const handleResize = () => {
      if (window.innerWidth > 768 && !isDesktop) {
        setIsMobile(false);
        setIsDesktop(true);
      } 
      if(window.innerWidth <= 768 && !isMobile) {
        setIsMobile(true);
        setIsDesktop(false);
      }
    };

    handleResize();
    window.addEventListener('resize', debounce(handleResize, 450));
    
    function update () {
      document.querySelectorAll('css-doodle').forEach(function (o: any) {
        o.update();
      })
    }
  
    let interval = setInterval(update, 200);

    const updateCssDoodle = () => {
      clearInterval(interval)
      update()
      interval = setInterval(update, 200)
    }
    
    window.addEventListener('click', updateCssDoodle);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      // window.removeEventListener('click', updateCssDoodle);
    }

    
  },[]);

  return (
    <>
      <Header
        isMobile={isMobile}
        isDesktop={isDesktop}
      />
      <Doodle 
        use={"var(--rule)"}
      >
        {`:doodle { @size: 100% 100%; overflow:hidden; text-align:center; box-sizing:border-box } :container { background: var(--color0); overflow:hidden; }`}
      </Doodle>
      <div className="fixed h-screen w-full gradient" />
      <main>
        {
          React.cloneElement(props.children, {
            isMobile,
            isDesktop
          })
        }
      </main>
      <Footer
        isMobile={isMobile}
        isDesktop={isDesktop}
      />
    </>
  )
}

export default Layout
