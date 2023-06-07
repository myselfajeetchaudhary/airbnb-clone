export default function Banner() {
  return (
    <div>
      <div className="relative xl:h-[600px] 2xl:h[700px] w-auto">
        <img
          src="/images/Banner.webp"
          alt="Banner"
          className="object-cover object-bottom w-full max-h-[580px]"
        />
        <div className="absolute top-1/2 text-center w-full">
          <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>
          <button className="text-purple-500 font-bold bg-white rounded-full px-5 py-2 sm:px-10 sm:py-4 shadow-md hover:shadow-lg active:scale-90 transition duration-150">
            I'm flexible
          </button>
        </div>
      </div>
    </div>
  );
}
