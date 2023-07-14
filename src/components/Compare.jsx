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

export default function Compare() {
  const [compare, setCompare] = useState("FTMO");
  const names = ["THE FUNDEDHUB","FTMO", "MY FOREX FUNDS", "TRUE FOREX FUNDS", "FUNDEDNEXT"];

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + names[index] + "</span>";
    },
  };

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
        <div className="wrapper relative z-10 grid gap-12">
          <div className="heading flex flex-col justify-center sm:items-center md:text-center gap-8">
            <MotionX delay={0.1}>
              <h2 className="text-2xl xs:text-[1.7rem] tracking-tight text-wht-gradient font-medium">
                Compare Your Options
              </h2>
            </MotionX>

            <MotionX delay={0.2}>
              {/* buttons */}
              <div className="buttons grid grid-cols-2 sm:grid-cols-4 gap-4 text-center justify-center items-center max-w-[20rem] sm:max-w-none">
                <button
                  className={`button py-2 px-3 xs:px-4 font-semibold rounded-xl transition-all duration-200 text-main-bg text-[0.7rem] cursor-pointer ${
                    compare === "FTMO" ? "bg-primary" : "bg-primary/70"
                  }
              `}
                  onClick={() => setCompare("FTMO")}
                >
                  FTMO
                </button>
                <button
                  className={`button py-2 px-3 xs:px-4 font-semibold rounded-xl transition-all duration-200 text-main-bg text-[0.7rem] cursor-pointer ${
                    compare === "MY FOREX FUNDS"
                      ? "bg-primary"
                      : "bg-primary/70"
                  }
              `}
                  onClick={() => setCompare("MY FOREX FUNDS")}
                >
                  MY FOREX FUNDS
                </button>
                <button
                  className={`button py-2 px-3 xs:px-4 font-semibold rounded-xl transition-all duration-200 text-main-bg text-[0.7rem] cursor-pointer ${
                    compare === "TRUE FOREX FUNDS"
                      ? "bg-primary"
                      : "bg-primary/70"
                  }
              `}
                  onClick={() => setCompare("TRUE FOREX FUNDS")}
                >
                  TRUE FOREX FUNDS
                </button>
                <button
                  className={`button py-2 px-3 xs:px-4 font-semibold rounded-xl transition-all duration-200 text-main-bg text-[0.7rem] cursor-pointer ${
                    compare === "FUNDEDNEXT" ? "bg-primary" : "bg-primary/70"
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
          <Swiper
            pagination={pagination}
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
            className="content relative z-10 grid sm:hidden sm:grid-cols-2 m-auto gap-10 w-full max-w-[100vw]"
          >
            {/* item */}
            <SwiperSlide className="item relative z-10 bg-main-bg/[35%] py-4 px-4 md:px-6 rounded-xl border sm:border-none border-primary/10">
              {/* head */}
              <div className="head flex items-center bg-primary/10 p-2 rounded-lg h-[60px]">
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
            <SwiperSlide className="item relative z-10 bg-main-bg/[35%] py-4 px-4 md:px-6 rounded-xl border sm:border-none border-primary/10">
              {/* head */}
              <div className="head flex items-center bg-primary/10 py-2 px-4 rounded-lg text-xl font-bold h-[60px]">
                FTMO
              </div>
              {/* paras */}
              <div className="paras grid gap-4 py-8">
                <span>Account Size & Model - {values["FTMO"][0]}</span>
                <span>Price - {values["FTMO"][1]}</span>
                <span>Maximum Drawdown - {values["FTMO"][2]}</span>
                <span>Payout Split - {values["FTMO"][3]}</span>
                <span>Minimum Trading Days - {values["FTMO"][4]}</span>
                <span>Time Period For Evaluation - {values["FTMO"][5]}</span>
                <span>Targets Profit - {values["FTMO"][6]}</span>
                <span>Hold Trade On Weekends - {values["FTMO"][7]}</span>
              </div>
            </SwiperSlide>
            {/* item */}
            <SwiperSlide className="item relative z-10 bg-main-bg/[35%] py-4 px-4 md:px-6 rounded-xl border sm:border-none border-primary/10">
              {/* head */}
              <div className="head flex items-center bg-primary/10 py-2 px-4 rounded-lg text-xl font-bold h-[60px]">
                MY FOREX FUNDS
              </div>
              {/* paras */}
              <div className="paras grid gap-4 py-8">
                <span>
                  Account Size & Model - {values["MY FOREX FUNDS"][0]}
                </span>
                <span>Price - {values["MY FOREX FUNDS"][1]}</span>
                <span>Maximum Drawdown - {values["MY FOREX FUNDS"][2]}</span>
                <span>Payout Split - {values["MY FOREX FUNDS"][3]}</span>
                <span>
                  Minimum Trading Days - {values["MY FOREX FUNDS"][4]}
                </span>
                <span>
                  Time Period For Evaluation - {values["MY FOREX FUNDS"][5]}
                </span>
                <span>Targets Profit - {values["MY FOREX FUNDS"][6]}</span>
                <span>
                  Hold Trade On Weekends - {values["MY FOREX FUNDS"][7]}
                </span>
              </div>
            </SwiperSlide>
            {/* item */}
            <SwiperSlide className="item relative z-10 bg-main-bg/[35%] py-4 px-4 md:px-6 rounded-xl border sm:border-none border-primary/10">
              {/* head */}
              <div className="head flex items-center bg-primary/10 py-2 px-4 rounded-lg text-xl font-bold h-[60px]">
                TRUE FOREX FUNDS
              </div>
              {/* paras */}
              <div className="paras grid gap-4 py-8">
                <span>
                  Account Size & Model - {values["TRUE FOREX FUNDS"][0]}
                </span>
                <span>Price - {values["TRUE FOREX FUNDS"][1]}</span>
                <span>Maximum Drawdown - {values["TRUE FOREX FUNDS"][2]}</span>
                <span>Payout Split - {values["TRUE FOREX FUNDS"][3]}</span>
                <span>
                  Minimum Trading Days - {values["TRUE FOREX FUNDS"][4]}
                </span>
                <span>
                  Time Period For Evaluation - {values["TRUE FOREX FUNDS"][5]}
                </span>
                <span>Targets Profit - {values["TRUE FOREX FUNDS"][6]}</span>
                <span>
                  Hold Trade On Weekends - {values["TRUE FOREX FUNDS"][7]}
                </span>
              </div>
            </SwiperSlide>
            {/* item */}
            <SwiperSlide className="item relative z-10 bg-main-bg/[35%] py-4 px-4 md:px-6 rounded-xl border sm:border-none border-primary/10">
              {/* head */}
              <div className="head flex items-center bg-primary/10 py-2 px-4 rounded-lg text-xl font-bold h-[60px]">
                FUNDEDNEXT
              </div>
              {/* paras */}
              <div className="paras grid gap-4 py-8">
                <span>Account Size & Model - {values["FUNDEDNEXT"][0]}</span>
                <span>Price - {values["FUNDEDNEXT"][1]}</span>
                <span>Maximum Drawdown - {values["FUNDEDNEXT"][2]}</span>
                <span>Payout Split - {values["FUNDEDNEXT"][3]}</span>
                <span>Minimum Trading Days - {values["FUNDEDNEXT"][4]}</span>
                <span>
                  Time Period For Evaluation - {values["FUNDEDNEXT"][5]}
                </span>
                <span>Targets Profit - {values["FUNDEDNEXT"][6]}</span>
                <span>Hold Trade On Weekends - {values["FUNDEDNEXT"][7]}</span>
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
          className="cirlce absolute -top-[24rem] sm:-top-[20rem] -left-[20%] sm:-left-[20rem]  w-[70rem] rotate-[80deg] opacity-[0.05]"
          src={circle}
          alt="circle"
        />
        {/* Right */}
        <img
          className="cirlce absolute top-[10rem] -right-[35rem]  w-[70rem] rotate-[180deg] opacity-[0.1]"
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
