import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
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
        <div className=" h-[700px]">
          <img src={`${img1}`} className=" h-full bg-cover" />
        </div>
        <div className=" h-[700px]">
          <img src={`${img2}`} className=" h-full" />
        </div>
      </Carousel>
      {/* legal */}
      <>
        {/* component */}
        <div className="h-24 m-3 text-white   text-center bg-cover ">
          <div className=" bg-[#27a9ff] flex justify-center items-center rounded-xl bg-opacity-70 w-full h-full">
            <h1 className="font-bold ">
              यो Number को आधारमा हुने भएको ले एक जना ब्यक्तिले जति वटा पनि लिन
              सक्नु हुनेछ ।
            </h1>
          </div>
        </div>
      </>
      {/* About us */}
      <div className="hero py-10 bg-base-200">
        <div className="hero-content text-center">
          <div>
            <h1 className="text-5xl font-bold">About Us</h1>
            <p className="py-6 text-xl">
              Nozza नेपालको सबै भन्दा मनपर्ने Nozza सेल्स एन्ड लक्की द्र हुनेछ ।
              र यसमा सहभागीता लिने भाग्यमानी ब्यक्ति १ जना करोड पनि र ५ जना लख
              पति बन्ने अबसर पाउनेछन र जीवन परिवर्तन गर्ने अबसर प्रदान गर्नेछन ।
              समाजमा सकारात्मक परिवर्तन ल्याउने आफ्नो मिसनका साथ Nozza ले २०८०
              देखि लिएको र यस्को result प्रत्येक बर्षको कार्तिक २० गते प्रकाशित
              गरिने छ। result प्रकाशन गर्दा सबै सहभागीहरुले देख्ने गरि live
              द्वारा गरिनेछ। र त्यसमा कसैको हात हुने छैन Digital system ले
              जस्लाई select गर्‍यो त्यही बिजेता हुनेछ भने Government लाई तिर्नु
              पर्ने Tax स्वयम बिजेता आफैले तिर्नु पर्नेछ। अन्य थप जानकारिको लागि
              तल contact us मा whatsApp Number & TikTok link दिइएको छ सम्पर्क
              गर्नसक्नुहुनेछ।
            </p>
            <p className="font-bold ">
              {" "}
              <span className="text-red-600 font-bold">Note : </span>If the
              target is not met, the deadline will be extended. Thank you !!.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
