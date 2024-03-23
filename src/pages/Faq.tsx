import Footer from '../components/general/Footer'
import FaqIntro from '../components/faq/FaqIntro'
import HostEvent from '../components/home/HostEvent'

const Faq = () => {
  return (
    <div className='max-w-screen-2xl mx-auto font-outfit bg-[#FFFFFF]'>
         <FaqIntro />
         <HostEvent />
         <Footer />
    </div>
  )
}

export default Faq