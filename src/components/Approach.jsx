import styles from "../style";

const Approach = () => (
  
  <section className={`${styles.flexCenter} flex-col flex-wrap sm:mb-20 mb-6 pt-6`}>
    <h1 className="flex-1 font-poppins font-semibold ss:text-[64px] text-[48px] text-checkShadeDark text-center py-8">
      Our approach
    </h1>
    <div className="flex flex-col md:flex-row items-stretch gap-y-12 md:gap-y-0 gap-x-12 justify-center max-w-[1280px]">
      {/** first card */}
      <div className="rounded-carousel min-h-[120px] w-1/3 shadow-2xl">
        {/** Icon */}
        <div className=""></div>
        
        {/** Main text bubble */}
        <div className="h-2/3 bg-checkCarouselRed rounded-t-carousel px-12 pt-16 pb-12">
          <div className="pl-4">Unknown</div>
          <div className="px-8 py-4 bg-white mt-1 rounded-[24px] shadow-md">
            LTA: Notice As no valid E-tag detected in your vehicle, your last trip on was unpaid. Please pay now to avoid penalty notice: <span className="text-checkLink">https://itsascam.com</span>
          </div>
        </div>
      
        {/** Sub text */}
        <div className="h-1/3 bg-checkWhite text-xl font-semibold text-center px-8 py-4 rounded-b-carousel">
          Send in a dubious message, or a screenshot of the message and sender to us.
        </div>
      </div>

      {/** Second card */}
      <div className="rounded-carousel min-h-[120px] w-1/3 shadow-2xl">
        {/** Icon */}
        <div className=""></div>
        
        {/** Main text bubble */}
        <div className="h-2/3 bg-checkCarouselYellow rounded-t-carousel px-12 pt-16 pb-12">
          <div className="pl-4">Unknown</div>
          <div className="px-8 py-4 bg-white mt-1 rounded-[24px] shadow-md">
            --------------------
          </div>
        </div>
      
        {/** Sub text */}
        <div className="h-1/3 bg-checkWhite text-xl font-semibold text-center px-8 py-4 rounded-b-carousel">
          Our AI tries to classify the message. If it’s unable to, human checkers will review it!
        </div>
      </div>

      {/** Third card */}
      <div className="rounded-carousel min-h-[120px] w-1/3 shadow-2xl">
        {/** Icon */}
        <div className=""></div>
        
        {/** Main text bubble */}
        <div className="h-2/3 bg-checkCarouselGreen rounded-t-carousel px-12 pt-16 pb-12">
          <div className="pl-4">From CheckMateSG</div>
          <div className="px-8 py-4 bg-white mt-1 rounded-[24px] shadow-md">
            This is likely a scam!
          </div>
        </div>
      
        {/** Sub text */}
        <div className="h-1/3 bg-checkWhite text-xl font-semibold text-center px-8 py-4 rounded-b-carousel">
          Once checked, we inform you of the results!
        </div>
      </div>

    </div>
  </section>
);

export default Approach;
