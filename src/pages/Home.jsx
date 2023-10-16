import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import img1 from "../assets/q.jpg";
import img2 from "../assets/2.jpg";
function Home() {
  return (
    <div className="">
      {/* Hero */}
      <Carousel
        infiniteLoop
        autoPlay
        interval={5000}
        showArrows
        showStatus={false}
        showThumbs={false}
        stopOnHover={false}
      >
        <div className=" h-screen">
          <img src={`${img1}`} className=" h-full object-fill" />
        </div>
        <div className=" h-screen">
          <img src={`${img2}`} className=" h-full object-fill" />
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
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-2 mx-auto">
          <div className="text-center mb-2">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
              About US
            </h1>
            <p className="py-6 text-xl ">
            Nozza नेपालको सबै भन्दा मनपर्ने Nozza सेल्स एन्ड लक्की द्र हुनेछ।
              र यसमा सहभागीता लिने भाग्यमानी ब्यक्ति १ जना करोड पनि र ८ जना
              ५०००० भने २० जना ५००० को भागेदारि हुने अबसर पाउनेछन र जीवन
              परिवर्तन गर्ने अबसर प्रदान गर्नेछन। समाजमा सकारात्मक परिवर्तन
              ल्याउने आफ्नो मिसनका साथ Nozza ले २०८० देखि लिएको र यस्को result
              प्रत्येक बर्षको कार्तिक २० गते प्रकाशित गरिने छ। result प्रकाशन
              गर्दा सबै सहभागीहरुले देख्ने गरि live द्वारा गरिनेछ। र त्यसमा
              कसैको हात हुने छैन Digital system ले जस्लाई select गर्‍यो त्यही
              बिजेता हुनेछ भने Government लाई तिर्नु पर्ने Tax स्वयम बिजेता
              आफैले तिर्नु पर्नेछ। अन्य थप जानकारिको लागि तल contact us मा
              whatsApp Number & TikTok link दिइएको छ सम्पर्क गर्नसक्नुहुनेछ।
            </p>
           
            <p className="font-bold ">
              {" "}
              <span className="text-red-600 font-bold">Note : </span>If the
              target is not met, the deadline will be extended. Thank you !!.{" "}
            </p>
          </div>

          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 ">
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <path d="M22 4L12 14.01l-3-3" />
                </svg>
                <span className="title-font font-medium">
                   Nozza मा भाग लिएर payment गर्दा payment गरिसके पछि
                  Screenshoot गरेर फोतो whatsapp मा पठाए मात्र veryfiy हुनेछ।
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <path d="M22 4L12 14.01l-3-3" />
                </svg>
                <span className="title-font font-medium">
                   Veryfiy हुन 5 मिनेट देखि 24 घण्टा लाग्ने छ।
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <path d="M22 4L12 14.01l-3-3" />
                </svg>
                <span className="title-font font-medium">
                  यसमा बिदेश तथा स्वदेश दुबै ठाउबाट सहभागी हुन सकिनेछ।
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <path d="M22 4L12 14.01l-3-3" />
                </svg>
                <span className="title-font font-medium">
                 Result प्रकाशन गर्दा Top price देखि पालैपालो spin गरिने छ।
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <path d="M22 4L12 14.01l-3-3" />
                </svg>
                <span className="title-font font-medium">
                   एउटा lucky number को Rs. 500 पर्नेछ। एक भन्दा बढि number
                  लिए सोही अनुसार लाग्ने छ।
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <path d="M22 4L12 14.01l-3-3" />
                </svg>
                <span className="title-font font-medium">
                 For more Details Contact us on Whatshapp !!!!!
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
