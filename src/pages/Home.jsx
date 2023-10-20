import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/q.jpg";
import img2 from "../assets/2.jpg";
function Home() {
  return (
    <div className=" pt-6">
      {/* Hero */}
      <Carousel
        infiniteLoop
        autoPlay
        interval={5000}
        showArrows
        showStatus={false}
        showThumbs={false}
        stopOnHover={false}
        // dynamicHeight
        className="px-3 rounded-lg pt-3"
      >
        <div className="h-[780px] mobile:h-[400px] border-2 p-4 mt-7 border-slate-500 rounded-xl">
          <img src={`${img1}`} className=" h-full object-fill rounded-xl" />
        </div>
        <div className="h-[780px] mobile:h-[400px] border-2 p-4 mt-7 border-slate-500 rounded-xl">
          <img src={`${img2}`} className=" h-full object-fill rounded-xl" />
        </div>
      </Carousel>
      {/* legal */}
      <>
        {/* component */}
        <div className=" m-3 text-white   text-center bg-cover ">
          <div className=" bg-[#27a9ff] flex justify-center items-center rounded-xl bg-opacity-70 p-3">
            <h1 className="font-bold ">
              यो Number को आधारमा हुने भएको ले एक जना ब्यक्तिले जति वटा पनि लिन
              सक्नु हुनेछ ।
            </h1>
          </div>
        </div>
      </>
      <section className="text-gray-600 body-font">
        <div className="container px-5  mx-auto">
          <div className="md:text-center">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 ">
              About us
            </h1>
            <p className=" text-xl  ">
              Nozza नेपालको सबै भन्दा मनपर्ने Nozza सेल्स एन्ड लक्की द्र हुनेछ।
              र यसमा सहभागी हुनलाई एउटा पेन किन्नु पर्ने छ र सहभागी एकजना lucky
              winer ले रु 1 करोद जित्ने छ भने 8 जना lucky winer ले 50/50 हजार
              जित्ने छन र त्यसै गरि 20 जनाले 5/5 हजार जित्ने मौका पाउनेछन र जीवन
              परिवर्तन गर्ने अबसर प्रदान गर्नेछन। समाजमा सकारात्मक परिवर्तन
              ल्याउने आफ्नो मिसनका साथ Nozza ले २०८० देखि लिएको र यस्को result
              प्रत्येक बर्षको कार्तिक २० गते प्रकाशित गरिने छ। result प्रकाशन
              गर्दा सबै सहभागीहरुले देख्ने गरि live द्वारा गरिनेछ। र त्यसमा
              कसैको हात हुने छैन Digital system ले जस्लाई select गर्‍यो त्यही
              बिजेता हुनेछ भने Government लाई तिर्नु पर्ने Tax स्वयम बिजेता
              आफैले तिर्नु पर्नेछ। अन्य थप जानकारिको लागि तल contact us मा
              whatsApp Number & TikTok link दिइएको छ सम्पर्क गर्नसक्नुहुनेछ।
            </p>

            <h2 className="text-xl font-bold mt-3 text-center">Rules</h2>

            <ol className="text-xl space-y-2">
              <li>
                1. Nozza मा भाग लिएर payment गर्दा payment गरिसके पछि
                Screenshoot गरेर फोतो whatsapp मा पठाए मात्र veryfiy हुनेछ।
              </li>
              <li>2. Verify हुन 5 मिनेट देखि 24 घण्टा लाग्ने छ। </li>
              <li>3. यसमा बिदेश तथा स्वदेश दुबै ठाउबाट सहभागी हुन सकिनेछ।</li>
              <li>
                4. result प्रकाशन गर्दा Top price देखि पालैपालो spin गरिने छ।
              </li>
              <li>
                5. एउटा lucky number को Rs. 500 पर्नेछ। एक भन्दा बढि number लिए
                सोही अनुसार लाग्ने छ।
              </li>
            </ol>

            <p className="font-bold my-5 ">
              <span className="text-red-600 font-bold">Note : </span>If the
              target is not met, the deadline will be extended. Thank you !!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
