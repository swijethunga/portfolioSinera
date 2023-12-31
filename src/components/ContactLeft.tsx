//import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { contactImg } from "../assets";

const ContactLeft = () => {

  const handleDownload = () => {

    const downloadLink = 'https://drive.google.com/file/d/17gEYmWariMSpD8MC-V6-bHCXGs8Rkims/view?usp=sharing';

    const anchor = document.createElement('a');
    anchor.href = downloadLink;
    anchor.download = 'Sinera Wijethunga CV.pdf'; 
    anchor.click();
  };
   
    

  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#0B1120] to-[#0B1120] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Sinera Wijethunga</h3>
        <p className="text-lg font-normal text-gray-400">
          IT Undergraduate
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        I am a IT undergraduate in University of Moratuwa, hoping to be a IT professonel with true desire of serving to my country with gained knowledge.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+94 740116221</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">sinera2000@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find My CV</h2>
        <div className="flex gap-4">
          {/* <a href="https://instagram.com/mr_si_nera_?utm_source=qr&igshid=OGU0MmVlOWVjOQ==" target="_blank">
            <span className="bannerIcon">
              <FaInstagram />
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/sinera-wijethunga-741a93232?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
          >
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </a>
          <a href="https://www.facebook.com/sinera.wijethunga.3" target="_blank">
            <span className="bannerIcon">
              <FaFacebookF />
            </span>
          </a> */}

              <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center" onClick={handleDownload} >
                <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                <span>Download CV</span>
              </button>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
