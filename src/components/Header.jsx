import {
  Bars3Icon,
  GlobeAltIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="grid grid-cols-3 items-center px-3 py-2 sm:px-5 sm:py-3 md:px-7">
        {/* Left */}
        <div className="flex h-10 w-auto">
          <img
            src="/images/Airbnb.png"
            alt="Airbnb Logo"
            className="object-contain object-left cursor-pointer"
          />
        </div>
        {/* MIddle */}
        <div className="flex items-center border rounded-full py-2 shadow">
          <input
            className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder:text-gray-400"
            type="text"
            placeholder="Start your Search"
          />
          <MagnifyingGlassIcon className="hidden lg:inline h-8 w-8 bg-red-400 text-white rounded-full p-2 mx-2 cursor-pointer" />
        </div>
        {/* Right */}
        <div className="flex items-center justify-end space-x-4 text-gray-500">
          <p className="hidden lg:inline">Become a host</p>
          <GlobeAltIcon className="h-6 w-6 cursor-pointer" />
          <div className="flex items-center space-x-2 border rounded-full p-2">
            <Bars3Icon className="h-6 w-6 cursor-pointer" />
            <UserCircleIcon className="h-6 w-6 cursor-pointer" />
          </div>
        </div>
      </div>
    </header>
  );
}
