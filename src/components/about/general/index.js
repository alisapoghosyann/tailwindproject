export default function AboutGeneral() {
  return (
    <main>
      <div className="bg-[url('../assets/about/team.png')] relative bg-cover bg-no-repeat flex justify-between flex-col pb-[55px] h-[283px] md:h-[478px] lg:h-[calc(100vh-112px)] w-full object-cover md:pl-10 lg:py-[195px] pt-[61px] lg:px-[150px]">
        <div className="lg:w-[866px] m-auto relative md:w-[698px] h-[170px] w-[300px] md:h-[230px] lg:h-80 lg:px-11 lg:py-6 p-2 md:p-6">
          <p className="max-w-[596px] lg:max-w-none text-white lg:text-2xl text-xs md:leading-6 md:text-xl text-center md:text-left lg:leading-10">
            {" "}
            We are a team of experts across a wide range of disciplines who have
            come together for a common belief - to make the world a better place
            using emerging technology.
            <br />
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
