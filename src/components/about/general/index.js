export default function AboutGeneral() {
  return (
    <main>
      <div className="bg-[url('../assets/about/team.png')] relative grayscale	bg-cover bg-no-repeat flex justify-between flex-col pb-[55px] h-[283px] md:h-[478px] lg:h-screen w-full object-cover md:pl-10 lg:py-[195px] pt-[61px] lg:px-[150px]">
        <div className="lg:w-[866px] mx-auto md:mx-0 relative md:w-[698px] h-[170px] w-[280px] md:h-[230px] lg:h-80 lg:px-11 lg:py-11 p-2 md:p-8">
          <p className="max-w-[595px] lg:max-w-none text-white lg:text-2xl text-xs md:leading-6 md:text-xl text-center md:text-left lg:leading-10">
            {" "}
            We are a team of experts across a wide range of disciplines who have
            come together for a common belief - to make the world a better place
            using emerging technology.
            <br />
            We specialise in helping businesses leverage Web3 and emerging
            technologies such as Blockchain and AI to create unique and
            impactful digital experiences for your customers.
          </p>
          <div className="bg-white/25 absolute w-full h-full top-0 left-0 border border-white opacity-50"></div>
        </div>
      </div>
    </main>
  );
}
