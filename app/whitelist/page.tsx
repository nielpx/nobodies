import bgImage from "../../img/IMG_2883.jpg";
import WhitelistForm from "@/components/WhitelistForm";

export default function WhitelistPage() {
  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-[position:65%_center] md:bg-center"
      style={{ backgroundImage: `url(${bgImage.src})` }}
    >
      <div className="flex w-full items-start justify-start">
        <div className="hidden md:block md:w-1/2" />
        <WhitelistForm />
      </div>
    </div>
  );
}
