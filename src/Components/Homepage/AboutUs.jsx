import React from "react";
import { Aic_Logo } from "../../assets";

const AboutUs = () => {
  return (
    <>
      <section className="w-screen pt-[100px] flex justify-center px-[200px] py-10">
        <div className="flex gap-20">
          <div className="w-[25%] flex justify-center">
            <img src={Aic_Logo} className="object-contain drop-shadow-md"/>
          </div>
          <div className="w-[60%] flex flex-col">
            <div className="flex">
              <h1 className="text-4xl font-bold left-0">About Us</h1>
            </div>
            <p className="text-lg text-justify py-5">
              Atal Incubation Centre - Pondicherry Engineering College
              Foundation (AIC-PECF) is fully supported and funded by Atal
              Innovation Mission (AIM), Niti Aayog, Government of India.
              AIC-PECF was initiated to provide a platform to assist and enable
              young entrepreneurs to initiate startups for the commercial
              exploitation of technologies developed by them. AIC- PECF also
              enables the budding entrepreneurs to showcase and test their
              abilities to run a start-up business in the areas of Electronics
              design and Manufacturing (EDM), Internet of Things (IoT), and
              Unmanned Aerial Vehicle (UAV). The incubation center provides a
              wide range of resources that enable it to: Empower innovators to
              pursue their entrepreneurial goals that improve people’s lives,
              generate employment and drive the economy - Connect start-ups with
              mentor community for guidance
            </p>
            <div className="w-full flex justify-center">
              <button className="bg-slate-500 text-white font-bold text-md px-5 py-2 rounded-lg hover:bg-slate-950 duration-200 ease-linear">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
