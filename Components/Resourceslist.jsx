import Footer from "./Footer";
const posts = [
  {
    id: 1,
    title: "Tips & Tricks for Winemaking",
    href: "/Tips-and-Tricks-9_13_23.pdf",
    description:
      "A slideshow displaying some of our most recent and most favorite tricks for getting started making wine at home",
    imageUrl:
      "./midwinepic.jpeg",    
  },

];

export default function ResourcesList() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h2 className="text-6xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Free Winemaking Resources
          </h2>
          <p className="mt-2 text-2xl leading-8">
            Here's a taste of what our club membership has to offer{" "}
          </p>
          <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
            {posts.map((post) => (
              <article
                key={post.id}
                className="relative isolate flex flex-col gap-8 lg:flex-row"
              >
                <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                  <img
                    src={post.imageUrl}
                    alt=""
                    className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div>
               
                  <div className="group relative max-w-xl">
                    <h3 className="mt-3 text-xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <a href={post.href}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-5 text-lg leading-6 text-gray-600">
                      {post.description}
                    </p>
                  </div>
                  <div className="mt-6 flex border-t border-gray-900/5 pt-6">
                    <div className="relative flex items-center gap-x-4">
                  
                      <div className="text-sm leading-6">
                    
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
