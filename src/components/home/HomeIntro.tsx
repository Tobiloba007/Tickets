import bg from '../../assets/introBg.svg'
import carousel1 from '../../assets/carousel1.jpg'

type Props = {}

const HomeIntro = (props: Props) => {
  return (
    <div className='flex flex-col items-center justify-start w-full h-screen bg-cover bg-center px-6 rounded-b-3xl md:rounded-b-[0px] lg:rounded-b-[40px]' 
    style={{backgroundImage: `url(${bg})`}}
    >
        <div className='flex flex-col w-full pt-36 md:items-center xl:pt-44'>
            <p className='text-[28px] font-bold text-white text-center leading-10 md:text-[32px] lg:text-[37px] lg:leading-[48px] xl:text-[45px] xl:leading-[60px]'>
                Tickets in a tap, events <br /> that captivate!
            </p>
            <p className='text-[17px] font-medium text-white text-center pt-5 px-8 md:text-[19px] md:px-28 lg:w-[80%] xl:w-[60%]'>
                Everything you need to create events, sell tickets and receive payments
            </p>
        </div>

        <div className='flex flex-col justify-center items-center w-full mt-14 px-6 md:flex-row'>
            <button className='text-center text-[17px] font-semibold text-[#571845] bg-[#EEE8EC] h-[45px] w-full rounded-[9px] md:w-[180px] xl:w-[200px]'>
                 Host an event 
            </button>
            <button className='text-center text-[17px] font-semibold text-[#571845] bg-[#FFC655] h-[45px] w-full rounded-[9px] mt-4 md:w-[180px] md:ml-5 md:mt-0 xl:w-[200px]'>
                 Buy tickets 
            </button>
        </div>


        <div className='flex flex-row items-end justify-center h-[512px] bg-cover bg-center  rounded-3xl w-[80%] px-5 pb-8 absolute bottom-[-27rem] md:bottom-[-21rem] md:w-[90%] 
        md:h-[460px] md:rounded-[12px] lg:h-[450px] lg:bottom-[-21rem] lg:px-8 xl:h-[550px] xl:bottom-[-28rem] xl:w-[90%] xl:px-10 xl:pb-9' style={{backgroundImage: `url(${carousel1})`}}>
            <div className="absolute inset-0 bg-black opacity-20 rounded-3xl md:rounded-[12px]"></div>
            <div className='flex flex-row items-center justify-between w-full z-50'>
                <div>
                    <p className='text-[11px] font-bold text-white xl:text-[15px]'>
                        Thurs Dec 21st, 2023
                    </p>
                    <p className='text-[20px] font-semibold text-white lg:text-[27px] xl:text-[30px]'>
                        Soundland Concert
                    </p>
                </div>
            </div>

            <div className='flex flex-row items-center justify-between mb-2 z-50'>
                <div className='h-2 w-2 rounded-full bg-[#FFC655] mx-[2.5px] xl:mx-1 xl:w-[10px] xl:h-[10px]'></div>
                <div className='h-2 w-2 rounded-full bg-white mx-[2.5px] xl:mx-1 xl:w-[10px] xl:h-[10px]'></div>
                <div className='h-2 w-2 rounded-full bg-white mx-[2.5px] xl:mx-1 xl:w-[10px] xl:h-[10px]'></div>
                <div className='h-2 w-2 rounded-full bg-white mx-[2.5px] xl:mx-1 xl:w-[10px] xl:h-[10px]'></div>
                <div className='h-2 w-2 rounded-full bg-white mx-[2.5px] xl:mx-1 xl:w-[10px] xl:h-[10px]'></div>
            </div>

        </div>

    </div>
  )
}

export default HomeIntro