import bgDesktop from "../img/IMG_2887.jpg";
import bgMobile from "../img/c81bc49a-6935-43ee-b051-4a88423f9938.png";
import bgCollection from "../img/IMG_2886.jpg";
import leftImage from "../img/IMG_2885_left.png";
import rightImage from "../img/IMG_2885_right.png";

export default function Home() {
  return (
    <>
      <section
        id="home"
        className="relative flex min-h-screen w-full items-center justify-center px-8 md:px-20 pt-20"
      >
        <div
          className="absolute left-0 right-0 top-20 bottom-0 bg-cover bg-top hidden md:block"
          style={{ backgroundImage: `url(${bgDesktop.src})` }}
        />
        <div
          className="absolute left-0 right-0 top-20 bottom-0 bg-cover bg-top max-[765px]:min-[421px]:bg-center block md:hidden"
          style={{ backgroundImage: `url(${bgMobile.src})` }}
        />
      </section>

      <section
        id="collection"
        className="flex min-h-screen w-full items-center justify-center bg-cover bg-left md:bg-center px-8 md:px-20"
        style={{ backgroundImage: `url(${bgCollection.src})` }}
      >
        <div className="flex flex-col md:flex-row items-center md:justify-between justify-center gap-16 md:gap-8 w-full">
          <img src={leftImage.src} alt="" className="w-4/5 md:w-[28%] h-auto" />
          <img src={rightImage.src} alt="" className="w-4/5 md:w-[20%] md:-mt-20 h-auto" />
        </div>
      </section>
    </>
  );
}
