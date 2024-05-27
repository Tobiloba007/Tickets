import Footer from '../components/general/Footer'
import FaqIntro from '../components/faq/FaqIntro'
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import HostEvent from '../components/home/HostEvent';

const Faq = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className='max-w-screen-2xl mx-auto font-outfit bg-[#FFFFFF]'>
         <FaqIntro />
         <HostEvent />
         <Footer />
    </div>
  )
}

export default Faq