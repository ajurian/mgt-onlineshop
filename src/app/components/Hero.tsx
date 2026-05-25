export default function Hero() {
  const handleShopNowClick = () => {
    const featuredSection = document.getElementById("featured-products");
    if (featuredSection) {
      featuredSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Build Your Dream PC
          </h1>
          <p className="text-xl text-slate-300 mb-8">
            Premium computer parts and components at unbeatable prices. Free
            shipping on orders over &#8369;3,000.
          </p>
          <div className="flex gap-4">
            <button
              className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors"
              onClick={handleShopNowClick}
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
