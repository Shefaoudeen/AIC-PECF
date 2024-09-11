
import tick from '../../assets/icons/tick.svg'
import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const WeOffer = () => {
    
  useGSAP(() => {
 
    gsap.fromTo(
        '#box-1',
        { height: "100px" },
        {
          height: '100%',
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: 'power2.inOut'
        }
      );
    gsap.fromTo(
        '#box-3',
        { width: "150px" },
        {
          width: '100%',
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: 'power2.inOut'
        }
      );
    gsap.fromTo(
        '#box-2',
        { width: "30%" },
        {
          width: '250px',
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: 'power2.inOut'
        }
      );
      gsap.from('#tick', {
        scale : 0,
        duration : 0.5,
        scrollTrigger : {
          trigger : '#tick',
          start : "200px bottom",
        }
      })
      gsap.from('#border-bottom', {
        width : 0,
        duration : 0.7,
        scrollTrigger : {
          trigger : '#border-bottom',
          start : "200px bottom",
        }
      })
  },[])

  return (
    <div>
      {" "}
      <div className="w-[85%] mx-auto mb-20 ">
        <div className="max-w-fit ml-[-30px]">
          <h2 className="text-2xl font-semibold">WHY CHOOSE US</h2>
          {/* border bottom  */}
          <div id='border-bottom' className="mt-2 w-32 mx-auto h-[6px] rounded-full bg-customBlue"></div>
        </div>
        <section className="flex justify-between w-full gap-20 mt-10">
          {/* text-body */}
          <aside className=" w-[50%] text-gray-600 space-y-8 text-justify leading-9">
           <h1 className="font-bold text-3xl">We Offer</h1>
           <div className="flex items-center gap-5">
                <img id='tick' src={tick} alt="" className="w-12" />
                <h2 className="text-3xl font-semibold">3D Printing</h2>
           </div>
           <div className="flex items-center gap-5">
                <img id='tick' src={tick} alt="" className="w-12" />
                <h2 className="text-3xl font-semibold">Co-Working space</h2>
           </div>
           <div className="flex items-center gap-5">
                <img id='tick' src={tick} alt="" className="w-12" />
                <h2 className="text-3xl font-semibold">3D Printing</h2>
           </div>
           <div className="flex items-center gap-5">
                <img id='tick' src={tick} alt="" className="w-12" />
                <h2 className="text-3xl font-semibold">Co-Working space</h2>
           </div>
           <div className="flex items-center gap-5">
                <img id='tick' src={tick} alt="" className="w-12" />
                <h2 className="text-3xl font-semibold">3D Printing</h2>
           </div>
           <div className="flex items-center gap-5">
                <img id='tick' src={tick} alt="" className="w-12" />
                <h2 className="text-3xl font-semibold">Co-Working space</h2>
           </div>
          </aside>
          <aside className="grid grid-cols-4 grid-rows-4 min-w-[60%] gap-5">
            <div id='box-1' className="row-span-3 row-start-2 bg-customBlue"></div>
            <div id='box-2' className="row-span-3 col-span-3  bg-customBlue"></div>
            <div id='box-3' className="col-span-3 bg-customBlue"></div>
          </aside>
        </section>
      </div>
    </div>
  );
};

export default WeOffer;