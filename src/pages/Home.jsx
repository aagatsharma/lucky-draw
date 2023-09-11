import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
function Home() {
  return (
    <div className=" mt-20">
      {/* Hero */}
      <Carousel
        infiniteLoop
        autoPlay
        interval={3000}
        showArrows
        showStatus={false}
        showThumbs={false}
      >
        <div className="h-full">
          <img
            src="https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg"
            className="h-full"
          />
        </div>
        <div className="h-full">
          <img
            src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
            className="h-full"
          />
        </div>
        <div className="h-full">
          <img
            src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
            className="h-full"
          />
        </div>
      </Carousel>

      {/* About us */}
      <div className="hero py-10 bg-base-200">
        <div className="hero-content text-center">
          <div>
            <h1 className="text-5xl font-bold">About Us</h1>
            <p className="py-6 text-xl">
              Lucky-draw is the Nepalese favourite weekly draw with the most
              frequent and highest pay-out, offers participants a life-changing
              opportunity to win millions of dirhams and access the good life,
              every week, wherever they are around the globe. In line with its
              mission to create a positive change in the society, Lucky-draw has
              awarded millions of dirhams to thousands of winners since its
              debut in 2023 and has touched the lives of around 10,000
              beneficiaries through its active community outreach program,
              carried out in partnership with official NGOs and not-for-profit
              organizations.
            </p>
          </div>
        </div>
      </div>

      {/* Company Rules/News */}
      <div className="hero py-10 bg-base-200">
        <div className="hero-content text-center">
          <div>
            <h1 className="text-5xl font-bold">Company Rules/News</h1>
            {/* Card */}
            <div className="md:grid md:grid-cols-2 xl:grid-cols-3 gap-5 mt-10">
              <div className="card w-96 bg-base-100 shadow-xl mt-5">
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

              <div className="card w-96 bg-base-100 shadow-xl mt-5">
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

              <div className="card w-96 bg-base-100 shadow-xl mt-5">
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
