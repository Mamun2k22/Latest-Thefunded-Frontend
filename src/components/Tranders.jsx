import { metaTraderFive, scopMarkets } from "../ui/images";

export default function Tranders() {
  return (
    <sectio className="mt-20 relative z-20">
      <div className="container overflow-hidden">
        <div className="wrapper w-full">
          {/* Tranders */}
          <div className="tranders grid xs:flex justify-center items-center gap-8 sm:gap-16 w-full">
            <div className="img">
              <img
                className="max-w-[15rem] w-full opacity-[0.87]"
                src={scopMarkets}
                alt="scop-markets"
              />
            </div>
            <div className="img">
              <img
                className="max-w-[13rem] w-full opacity-[0.87]"
                src={metaTraderFive}
                alt="meta-trader-5"
              />
            </div>
          </div>
        </div>
      </div>
    </sectio>
  );
}
