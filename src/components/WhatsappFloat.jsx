import { BsWhatsapp } from "react-icons/bs";

export default function WhatsappFloat() {
  const phoneNumber = "+9779766318425";
  const message = "Hi, can you tell me more about the site.";
  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      className="fixed w-16 h-16 bottom-10 right-10 text-white text-3xl z-50 shadow bg-[#25d366] rounded-full flex justify-center"
      target="_blank"
      rel="noopener noreferrer"
    >
      <BsWhatsapp className="mt-4 rounded-full" />
    </a>
  );
}
