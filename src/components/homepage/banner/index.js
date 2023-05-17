export default function Banner() {
  return (
    <main>
      <div className="bg-[url('../assets/home_banner.jpg')] h-[403px] md:h-[418px] lg:h-[844px] w-full object-cover px-5 md:px-0">
        <div className="m-auto lg:w-[751px] md:w-[378px] md:h-[491px]">
          <h2 className="text-white text-center lg:text-6xl text-2xl md:text-4xl font-medium pt-16 lg:pt-28 mb-8 md:mb-11 lg:mb-[58px]">
            Build. Launch. Grow.
          </h2>
          <div className="lg:w-[751px] relative w-[280px] md:w-[378px] lg:h-80 h-44 mt-14 mx-auto md:mx-0">
            <div>
              <p className="text-white lg:text-4xl text-base md:text-lg text-center lg:px-[38px] lg:py-24 p-8 !bg-inherit">
                <span className="text-light-purple">ninety3 </span>is a
                strategic digital product and venture studio giving the worlds
                most promising companies an edge.
              </p>
            </div>
            <div className="bg-white/25 absolute w-full h-full top-0 border border-white opacity-50"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
