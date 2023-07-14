import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { circle, mainLogo } from "../ui/images";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import MotionX from "../ui/MotionX";
import MotionY from "../ui/MotionY";

export default function Compare() {
  const [compare, setCompare] = useState("FTMO");
  const names = [
    "THE FUNDEDHUB",
    "FTMO",
    "MY FOREX FUNDS",
    "TRUE FOREX FUNDS",
    "FUNDEDNEXT",
  ];

  const values = {
    FTMO: [
      "100K FTMO Challenge",
      "€540",
      " 5% Daily | 10% Total",
      "80:20",
      "4 Days",
      "30 & 60 Days",
      "10% Phase 1 | 5% Phase 2",
      "Yes, only Swing account",
    ],
    "MY FOREX FUNDS": [
      "100K Evaluation",
      "€499",
      " 5% Daily | 12% Total",
      "75:25",
      "5 Days",
      "30 & 60 Days",
      "8% Phase 1 | 5% Phase 2",
      "Yes",
    ],
    "TRUE FOREX FUNDS": [
      "100K Evaluation",
      "€499",
      " 5% Daily | 10% Total",
      "75:25",
      "5 Days",
      "30 & 60 Days",
      "8% Phase 1 | 5% Phase 2",
      "Yes",
    ],
    FUNDEDNEXT: [
      "100K Evaluation",
      "€549",
      " 5% Daily | 10% Total",
      "80:20",
      "5 Days",
      "30 & 60 Days",
      "10% Phase 1 | 5% Phase 2",
      "Yes",
    ],
  };
  return (
    <section className="compare relative pt-16 md:pt-20">
      <div className="container relative">
        <div className="wrapper relative z-20 grid gap-12">
          <div className="heading relative z-20 flex flex-col justify-center sm:items-center md:text-center gap-8">
            <MotionX delay={0.1}>
              <h2 className="text-2xl xs:text-[1.7rem] tracking-tight text-wht-gradient font-medium">
                Compare your options
              </h2>
            </MotionX>

            <MotionX delay={0.2}>
              {/* buttons */}
              <div className="buttons grid grid-cols-2 sm:grid-cols-4 gap-5 md:gap-8 text-center justify-center items-center max-w-[20rem] sm:max-w-none">
                <button
                  className={`button py-2 px-3 font-semibold transition-all duration-200 text-wht text-[0.7rem] cursor-pointer border-b-2 ${
                    compare === "FTMO" ? "border-primary" : "border-primary/30"
                  }
              `}
                  onClick={() => setCompare("FTMO")}
                >
                  FTMO
                </button>
                <button
                  className={`button py-2 px-3 font-semibold transition-all duration-200 text-wht text-[0.7rem] cursor-pointer border-b-2 ${
                    compare === "MY FOREX FUNDS"
                      ? "border-primary"
                      : "border-primary/30"
                  }
              `}
                  onClick={() => setCompare("MY FOREX FUNDS")}
                >
                  MY FOREX FUNDS
                </button>
                <button
                  className={`button py-2 px-3 font-semibold transition-all duration-200 text-wht text-[0.7rem] cursor-pointer border-b-2 ${
                    compare === "TRUE FOREX FUNDS"
                      ? "border-primary"
                      : "border-primary/30"
                  }
              `}
                  onClick={() => setCompare("TRUE FOREX FUNDS")}
                >
                  TRUE FOREX FUNDS
                </button>
                <button
                  className={`button py-2 px-3 font-semibold transition-all duration-200 text-wht text-[0.7rem] cursor-pointer border-b-2 ${
                    compare === "FUNDEDNEXT"
                      ? "border-primary"
                      : "border-primary/30"
                  }
              `}
                  onClick={() => setCompare("FUNDEDNEXT")}
                >
                  FUNDEDNEXT
                </button>
              </div>
            </MotionX>
          </div>
          {/* content */}
          <div className="content relative z-10 hidden sm:grid sm:grid-cols-2 m-auto gap-10 max-w-[55rem] w-full">
            {/* item */}
            <MotionY delay={0.1} cls={""}>
              <div className="item relative z-10 bg-main-bg/[50%] py-4 px-4 rounded-2xl border sm:border-none border-primary/10">
                {/* head */}
                <div className="head flex items-center font-Montserrat font-bold bg-primary/10 p-2 rounded-2xl h-[60px]">
                  <img className="w-40" src={mainLogo} alt="main-logo" />
                </div>
                {/* paras */}
                <div className="paras grid gap-4 py-8">
                  <span>Account Size & Model - 100K Evaluation</span>
                  <span>Price - $475</span>
                  <span>Maximum Drawdown - 4% Daily | 8% Total</span>
                  <span>Payout Split - 80/20</span>
                  <span>Minimum Trading Days - 5 Day</span>
                  <span>Time Period For Evaluation - 45 & 45 Days</span>
                  <span>Targets Profit - 8% & 5%</span>
                  <span>Hold Trade On Weekends - Yes</span>
                </div>
              </div>
            </MotionY>
            {/* item */}
            <MotionY delay={0.2} cls={""}>
              <div className="item relative z-10 bg-main-bg/[50%] py-4 px-4 rounded-2xl border sm:border-none border-primary/10">
                {/* head */}
                <div className="head flex items-center font-Montserrat bg-primary/10 py-2 px-4 rounded-2xl text-xl font-bold h-[60px]">
                  {compare}
                </div>
                {/* paras */}
                <div className="paras grid gap-4 py-8">
                  <span>Account Size & Model - {values[compare][0]}</span>
                  <span>Price - {values[compare][1]}</span>
                  <span>Maximum Drawdown - {values[compare][2]}</span>
                  <span>Payout Split - {values[compare][3]}</span>
                  <span>Minimum Trading Days - {values[compare][4]}</span>
                  <span>Time Period For Evaluation - {values[compare][5]}</span>
                  <span>Targets Profit - {values[compare][6]}</span>
                  <span>Hold Trade On Weekends - {values[compare][7]}</span>
                </div>
              </div>
            </MotionY>

            <img
              className="cirlce absolute -bottom-[20%] -right-[25%] !max-w-[100rem]  w-[54rem] rotate-[180deg] opacity-[0.15]"
              src={circle}
              alt="circle"
            />
            <img
              className="cirlce absolute -bottom-[20%] right-[25%] !max-w-[100rem]  w-[30rem] rotate-[180deg] opacity-[0.1]"
              src={circle}
              alt="circle"
            />
          </div>
          {/* content */}
          <Swiper
            pagination={{
              clickable: true,
            }}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            modules={[EffectCoverflow, Pagination]}
            className="content relative z-10 grid sm:hidden sm:grid-cols-2 m-auto gap-10 w-full max-w-[100vw] mb-10"
          >
            {/* item */}
            <SwiperSlide className="item relative z-10 bg-main-bg/[50%] py-4 px-4 md:px-6 rounded-2xl border sm:border-none border-primary/10 max-w-[24rem]">
              {/* head */}
              <div className="head flex items-center font-Montserrat font-bold bg-primary/10 p-2 rounded-2xl h-[60px]">
                <img className="w-40" src={mainLogo} alt="main-logo" />
              </div>
              {/* paras */}
              <div className="paras grid gap-4 py-8">
                <span>Account Size & Model - 100K Evaluation</span>
                <span>Price - $475</span>
                <span>Maximum Drawdown - 4% Daily | 8% Total</span>
                <span>Payout Split - 80/20</span>
                <span>Minimum Trading Days - 5 Day</span>
                <span>Time Period For Evaluation - 45 & 45 Days</span>
                <span>Targets Profit - 8% & 5%</span>
                <span>Hold Trade On Weekends - Yes</span>
              </div>
            </SwiperSlide>
            {/* item */}
            <SwiperSlide className="item relative z-10 bg-main-bg/[50%] py-4 px-4 md:px-6 rounded-2xl border sm:border-none border-primary/10 max-w-[24rem]">
              {/* head */}
              <div className="head flex items-center font-Montserrat bg-primary/10 py-2 px-4 rounded-2xl text-xl font-bold h-[60px]">
                {compare}
              </div>
              {/* paras */}
              <div className="paras grid gap-4 py-8">
                <span>Account Size & Model - {values[compare][0]}</span>
                <span>Price - {values[compare][1]}</span>
                <span>Maximum Drawdown - {values[compare][2]}</span>
                <span>Payout Split - {values[compare][3]}</span>
                <span>Minimum Trading Days - {values[compare][4]}</span>
                <span>Time Period For Evaluation - {values[compare][5]}</span>
                <span>Targets Profit - {values[compare][6]}</span>
                <span>Hold Trade On Weekends - {values[compare][7]}</span>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* cirlce */}
        <img
          className="cirlce absolute -top-[24rem] sm:-top-[20rem] -left-[20%] sm:-left-[20rem]  w-[70rem] rotate-[80deg] opacity-10"
          src={circle}
          alt="circle"
        />
        {/* Right */}
        <img
          className="cirlce absolute top-[10rem] -right-[35rem]  w-[70rem] rotate-[180deg] opacity-[0.05]"
          src={circle}
          alt="circle"
        />
        <img
          className="cirlce md:hidden absolute bottom-0 -left-[50%] max-w-[100rem] w-[70rem] rotate-[180deg] opacity-[0.07]"
          src={circle}
          alt="circle"
        />
        {/* cirlce */}
        <img
          className="cirlce absolute -top-[24rem] sm:-top-[20rem] -left-[20%] sm:-left-[50%]  w-[70rem] rotate-[80deg] opacity-[0.04]"
          src={circle}
          alt="circle"
        />
        {/* Right */}
        <img
          className="cirlce absolute top-[10rem] -right-[35rem]  w-[70rem] rotate-[180deg] opacity-[0.05]"
          src={circle}
          alt="circle"
        />
        <img
          className="cirlce md:hidden absolute bottom-0 -right-[10%]  w-[70rem] rotate-[180deg] opacity-[0.1]"
          src={circle}
          alt="circle"
        />
      </div>
    </section>
  );
}
