import bgImage from "../img/IMG_2886.jpg";
import leftImage from "../img/IMG_2885_left.png";
import rightImage from "../img/IMG_2885_right.png";

export default function MyComponent() {
  return (
    <div
      className="flex items-center justify-center min-h-screen w-full bg-cover bg-left md:bg-center px-8 md:px-20 pt-20"
      style={{ backgroundImage: `url(${bgImage.src})` }}
    >
      <div className="flex flex-col md:flex-row items-center md:justify-between justify-center gap-16 md:gap-8 w-full">
        <img src={leftImage.src} alt="" className="w-4/5 md:w-[28%] h-auto" />
        <img src={rightImage.src} alt="" className="w-4/5 md:w-[20%] md:-mt-20 h-auto" />
      </div>
    </div>
  );
}
