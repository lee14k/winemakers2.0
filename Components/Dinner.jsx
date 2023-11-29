import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

export default function Dinner() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
    
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-red-600">Join us for a night of fun, games, food, drink, and more!</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">WVA Dinner Dance</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
         The dinner dance is our club’s only fundraising event of the year and the money raised will partly fund our monthly programs. In addition, our organization is proud to have provided over $20,000 in grants to UW and UW-Milwaukee programs. We are committed to continuing this support in the future.


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
               Light appetizers, a sit-down meal, homemade wine, music and dancing are all included in the ticket cost, but please don't forget to bring some extra cash to play the games.
              </p>
             
              <p className="mt-8">
              Play a variety of fun and exciting games with us to win wine: the most popular Fish Bowl game, "Sixes Win" dice game, Big Wheel Spinning game and the newest game Plinko: the pingpong ball drop game.

              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Act quickly and reserve your seat now!</h2>
              <p className="mt-6">
     Note that no actual attendance tickets are issued but an advanced reservation is a must.  Name tags for you and any guests will be waiting when you arrive.  


              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
