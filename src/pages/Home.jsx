import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
function Home() {
  return (
    <div className="">
      {/* Hero */}
      <Carousel
        infiniteLoop
        autoPlay
        interval={3000}
        showArrows
        showStatus={false}
        showThumbs={false}
        stopOnHover={false}
      >
        <div className=" h-full">
          <img
            src="https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg"
            className=" h-full"
          />
        </div>
        <div className=" h-full">
          <img
            src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
            className=" h-full"
          />
        </div>
        <div className=" h-full">
          <img
            src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
            className=" h-full"
          />
        </div>
      </Carousel>

      {/* About us */}
      <div className="hero py-10 bg-base-200">
        <div className="hero-content text-center">
          <div>
            <h1 className="text-5xl font-bold">About Us</h1>
            <p className="py-6 text-xl">
              Nozza नेपाल को सबै भन्दा मनपर्ने सेल्स अनि Lucky Draws हुनेछ। र
              यसमा सहभागिता भाग्यमानी ब्यक्ति १ जना करोड पनि र ५ जना लाख पति बन
              पाउनेछन र जीवन परिवर्तन गर्ने अबसर प्रदान गर्नेछन। समाजमा
              सकारात्मक परिवर्तन ल्याउने आफ्नो मिसनका साथ Nozza ले २०२३ देखि
              लिएको ले र यस्को result प्रत्येक बर्षको जेष्ठ १ गते प्रकाशित गरिने
              छ result गर्दा सबै सहभागी देख्ने गरि live द्वारा गरिनेछ । र त्यसमा
              कसैको हात हुने छैन Digital system ले जस्लाई select गर्‍यो त्यही
              बिजेता हुनेछ भने Government लाई तिर्नु पर्ने Tax स्वयम बिजेता
              आफैले तिर्नु पर्नेछ ।
            </p>
          </div>
        </div>
      </div>

      {/* Company Rules/News */}
      <div className="hero bg-base-200">
        <div className="hero-content text-center">
          <div>
            <h1 className="text-5xl font-bold">Company Rules/News</h1>
            {/* Card */}
            <div className="md:grid md:grid-cols-2 xl:grid-cols-3 gap-5 mt-10">
              <div className="card bg-base-100 shadow-xl mt-5">
                <figure>
                  <img
                    src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                    alt="Shoes"
                  />
                </figure>
                <div className=" card-body items-center text-center">
                  <h2 className="card-title">Shoes!</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
              </div>

              <div className="card bg-base-100 shadow-xl mt-5">
                <figure>
                  <img
                    src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                    alt="Shoes"
                  />
                </figure>
                <div className=" card-body items-center text-center">
                  <h2 className="card-title">Shoes!</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
              </div>

              <div className="card  bg-base-100 shadow-xl mt-5">
                <figure>
                  <img
                    src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                    alt="Shoes"
                  />
                </figure>
                <div className=" card-body items-center text-center">
                  <h2 className="card-title">Shoes!</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
