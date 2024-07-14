import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';

gsap.registerPlugin(ScrollTrigger);

const useGSAPScroll = () => {
  useEffect(() => {
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector('#root'),
      smooth: true,
      tablet: { smooth: true },
      smartphone: { smooth: true },
    });

    locoScroll.on('scroll', ScrollTrigger.update);

    ScrollTrigger.scrollerProxy('#root', {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scrollTo.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
    });

    ScrollTrigger.addEventListener('refresh', () => locoScroll.update());

    ScrollTrigger.refresh();

    return () => {
      locoScroll.destroy();
      ScrollTrigger.removeEventListener('refresh', () => locoScroll.update());
    };
  }, []);
};

export default useGSAPScroll;
