import { useState } from "react";
import { thumbHistory, circle } from "../../ui/images";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import PriceTable from "../PriceTable";

export default function Billing() {
  const [planSwap, setPlanSwap] = useState(true);

  return (
    <main className="content-wrapper mt-4 min-h-screen">
      <div className="inner-content px-6">
        <div className="breadcrumb-wrap relative z-10">
          <div className="breadcrumb-title">
            <svg
              className="breadcrumb-icon"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"></path>
            </svg>
            Billing
          </div>
        </div>
        <div className="dashboard-wrapper relative">
          <div className="flex flex-wrap mx-[-15px]">
            <div className="w-full px-[15px]">
              <div className="flex flex-wrap mx-[-15px]">
                <div className="w-full px-[15px]">
                  {/* Content */}
                  <div className="content">
                    <div className="tabs-wrap mb-[30px]">
                      <ul className="flex flex-wrap justify-center items-center gap-[20px] mb-[40px] relative z-10">
                        {/* My plan */}
                        <li className="inline-block group">
                          <button
                            className={`px-[30px] py-[12px] rounded-[10px] shadow-[0_4px_10px_rgba(255,255,255,0.13)]  flex gap-2 ${
                              planSwap ? "bg-primary text-main-bg" : ""
                            }`}
                            onClick={() => setPlanSwap(!planSwap)}
                          >
                            My Plan
                          </button>
                        </li>
                        {/* Payment history */}
                        <li className="inline-block mr-[10px]">
                          <button
                            className={`flex gap-2 items-center px-[30px] py-[12px] rounded-[10px] shadow-[0_4px_10px_rgba(255,255,255,0.13)] ${
                              !planSwap ? "bg-primary text-main-bg" : ""
                            }`}
                            onClick={() => setPlanSwap(!planSwap)}
                          >
                            Payment History
                          </button>
                        </li>
                      </ul>
                      <div className="w-fullrounded-[10px] relative z-10">
                        <div className="tab-content tab-space">
                          {/* Prices */}
                          <div
                            className={`prices relative  ${
                              planSwap ? "" : "hidden"
                            }`}
                          >
                            <div className="heading flex flex-col justify-center items-start">
                              <h2 className="text-2xl xs:text-[1.7rem] text-wht-gradient">
                                Get Started Now
                              </h2>
                              <p className="max-w-[55rem] mt-2">
                                Choose your favorite account size, start
                                trading, earn profit-splits and scale.
                              </p>
                            </div>
                            <PriceTable />
                          </div>
                        </div>

                        {/* History */}
                        <div
                          className={`payment-method text-center py-[40px] ${
                            !planSwap ? "" : "hidden"
                          }`}
                        >
                          <div className="thumb inline-block mb-[24px]">
                            <img src={thumbHistory} alt="thumb" />
                          </div>
                          <p>No history found!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* cirlce */}
          <img
            className="cirlce absolute -bottom-[20%] -left-[5%] !max-w-[100rem] w-[80rem] rotate-[80deg] opacity-[0.1]"
            src={circle}
            alt="circle"
          />
          {/* cirlce */}
          <img
            className="cirlce absolute -top-[50%] -right-[15%] !max-w-[100rem] w-[50rem] rotate-[80deg] opacity-[0.05]"
            src={circle}
            alt="circle"
          />
          {/* cirlce */}
          <img
            className="cirlce absolute -bottom-[30%] -right-[15%] !max-w-[100rem] w-[50rem] rotate-[80deg] opacity-[0.2]"
            src={circle}
            alt="circle"
          />
          {/* cirlce */}
          <img
            className="cirlce absolute -bottom-[50%] -left-[25%] !max-w-[100rem] w-[65rem] rotate-[80deg] opacity-[0.17]"
            src={circle}
            alt="circle"
          />
        </div>
      </div>
    </main>
  );
}
