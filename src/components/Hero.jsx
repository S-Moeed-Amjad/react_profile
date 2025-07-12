import { motion } from "framer-motion";
import { styles } from "../styles";
import { bwmap, worldmap, moeed } from "../assets";
import { SocialIcon } from "react-social-icons";

const Hero = () => {
  const socialLinks = [
    {
      id: 1,
      url: "https://www.linkedin.com/in/moeed-amjad-0141711a5",
    },
    {
      id: 2,
      url: "https://github.com/S-Moeed-Amjad",
    },
    {
      id: 3,
      url: "https://www.facebook.com/share/19ms324aos/?mibextid=wwXIfr",
    },
    {
      id: 4,
      url: "https://www.instagram.com/moeedamjad",
    },
  ];
  return (
    <>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={bwmap}
          alt="world map"
          className="w-full h-full sm:block hidden object-cover"
        />
      </div>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={worldmap}
          alt="world map"
          className="w-full h-full sm:hidden block object-cover"
        />
      </div>
      <section
        className="relative flex sm:flex-row flex-col w-full h-screen mx-auto 
        sm:bg-hero bg-hero-mobile overflow-hidden"
      >
        <div
          className={`absolute inset-0 sm:top-[50px] top-[50px] 
          lg:top-[50px] xl:top-[50px] ${styles.paddingX} 
          max-w-8xl mx-auto flex flex-row items-start
          justify-between gap-3`}
        >
          <div style={{ minWidth: "100%" }}>
            <h1
              className="sm:text-black sm:text-[90px] 
              text-eerieBlack text-[50px] font-beckman
              font-extrabold uppercase"
            >
              Syed {""}
              <span
                className="sm:text-black sm:text-[90px] 
                text-eerieBlack text-[50px] font-beckman
                font-extrabold uppercase"
              >
                Moeed Amjad
              </span>
            </h1>

            <p
              className={`${styles.heroSubText} mt-2 text-eerieBlack font-beckman`}
            >
              Software Engineer <br className="sm:block hidden" />
            </p>
            <div>
              {socialLinks.map((item) => {
                return (
                  <SocialIcon
                    url={item.url}
                    style={{ marginRight: 20, marginTop: 20 }}
                  />
                );
              })}
            </div>
          </div>
          <div
            className="w-screen flex flex-col items-start 
            justify-center sm:-ml-[3rem] xxs:mt-4"
          ></div>

          <div></div>
        </div>

        <div
          className="absolute xs:bottom-10 bottom-32 w-full 
          flex justify-start p-20 items-start"
        >
          <a href="#about">
            <div
              className="w-[35px] h-[64px] rounded-3xl border-4 
            border-french border-dark flex
            justify-center items-start p-2"
            >
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-taupe mb-1"
              />
            </div>
          </a>
        </div>

        {/* Your image comes here. Feel free to remove image if you don't plan to have one.*/}
        <div>
          <img
            className="absolute bottom-0 ml-[50vw] 
            lg:ml-[75vw] md:ml-[60vw] xmd:ml-[60vw] 2xl:ml-[83vw]
            sm:h-[90vh] md:h-[70vh] xl:h-[80vh]"
            src={moeed}
            alt="Moeed"
            style={{ backgroundColor: "transparent", opacity: 0.6 }}
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
