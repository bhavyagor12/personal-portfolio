const GettingStarted = () => {
  return (
    <div className="flex-1 flex flex-col md:flex-row">
      <div className="pb-2 md:pb-0 md:w-1/2">
        <h1
          className="text-3xl md:text-5xl leading-tight"
          style={{ fontFamily: "var(--font-bangers)" }}
        >
          How it began
        </h1>
        <div className="mt-4 mb-6">
          <p className="text-sm mb-2">
            little kid who got addicted to super mario
          </p>
          <div className="h-px bg-gray-200 w-74"></div>
        </div>
      </div>
      <div className="md:w-1/2 md:pl-8 md:pt-12 lg:pt-20 lg:pl-12 flex flex-col justify-center">
        <iframe
          src="https://mukeshkmr776.github.io/super-mario/"
          className="w-[90%] h-[180px] sm:w-[360px] sm:h-[220px] md:w-[480px] md:h-[270px] sm:block"
        />
        <p className="text-base md:text-lg leading-relaxed max-w-lg mt-4">
          This game right here is the reason I started dreaming of nerding out
          on computers. I was so convinced about my future in tech that my
          career path was decided way back in 2005.
        </p>
      </div>
    </div>
  );
};

export default GettingStarted;
