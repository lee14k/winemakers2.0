import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

export default function Dinner() {
   const handleButtonClick = () => {
    window.location.href = "https://wihomewinemakers.org/product/dinner-dance/";
  };
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden"></div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-red-600">
                Join us for a night of fun, games, food, drink, and more!
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                WVA Dinner Dance
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                The dinner dance is our club’s only fundraising event of the
                year and the money raised will partly fund our monthly programs.
                In addition, our organization is proud to have provided over
                $20,000 in grants to UW and UW-Milwaukee programs. We are
                committed to continuing this support in the future.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="/wvadinnerdance.jpg"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
                Registration includes light appetizers, a buffet meal of braised
                beef short ribs, rosemary chicken, garlic mashed potatoes,
                gnocchi alfredo, and includes a seasonal vegetable medley,
                salad, rolls and butter, and dessert.
              </p>

              <p className="mt-8">
                Play a variety of fun and exciting games with us to win wine:
                the most popular Fish Bowl game, "Sixes Win" dice game, Big
                Wheel Spinning game and the newest game Plinko: the pingpong
                ball drop game. This is a gala style event for all WVA members
                and guests with food, games, music & dancing at the Radisson’s
                event hall. Parking is plentiful and you may book a hotel room
                for a discounted WVA rate of $95. If you choose to drive home
                please be safe, smart, and consider assigning a designated
                driver for the evening.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                Act quickly and reserve your seat now!
              </h2>
              <p className="mt-6">
                Homemade wine from some of the best winemakers in the club will
                be available at the tasting table at no cost. Bring your own
                glasses for tasting or purchase a WVA branded glass if you
                forget yours at home! The hotel offers a cash bar for non-wine
                beverages.
              </p>
                          <button onClick={handleButtonClick} className="mt-5 bg-pink-800 px-6 py-3 text-xl font-semibold shadow-sm border-solid border-pink-800 border-2 text-white">Join Us Now!</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
