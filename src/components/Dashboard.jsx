import { dashboard, circle } from "../ui/images";
import { Link } from "react-router-dom";
import MotionX from "../ui/MotionX";
import MotionY from "../ui/MotionY";

export default function Dashboard() {
  return (
    <section className="dashboard relative py-16 md:py-20">
      <div className="container">
        <div className="wrapper relative z-10 grid gap-12 justify-center items-center">
          <div className="heading flex flex-col justify-center sm:items-center md:text-center">
            <MotionX delay={0.1}>
              <h2 className="text-2xl xs:text-[1.7rem] tracking-tight text-wht-gradient font-medium">
                Dashboard and Tools
              </h2>
            </MotionX>
            <MotionX delay={0.2}>
              <p className="max-w-[55rem] mt-2">
                To easily track your performance, you will have access to your
                own personal Dashboard to monitor your trading data in
                real-time. This helps you to avoid breaching any of the trading
                rules.
              </p>
            </MotionX>

            {/* btn */}
            <MotionX delay={0.3}>
              <div className="btn mt-10">
                <Link
                  to="/dashboard"
                  className="uppercase font-Montserrat text-xs font-bold py-3 px-7 bg-primary/80 hover:bg-primary transition-all duration-200 rounded-3xl text-dark"
                >
                  got to dashbaord
                </Link>
              </div>
            </MotionX>
          </div>

          <MotionY delay={0.4} cls="dashboard-img z-10">
            <img
              className="md:max-w-[90%] m-auto"
              src={dashboard}
              alt="dashboard"
            />
          </MotionY>
        </div>
      </div>

      {/* cirlce */}
      <img
        className="cirlce absolute -top-[24rem] sm:-top-[20rem] -left-[20%] sm:-left-[20rem]  w-[70rem] rotate-[80deg] opacity-10 md:opacity-[0.1]"
        src={circle}
        alt="circle"
      />
      {/* Right */}
      <img
        className="cirlce absolute top-[10rem] -right-[35rem]  w-[70rem] rotate-[180deg] opacity-[0.18]"
        src={circle}
        alt="circle"
      />
      <img
        className="cirlce md:hidden absolute bottom-0 -right-[10%]  w-[70rem] rotate-[180deg] opacity-[0.1]"
        src={circle}
        alt="circle"
      />
    </section>
  );
}
