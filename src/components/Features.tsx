import bgImage from '@/images/Nofo-2048x896.jpg';

export function Features() {
  return (
    <section
      id="features"
      className="relative bg-black text-white py-16 md:py-24 features-section"
      style={{
        backgroundImage: `url(${bgImage.src})`,
      }}
    >
      <div className="absolute inset-0 bg-black/60 z-0" />
      <div className="relative z-10 container-custom">
        <div className="mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-center">
            About{' '}
            <span className="bg-gradient-to-r from-[#4ade80] via-[#a3ff4e] to-[#cfff81] bg-clip-text text-transparent">
              Inthra?
            </span>
          </h2>
          <p className="text-base md:text-lg text-gray-300 text-center max-w-3xl mx-auto px-4">
            We combine cutting-edge technology with proven strategies to deliver exceptional results for your business.
          </p>
        </div>

        <div className="w-full space-y-8 md:space-y-0">
          <div className="w-full md:w-1/2 p-4 md:p-6">
            <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3">WHO WE ARE</h3>
            <p className="text-sm md:text-base text-gray-300">
              Founded by two leading insider threat security engineers, Inthra is an innovative insider threat tool that leverages Al, visual graph analytics and true intelligent detection rules. Inthra aims to detect near-real-time Insider activity, revolutionising the current insider threat detection capabilities currently found on the market from reactive into a proactive security measure, minimising the impact to your business.
            </p>
          </div>
          <div className="w-full md:w-1/2 md:float-end p-4 md:p-6">
            <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3">HOW DOES IT WORK?</h3>
            <p className="text-sm md:text-base text-gray-300">
              When it comes to business, we have defined and solved the problem of multiple, messy data outputs into visually appealing and fully interactive graph analytics combined with LLM based searches, the focus is on clear and easy to query data. Inthra combines the data collected with further contextual information at every stage of analysis. Inthra makes hunting easy. Leaving traditional Monolog of ETL Inthra reimagines how staff data can be extracted and recorded via use of our simple workflow design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
