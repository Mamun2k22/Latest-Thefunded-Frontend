import { circle } from "../ui/images";
import PriceTable from "./PriceTable";
import MotionX from "../ui/MotionX";

export default function Prices() {
  return (
    <section className="prices relative">
      <div className="container relative">
        <div className="wrapper relative z-20">
          <div className="heading flex flex-col justify-center items-start">
            <MotionX delay={0.1}>
              <h2 className="text-2xl xs:text-[1.7rem] text-wht-gradient">
                Get Started Now
              </h2>
            </MotionX>
            <MotionX delay={0.2}>
              <p className="max-w-[55rem] mt-2 hidden sm:block">
                Choose your favorite account size, start trading, earn
                profit-splits and scale.
              </p>
              <p className="sm:hidden  mt-2 ">Choose your balance:</p>
            </MotionX>
          </div>

          <PriceTable />
        </div>

        {/* cirlce */}
        <img
          className="cirlce absolute  bottom-[50%] -left-[40%]  w-[50rem] rotate-[40deg] opacity-[0.04]"
          src={circle}
          alt="circle"
        />
        {/* cirlce */}
        <img
          className="cirlce absolute -top-[100%] -left-[0%]  w-[80rem] rotate-[40deg] opacity-[0.1]"
          src={circle}
          alt="circle"
        />
      </div>

      {/* cirlce */}
      <img
        className="cirlce absolute -bottom-[25rem] -left-[30rem] max-w-[100rem] w-[70rem] rotate-[80deg] opacity-[0.08]"
        src={circle}
        alt="circle"
      />
      <img
        className="cirlce sm:hidden absolute -top-[30%] -left-[50%]  w-[50rem] rotate-[80deg] opacity-[0.2]"
        src={circle}
        alt="circle"
      />
      <img
        className="cirlce absolute -bottom-[25rem] -left-[30rem]  w-[50rem] rotate-[80deg] opacity-[0.2]"
        src={circle}
        alt="circle"
      />
    </section>
  );
}
