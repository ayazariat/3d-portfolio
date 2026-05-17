import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <div key={index} className="icon">
              <a
                href={socialImg.href}
                target="_blank"
                rel="noreferrer"
                aria-label={socialImg.name}
              >
                <img src={socialImg.imgPath} alt={socialImg.name} />
              </a>
              
            </div>
          ))}
             <a
                href="/cv/AyaZariat-CV.pdf"
                download
                className="mt-8 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#4C9BFF] to-[#A55CFF] px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:brightness-110"
              >
                Download CV
              </a>
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Aya Zariat. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
