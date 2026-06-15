import { League_Spartan } from "next/font/google";
import bgDesktop from "../img/IMG_2887.jpg";
import bgMobile from "../img/c81bc49a-6935-43ee-b051-4a88423f9938.png";
import bgCollection from "../img/IMG_2886.jpg";
import bgAbout from "../img/firstimage.jpg";
import leftImage from "../img/IMG_2885_left.png";
import rightImage from "../img/IMG_2885_right.png";
import collectionMobile from "../img/collectionmobile.png";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-league-spartan",
});

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
        id="about"
        className={`${leagueSpartan.variable} relative min-h-screen w-full overflow-hidden`}
        style={{
          fontFamily: "var(--font-league-spartan)",
        }}
      >
        {/* Mobile background */}
        <div
          className="block lg:hidden absolute inset-0 bg-cover bg-center bg-no-repeat -z-10"
          style={{ backgroundImage: `url(${bgAbout.src})` }}
        />

        {/* Desktop Interactive Room Infographic */}
        <div
          className="hidden lg:block w-full aspect-[5024/2847] relative select-none bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bgAbout.src})`, containerType: "inline-size" }}
        >
          {/* ABOUT NOBODIES CLUB card (on the left) */}
          <div
            className="absolute bg-[#fdfbf7] border-[3px] border-black rounded-2xl p-[1.5cqw] flex flex-col justify-between text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            style={{
              left: "4.8%",
              top: "17.3%",
              width: "19.2%",
              height: "44.6%",
              containerType: "inline-size",
            }}
          >
            <div>
              <span
                className="text-[#d23c2a] font-extrabold tracking-wider"
                style={{ fontSize: "7cqw" }}
              >
                ABOUT
              </span>
              <h3
                className="font-extrabold leading-none text-black mt-[0.2cqw]"
                style={{ fontSize: "14cqw", wordBreak: "break-word" }}
              >
                NOBODIES
                <br />
                CLUB
              </h3>
              <span
                className="block font-semibold text-[#555] tracking-wider mt-[0.4cqw] border-b-2 border-black pb-[0.6cqw]"
                style={{ fontSize: "5cqw", wordBreak: "break-word" }}
              >
                NFT COLLECTION • TRADING CARDS
              </span>
              <p
                className="text-[#4d3d84] font-extrabold mt-[0.8cqw] leading-tight"
                style={{ fontSize: "6.5cqw", wordBreak: "break-word" }}
              >
                A tribute to the ordinary people whose lives shaped the world —
                without recognition, without applause, without being remembered.
              </p>
              <p
                className="text-gray-700 font-medium mt-[0.6cqw] leading-tight"
                style={{ fontSize: "5.5cqw", wordBreak: "break-word" }}
              >
                NOBODIES is a collection of 3,333 hand-crafted trading-card NFTs
                featuring everyday characters from different professions,
                backgrounds, and communities.
              </p>
            </div>
            <div>
              <button
                className="w-full text-center bg-[#fed136] hover:bg-[#e2ba2e] border-2 border-black text-black font-extrabold rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-y-[1px] active:shadow-none transition-all py-[0.5cqw] cursor-pointer"
                style={{ fontSize: "6.5cqw" }}
              >
                LEARN MORE
              </button>
            </div>
          </div>

          {/* TV Screen Container */}
          <div
            className="absolute flex"
            style={{
              left: "33.8%",
              top: "7.7%",
              width: "43.2%",
              height: "45.7%",
              containerType: "inline-size",
            }}
          >
            {/* THE MANIFESTO panel (top-left) */}
            <div
              className="absolute bg-[#4d3d84] border border-black rounded-lg px-[1.5cqw] py-[0.8cqw] flex flex-col gap-[1cqw] text-white"
              style={{ left: "1%", top: "3%", width: "42%", height: "61%" }}
            >
              <h3
                className="font-extrabold uppercase tracking-wider text-white"
                style={{ fontSize: "3cqw" }}
              >
                THE MANIFESTO
              </h3>
              <p
                className="font-bold leading-snug text-white"
                style={{ fontSize: "2.2cqw" }}
              >
                “The world remembers the famous. NOBODIES remembers everyone
                else.”
              </p>
              <p
                className="text-purple-100 font-medium leading-snug"
                style={{ fontSize: "1.6cqw" }}
              >
                Behind every celebrated name are thousands of teachers,
                builders, nurses, artists, and dreamers — whose contributions
                quietly move the world forward without recognition.
              </p>
              <p
                className="text-purple-100 font-medium leading-snug"
                style={{ fontSize: "1.6cqw" }}
              >
                NOBODIES is built on a single belief: impact matters more than
                visibility.
              </p>
              <p
                className="font-bold text-white"
                style={{ fontSize: "1.8cqw" }}
              >
                The world wasn't built by heroes alone. It was built by
                Nobodies.
              </p>
            </div>

            {/* COLLECTION OVERVIEW panel (top-center) */}
            <div
              className="absolute bg-[#fdfbf7] border border-black rounded-lg px-[1.5cqw] py-[0.8cqw] flex flex-col justify-between text-black"
              style={{ left: "43%", top: "3%", width: "30%", height: "65%" }}
            >
              <div>
                <h3
                  className="font-extrabold uppercase tracking-tight whitespace-nowrap"
                  style={{ fontSize: "2.4cqw" }}
                >
                  COLLECTION OVERVIEW
                </h3>
                <p
                  className="text-gray-700 font-medium leading-snug"
                  style={{ fontSize: "1.6cqw" }}
                >
                  3,333 unique trading-card NFTs featuring everyday characters.
                  Each card represents a unique individual within the Nobodies
                  universe, complete with distinct visual traits, professions,
                  rarity classes, and collectible attributes.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-[0.15cqw]">
                <div className="flex items-start gap-[0.15cqw]">
                  <div className="bg-[#fde68a] rounded p-[0.35cqw] flex items-center justify-center shrink-0 mt-[0.05cqw]">
                    <svg
                      className="text-yellow-600"
                      style={{ width: "2cqw", height: "2cqw" }}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4
                      className="font-extrabold leading-none text-black"
                      style={{ fontSize: "1.7cqw" }}
                    >
                      Pure Human Art
                    </h4>
                    <p
                      className="text-gray-600 leading-none mt-[0.05cqw]"
                      style={{ fontSize: "1.3cqw" }}
                    >
                      Every piece hand-crafted. Zero AI.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-[0.15cqw]">
                  <div className="bg-[#bfdbfe] rounded p-[0.35cqw] flex items-center justify-center shrink-0 mt-[0.05cqw]">
                    <svg
                      className="text-blue-600"
                      style={{ width: "2cqw", height: "2cqw" }}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.333 0 4 .667 4 2v1H5v-1c0-1.333 2.667-2 4-2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4
                      className="font-extrabold leading-none text-black"
                      style={{ fontSize: "1.7cqw" }}
                    >
                      Identity-First
                    </h4>
                    <p
                      className="text-gray-600 leading-none mt-[0.05cqw]"
                      style={{ fontSize: "1.3cqw" }}
                    >
                      3,333 unique identities, each a life story the world never
                      told.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-[0.15cqw]">
                  <div className="bg-[#a7f3d0] rounded p-[0.35cqw] flex items-center justify-center shrink-0 mt-[0.05cqw]">
                    <svg
                      className="text-green-600"
                      style={{ width: "2cqw", height: "2cqw" }}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4
                      className="font-extrabold leading-none text-black"
                      style={{ fontSize: "1.7cqw" }}
                    >
                      Community-First
                    </h4>
                    <p
                      className="text-gray-600 leading-none mt-[0.05cqw]"
                      style={{ fontSize: "1.3cqw" }}
                    >
                      90% reserved supply reserved for community.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-[0.15cqw]">
                  <div className="bg-[#fecdd3] rounded p-[0.35cqw] flex items-center justify-center shrink-0 mt-[0.05cqw]">
                    <svg
                      className="text-rose-600"
                      style={{ width: "2cqw", height: "2cqw" }}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4
                      className="font-extrabold leading-none text-black"
                      style={{ fontSize: "1.7cqw" }}
                    >
                      Meaning Over Hype
                    </h4>
                    <p
                      className="text-gray-600 leading-none mt-[0.05cqw]"
                      style={{ fontSize: "1.3cqw" }}
                    >
                      Holding a Nobody is a statement - not a flex, but a
                      belief.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CHARACTER CLASSES panel (top-right) */}
            <div
              className="absolute bg-[#fdfbf7] border border-black rounded-t-lg border-l-0 px-[1.5cqw] py-[0.8cqw] flex flex-col text-black"
              style={{ left: "73%", top: "3%", width: "27%", height: "95%" }}
            >
              <div
                className="absolute left-0 top-0 w-px bg-black"
                style={{ height: "68.4%" }}
              />
              <h3
                className="font-extrabold uppercase tracking-tight whitespace-nowrap mb-[0.4cqw]"
                style={{ fontSize: "2.4cqw" }}
              >
                CHARACTER CLASSES
              </h3>
              <div className="flex flex-col gap-[0.6cqw] flex-grow">
                <div className="flex items-center gap-[0.6cqw] border-b border-gray-200 pb-[0.4cqw]">
                  <div
                    className="rounded-full border border-black shrink-0 flex items-center justify-center"
                    style={{
                      width: "6cqw",
                      height: "6cqw",
                      backgroundColor: "#f97316",
                    }}
                  >
                    <svg
                      width="3.2cqw"
                      height="3.2cqw"
                      viewBox="0 0 24 24"
                      fill="white"
                    >
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                  <div>
                    <h4
                      className="font-extrabold leading-tight"
                      style={{ fontSize: "2.2cqw" }}
                    >
                      Creator Class
                    </h4>
                    <p
                      className="text-gray-600 leading-tight mt-[0.1cqw]"
                      style={{ fontSize: "1.6cqw" }}
                    >
                      Character who creates and imagines.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-[0.6cqw] border-b border-gray-200 pb-[0.4cqw]">
                  <div
                    className="rounded-full border border-black shrink-0 flex items-center justify-center"
                    style={{
                      width: "6cqw",
                      height: "6cqw",
                      backgroundColor: "#3b82f6",
                    }}
                  >
                    <svg
                      width="3.2cqw"
                      height="3.2cqw"
                      viewBox="0 0 24 24"
                      fill="white"
                    >
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                  <div>
                    <h4
                      className="font-extrabold leading-tight"
                      style={{ fontSize: "2.2cqw" }}
                    >
                      Builder Class
                    </h4>
                    <p
                      className="text-gray-600 leading-tight mt-[0.1cqw]"
                      style={{ fontSize: "1.6cqw" }}
                    >
                      Character who builds products
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-[0.6cqw] border-b border-gray-200 pb-[0.4cqw]">
                  <div
                    className="rounded-full border border-black shrink-0 flex items-center justify-center"
                    style={{
                      width: "6cqw",
                      height: "6cqw",
                      backgroundColor: "#22c55e",
                    }}
                  >
                    <svg
                      width="3.2cqw"
                      height="3.2cqw"
                      viewBox="0 0 24 24"
                      fill="white"
                    >
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                  <div>
                    <h4
                      className="font-extrabold leading-tight"
                      style={{ fontSize: "2.2cqw" }}
                    >
                      Collector Class
                    </h4>
                    <p
                      className="text-gray-600 leading-tight mt-[0.1cqw]"
                      style={{ fontSize: "1.6cqw" }}
                    >
                      Character who preserves culture and history.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-[0.6cqw] border-b border-gray-200 pb-[0.4cqw]">
                  <div
                    className="rounded-full border border-black shrink-0 flex items-center justify-center"
                    style={{
                      width: "6cqw",
                      height: "6cqw",
                      backgroundColor: "#a855f7",
                    }}
                  >
                    <svg
                      width="3.2cqw"
                      height="3.2cqw"
                      viewBox="0 0 24 24"
                      fill="white"
                    >
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                  <div>
                    <h4
                      className="font-extrabold leading-tight"
                      style={{ fontSize: "2.2cqw" }}
                    >
                      Degen Class
                    </h4>
                    <p
                      className="text-gray-600 leading-tight mt-[0.1cqw]"
                      style={{ fontSize: "1.6cqw" }}
                    >
                      Character born frominternet culture.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-[0.6cqw] pb-[0.4cqw]">
                  <div
                    className="rounded-full border border-black shrink-0 flex items-center justify-center"
                    style={{
                      width: "6cqw",
                      height: "6cqw",
                      backgroundColor: "#6b7280",
                    }}
                  >
                    <svg
                      width="3.2cqw"
                      height="3.2cqw"
                      viewBox="0 0 24 24"
                      fill="white"
                    >
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                  <div>
                    <h4
                      className="font-extrabold leading-tight"
                      style={{ fontSize: "2.2cqw" }}
                    >
                      Worker Class
                    </h4>
                    <p
                      className="text-gray-600 leading-tight mt-[0.1cqw]"
                      style={{ fontSize: "1.6cqw" }}
                    >
                      The backbone ofthe world.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RARITY SYSTEM panel (bottom-left) */}
            <div
              className="absolute bg-[#fdfbf7] border border-black border-b-0 rounded-lg px-[1.5cqw] py-[0.5cqw] flex flex-col text-black"
              style={{ left: "1%", top: "64%", width: "37%", height: "34%" }}
            >
              <h3
                className="font-extrabold uppercase leading-none shrink-0"
                style={{ fontSize: "2.4cqw" }}
              >
                RARITY SYSTEM
              </h3>
              <div className="flex items-center justify-center flex-grow">
                <table
                  className="w-full text-left border-separate"
                  style={{ fontSize: "1.5cqw", borderSpacing: "0 0.2cqw" }}
                >
                  <tbody>
                    <tr>
                      <td
                        className="py-[0.12cqw] border-t border-b border-r border-gray-300 px-[0.2cqw]"
                        style={{ lineHeight: 0 }}
                      >
                        <span
                          className="inline-block font-extrabold rounded border border-black bg-[#4e75f7] text-white px-[0.7cqw] py-[0.5cqw]"
                          style={{
                            fontSize: "1.2cqw",
                            lineHeight: 1,
                            verticalAlign: "middle",
                          }}
                        >
                          COMMON
                        </span>
                      </td>
                      <td className="py-[0.12cqw] border-t border-b border-r border-gray-300 font-extrabold text-right px-[0.2cqw] align-middle">
                        60%
                      </td>
                      <td className="py-[0.12cqw] border-t border-b border-gray-300 px-[0.2cqw] align-middle">
                        Standard Frame
                      </td>
                    </tr>
                    <tr>
                      <td
                        className="py-[0.12cqw] border-t border-b border-r border-gray-300 px-[0.2cqw]"
                        style={{ lineHeight: 0 }}
                      >
                        <span
                          className="inline-block font-extrabold rounded border border-black bg-[#42b87e] text-white px-[0.7cqw] py-[0.5cqw]"
                          style={{
                            fontSize: "1.2cqw",
                            lineHeight: 1,
                            verticalAlign: "middle",
                          }}
                        >
                          UNCOMMON
                        </span>
                      </td>
                      <td className="py-[0.12cqw] border-t border-b border-r border-gray-300 font-extrabold text-right px-[0.2cqw] align-middle">
                        28%
                      </td>
                      <td className="py-[0.12cqw] border-t border-b border-gray-300 px-[0.2cqw] align-middle">
                        Enhanced Frame
                      </td>
                    </tr>
                    <tr>
                      <td
                        className="py-[0.12cqw] border-t border-b border-r border-gray-300 px-[0.2cqw]"
                        style={{ lineHeight: 0 }}
                      >
                        <span
                          className="inline-block font-extrabold rounded border border-black bg-[#5e5af6] text-white px-[0.7cqw] py-[0.5cqw]"
                          style={{
                            fontSize: "1.2cqw",
                            lineHeight: 1,
                            verticalAlign: "middle",
                          }}
                        >
                          RARE
                        </span>
                      </td>
                      <td className="py-[0.12cqw] border-t border-b border-r border-gray-300 font-extrabold text-right px-[0.2cqw] align-middle">
                        11.5%
                      </td>
                      <td className="py-[0.12cqw] border-t border-b border-gray-300 px-[0.2cqw] align-middle">
                        Metallic/Unique BG
                      </td>
                    </tr>
                    <tr>
                      <td
                        className="py-[0.12cqw] border-t border-b border-r border-gray-300 px-[0.2cqw]"
                        style={{ lineHeight: 0 }}
                      >
                        <span
                          className="inline-block font-extrabold rounded border border-black bg-[#b055f6] text-white px-[0.7cqw] py-[0.5cqw]"
                          style={{
                            fontSize: "1.2cqw",
                            lineHeight: 1,
                            verticalAlign: "middle",
                          }}
                        >
                          EPIC
                        </span>
                      </td>
                      <td className="py-[0.12cqw] border-t border-b border-r border-gray-300 font-extrabold text-right px-[0.2cqw] align-middle">
                        0.5%
                      </td>
                      <td
                        className="py-[0.12cqw] border-t border-b border-gray-300 px-[0.2cqw] align-middle"
                        style={{ fontSize: "1.2cqw" }}
                      >
                        Full Art/Animated
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* MINT DETAILS panel (bottom-right) */}
            <div
              className="absolute bg-[#fdfbf7] border border-black border-b-0 border-r-0 px-[1.5cqw] py-[0.5cqw] flex flex-col text-black"
              style={{ left: "38%", top: "68%", width: "35%", height: "30%" }}
            >
              <h3
                className="font-extrabold uppercase leading-none shrink-0"
                style={{ fontSize: "2.4cqw" }}
              >
                MINT DETAILS
              </h3>
              <div className="flex items-center justify-center flex-grow">
                <table
                  className="w-full text-left border-separate"
                  style={{ fontSize: "1.4cqw", borderSpacing: "0 0.2cqw" }}
                >
                  <thead>
                    <tr className="text-gray-500 font-extrabold">
                      <th className="pb-[0.1cqw] px-[0.25cqw] text-left">
                        TIER
                      </th>
                      <th className="pb-[0.1cqw] text-center px-[0.25cqw]">
                        PRICE
                      </th>
                      <th className="pb-[0.1cqw] text-center px-[0.25cqw]">
                        WALLETS
                      </th>
                      <th className="pb-[0.1cqw] text-center px-[0.25cqw]">
                        SUPPLY
                      </th>
                      <th className="pb-[0.1cqw] text-center px-[0.25cqw]">
                        ACCESS
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-[#fdf5df] font-semibold">
                      <td
                        className="py-[0.12cqw] border-t border-b border-r border-gray-300 px-[0.25cqw] pl-[0.15cqw]"
                        style={{ lineHeight: 0 }}
                      >
                        <span
                          className="inline-block font-extrabold rounded border border-black bg-[#c5a55a] text-white px-[0.7cqw] py-[0.5cqw]"
                          style={{
                            fontSize: "1.2cqw",
                            lineHeight: 1,
                            verticalAlign: "middle",
                          }}
                        >
                          GUARANTEED
                        </span>
                      </td>
                      <td className="py-[0.12cqw] border-t border-b border-r border-gray-300 text-right px-[0.25cqw]">
                        0.0033
                      </td>
                      <td className="py-[0.12cqw] border-t border-b border-r border-gray-300 text-right px-[0.25cqw]">
                        2,000
                      </td>
                      <td className="py-[0.12cqw] border-t border-b border-r border-gray-300 font-bold text-right px-[0.25cqw]">
                        60%
                      </td>
                      <td className="py-[0.12cqw] border-t border-b border-gray-300 px-[0.25cqw] text-gray-600">
                        Allowlist
                      </td>
                    </tr>
                    <tr className="bg-[#ecf9f0] font-semibold">
                      <td
                        className="py-[0.12cqw] border-t border-b border-r border-gray-300 px-[0.25cqw] pl-[0.15cqw]"
                        style={{ lineHeight: 0 }}
                      >
                        <span
                          className="inline-block font-extrabold rounded border border-black bg-[#42b87e] text-white px-[0.7cqw] py-[0.5cqw]"
                          style={{
                            fontSize: "1.2cqw",
                            lineHeight: 1,
                            verticalAlign: "middle",
                          }}
                        >
                          FCFS
                        </span>
                      </td>
                      <td className="py-[0.12cqw] border-t border-b border-r border-gray-300 text-right px-[0.25cqw]">
                        0.0043
                      </td>
                      <td className="py-[0.12cqw] border-t border-b border-r border-gray-300 text-right px-[0.25cqw]">
                        1,000
                      </td>
                      <td className="py-[0.12cqw] border-t border-b border-r border-gray-300 font-bold text-right px-[0.25cqw]">
                        30%
                      </td>
                      <td
                        className="py-[0.12cqw] border-t border-b border-gray-300 px-[0.25cqw] text-gray-600 leading-none"
                        style={{ fontSize: "1.2cqw" }}
                      >
                        FCFS
                      </td>
                    </tr>
                    <tr className="bg-[#e8f4fc] font-semibold">
                      <td
                        className="py-[0.12cqw] border-t border-b border-r border-gray-300 px-[0.25cqw] pl-[0.15cqw]"
                        style={{ lineHeight: 0 }}
                      >
                        <span
                          className="inline-block font-extrabold rounded border border-black bg-[#3b82f6] text-white px-[0.7cqw] py-[0.5cqw]"
                          style={{
                            fontSize: "1.2cqw",
                            lineHeight: 1,
                            verticalAlign: "middle",
                          }}
                        >
                          PUBLIC
                        </span>
                      </td>
                      <td className="py-[0.12cqw] border-t border-b border-r border-gray-300 text-right px-[0.25cqw]">
                        0.005
                      </td>
                      <td className="py-[0.12cqw] border-t border-b border-r border-gray-300 text-right px-[0.25cqw]">
                        333
                      </td>
                      <td className="py-[0.12cqw] border-t border-b border-r border-gray-300 font-bold text-right px-[0.25cqw]">
                        10%
                      </td>
                      <td className="py-[0.12cqw] border-t border-b border-gray-300 px-[0.25cqw] text-gray-600">
                        Open
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Footer Grey Container (ROADMAP, VALUES, DEDICATION) */}
          <div
            className="absolute left-0 bottom-0 right-0 flex items-stretch p-[0.8cqw]"
            style={{
              height: "23%",
              containerType: "inline-size",
            }}
          >
            {/* ROADMAP panel */}
            <div
              className="bg-[#f5f0da] border-[2.5px] border-black rounded-l-xl rounded-r-none p-[0.8cqw] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex items-center gap-[0.8cqw]"
              style={{
                width: "46%",
                height: "100%",
                containerType: "inline-size",
              }}
            >
              <img
                src="/img/roadmap_character.png"
                alt=""
                className="shrink-0 object-contain self-center"
                style={{ width: "7.5cqw", height: "auto" }}
              />
              <div className="flex-grow flex flex-col justify-between h-full py-[0.1cqw]">
                <h3
                  className="font-extrabold leading-none text-black mb-[0.2cqw]"
                  style={{ fontSize: "3.2cqw" }}
                >
                  ROADMAP
                </h3>
                <div className="flex items-stretch gap-[0.5cqw] flex-grow">
                  <div className="flex-1 flex flex-col">
                    <div>
                      <span
                        className="text-gray-500 font-extrabold block leading-none"
                        style={{ fontSize: "1.6cqw" }}
                      >
                        PHASE 1
                      </span>
                      <h4
                        className="font-extrabold leading-none text-black mt-[0.1cqw]"
                        style={{ fontSize: "2.1cqw" }}
                      >
                        Launch
                      </h4>
                      <span
                        className="inline-flex items-center mt-[0.1cqw] font-extrabold px-[0.5cqw] py-[0.15cqw] rounded bg-[#10b981] text-white border border-black uppercase tracking-wider"
                        style={{ fontSize: "1.3cqw", lineHeight: 1.4 }}
                      >
                        ACTIVE
                      </span>
                    </div>
                    <p
                      className="text-gray-600 leading-snug mt-[0.1cqw]"
                      style={{ fontSize: "1.6cqw" }}
                    >
                      Release of 3.333 hand-crafted identities, Building the
                      founding community of Nobodies.
                    </p>
                  </div>
                  <div
                    className="flex items-center text-gray-400 font-extrabold px-[0.1cqw] self-start"
                    style={{ fontSize: "3cqw", marginTop: "3.9cqw" }}
                  >
                    →
                  </div>
                  <div className="flex-1 flex flex-col">
                    <div>
                      <span
                        className="text-gray-500 font-extrabold block leading-none"
                        style={{ fontSize: "1.6cqw" }}
                      >
                        PHASE 2
                      </span>
                      <h4
                        className="font-extrabold leading-none text-black mt-[0.1cqw]"
                        style={{ fontSize: "2.1cqw" }}
                      >
                        Ecosystem
                      </h4>
                      <span
                        className="inline-flex items-center mt-[0.1cqw] font-extrabold px-[0.5cqw] py-[0.15cqw] rounded bg-[#3b82f6] text-white border border-black uppercase tracking-wider"
                        style={{ fontSize: "1.3cqw", lineHeight: 1.4 }}
                      >
                        SOON
                      </span>
                    </div>
                    <p
                      className="text-gray-600 leading-snug mt-[0.1cqw]"
                      style={{ fontSize: "1.6cqw" }}
                    >
                      Holder spaces, collabs, physical tributes.
                    </p>
                  </div>
                  <div
                    className="flex items-center text-gray-400 font-extrabold px-[0.1cqw] self-start"
                    style={{ fontSize: "3cqw", marginTop: "3.9cqw" }}
                  >
                    →
                  </div>
                  <div className="flex-1 flex flex-col">
                    <div>
                      <span
                        className="text-gray-500 font-extrabold block leading-none"
                        style={{ fontSize: "1.6cqw" }}
                      >
                        PHASE 3
                      </span>
                      <h4
                        className="font-extrabold leading-none text-black mt-[0.1cqw]"
                        style={{ fontSize: "2.1cqw" }}
                      >
                        The Archive
                      </h4>
                      <span
                        className="inline-flex items-center mt-[0.1cqw] font-extrabold px-[0.5cqw] py-[0.15cqw] rounded bg-gray-400 text-white border border-black uppercase tracking-wider"
                        style={{ fontSize: "1.3cqw", lineHeight: 1.4 }}
                      >
                        FUTURE
                      </span>
                    </div>
                    <p
                      className="text-gray-600 leading-snug mt-[0.1cqw]"
                      style={{ fontSize: "1.6cqw" }}
                    >
                      Untold stories. Holders submit their Nobodies.
                    </p>
                  </div>
                  <div
                    className="flex items-center text-gray-400 font-extrabold px-[0.1cqw] self-start"
                    style={{ fontSize: "3cqw", marginTop: "3.9cqw" }}
                  >
                    →
                  </div>
                  <div className="flex-1 flex flex-col">
                    <div>
                      <span
                        className="text-gray-500 font-extrabold block leading-none"
                        style={{ fontSize: "1.6cqw" }}
                      >
                        PHASE 4
                      </span>
                      <h4
                        className="font-extrabold leading-none text-black mt-[0.1cqw]"
                        style={{ fontSize: "2.1cqw" }}
                      >
                        Expansion
                      </h4>
                      <span
                        className="inline-flex items-center mt-[0.1cqw] font-extrabold px-[0.5cqw] py-[0.15cqw] rounded bg-gray-400 text-white border border-black uppercase tracking-wider"
                        style={{ fontSize: "1.3cqw", lineHeight: 1.4 }}
                      >
                        FUTURE
                      </span>
                    </div>
                    <p
                      className="text-gray-600 leading-snug mt-[0.1cqw]"
                      style={{ fontSize: "1.6cqw" }}
                    >
                      Art drops, physical editions, Web3 & beyond.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* VALUES panel (merged with DEDICATION) */}
            <div
              className="bg-[#fdfbf7] border-[2.5px] border-black rounded-r-xl rounded-l-none p-[0.6cqw] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex flex-col"
              style={{
                width: "53%",
                height: "100%",
                containerType: "inline-size",
              }}
            >
              <div className="flex flex-row gap-[0.3cqw] flex-grow">
                <div className="flex flex-col flex-1 gap-[0.2cqw]">
                  <div className="relative mb-[0.2cqw]">
                    <div className="absolute inset-0 flex items-center pointer-events-none">
                      <div className="w-full h-px bg-black" />
                    </div>
                    <h3
                      className="font-extrabold leading-none text-black relative inline-block bg-[#fdfbf7] pr-[0.3cqw]"
                      style={{ fontSize: "3.2cqw" }}
                    >
                      VALUES
                    </h3>
                  </div>
                  <div
                    className="grid grid-cols-3 grid-rows-2 gap-[0.1cqw]"
                  >
                    <div className="flex items-start gap-[0.15cqw]">
                      <svg
                        className="text-gray-700 shrink-0"
                        style={{ width: "2cqw", height: "2cqw" }}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                        />
                      </svg>
                      <div className="flex flex-col">
                        <h4 className="font-extrabold leading-tight text-black" style={{ fontSize: "1.7cqw" }}>
                          Invisible Impact
                        </h4>
                        <p className="text-gray-600 leading-tight" style={{ fontSize: "1.4cqw" }}>
                          The greatest contributions often happen unseen.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-[0.15cqw]">
                      <svg
                        className="text-amber-600 shrink-0"
                        style={{ width: "2cqw", height: "2cqw" }}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        />
                      </svg>
                      <div className="flex flex-col">
                        <h4 className="font-extrabold leading-tight text-black" style={{ fontSize: "1.7cqw" }}>
                          Human Made Only
                        </h4>
                        <p className="text-gray-600 leading-tight" style={{ fontSize: "1.4cqw" }}>
                          Every card is illustrated by hand. No AI Ever.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-[0.15cqw]">
                      <svg
                        className="text-green-600 shrink-0"
                        style={{ width: "2cqw", height: "2cqw" }}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      <div className="flex flex-col">
                        <h4 className="font-extrabold leading-tight text-black" style={{ fontSize: "1.7cqw" }}>
                          Community First
                        </h4>
                        <p className="text-gray-600 leading-tight" style={{ fontSize: "1.4cqw" }}>
                          The archive belongs to the community.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-[0.15cqw]">
                      <svg
                        className="text-rose-600 shrink-0"
                        style={{ width: "2cqw", height: "2cqw" }}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                      <div className="flex flex-col">
                        <h4 className="font-extrabold leading-tight text-black" style={{ fontSize: "1.7cqw" }}>
                          Meaning Over Status
                        </h4>
                        <p className="text-gray-600 leading-tight" style={{ fontSize: "1.4cqw" }}>
                          Recognition is optional. Impact is not.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-[0.15cqw]">
                      <svg
                        className="text-amber-500 shrink-0"
                        style={{ width: "2cqw", height: "2cqw" }}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                        />
                      </svg>
                      <div className="flex flex-col">
                        <h4 className="font-extrabold leading-tight text-black" style={{ fontSize: "1.7cqw" }}>
                          Legacy Without Fame
                        </h4>
                        <p className="text-gray-600 leading-tight" style={{ fontSize: "1.4cqw" }}>
                          The impact lasts longer than the spotlight.
                        </p>
                      </div>
                    </div>
                    <div />
                  </div>
                </div>
                <div className="bg-[#fed136] border-[2.5px] border-black rounded-lg p-[0.8cqw] flex-shrink-0 flex flex-col gap-[0.2cqw] text-black" style={{ width: "38%" }}>
                  <div>
                    <h3
                      className="font-extrabold leading-tight text-black"
                      style={{ fontSize: "2.8cqw" }}
                    >
                      Everyone Has A Nobody.
                    </h3>
                    <p
                      className="leading-tight text-black"
                      style={{ fontSize: "1.6cqw" }}
                    >
                      A teacher. A parent. A friend. A mentor. Someone whose impact changed a life forever.
                    </p>
                  </div>
                  <div className="mt-[0.8cqw]">
                    <p
                      className="font-extrabold leading-none"
                      style={{ fontSize: "1.8cqw" }}
                    >
                      NOBODIES is dedicated to them.
                    </p>
                    <a
                      href="https://x.com/NobodiesclubNFT"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-[0.15cqw] font-extrabold hover:underline mt-[1.5cqw] mb-[1cqw]"
                      style={{ fontSize: "1.6cqw" }}
                    >
                      <svg
                        className="shrink-0"
                        style={{ width: "2cqw", height: "2cqw" }}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                      x.com/NobodiesclubNFT
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Stacked Layout (Clean and Highly Readable) */}
        <div className="block lg:hidden w-full px-4 py-8 flex flex-col gap-8 text-black">

          {/* ABOUT NOBODIES CLUB card */}
          <div className="bg-[#fdfbf7] border-4 border-black rounded-2xl p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-4">
            <div className="flex justify-between items-start gap-4">
              <div>
                <span className="text-[#d23c2a] text-sm font-extrabold tracking-wider">
                  ABOUT
                </span>
                <h3 className="text-3xl font-extrabold leading-none text-black mt-1">
                  NOBODIES CLUB
                </h3>
                <span className="block text-xs font-semibold text-[#555] tracking-wider mt-1 border-b-2 border-black pb-2">
                  NFT COLLECTION • TRADING CARDS
                </span>
              </div>
            </div>
            <p className="text-[#4d3d84] font-extrabold text-base leading-relaxed">
              A tribute to the ordinary people whose lives shaped the world —
              without recognition, without applause, without being remembered.
            </p>
            <p className="text-gray-700 font-medium text-sm leading-relaxed">
              NOBODIES is a collection of 3,333 hand-crafted trading-card NFTs
              featuring everyday characters from different professions,
              backgrounds, and communities.
            </p>
            <button className="w-full text-center bg-[#fed136] hover:bg-[#e2ba2e] border-2 border-black text-black font-extrabold text-sm py-3 rounded-full shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-y-[1px] active:shadow-none transition-all cursor-pointer">
              LEARN MORE
            </button>
          </div>

          {/* THE MANIFESTO */}
          <div className="bg-[#4d3d84] border-4 border-black rounded-2xl p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-white flex flex-col gap-3">
            <h3 className="font-extrabold text-lg uppercase tracking-wider text-white">
              THE MANIFESTO
            </h3>
            <p className="font-bold text-base leading-snug text-white">
              “The world remembers the famous. NOBODIES remembers everyone
              else.”
            </p>
            <p className="text-purple-100 font-medium text-sm leading-relaxed">
              Behind every celebrated name are thousands of teachers, builders,
              nurses, artists, and dreamers — whose contributions quietly move
              the world forward without recognition.
            </p>
            <p className="text-purple-100 font-medium text-sm leading-relaxed">
              NOBODIES is built on a single belief: impact matters more than
              visibility.
            </p>
            <p className="font-bold text-white text-base">
              The world wasn't built by heroes alone. It was built by Nobodies.
            </p>
          </div>

          {/* COLLECTION OVERVIEW */}
          <div className="bg-[#fdfbf7] border-4 border-black rounded-2xl p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-4">
            <h3 className="font-extrabold text-lg uppercase tracking-tight text-black">
              COLLECTION OVERVIEW
            </h3>
            <p className="text-gray-700 font-medium text-sm leading-relaxed">
              3,333 unique trading-card NFTs featuring everyday characters from
              different professions, backgrounds, and communities. Each card
              represents a unique individual within the Nobodies universe,
              complete with distinct visual traits, professions, rarity classes,
              and collectible attributes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-[#fffbeb] border border-black rounded-lg p-3 flex items-start gap-3">
                <svg
                  className="text-yellow-600 mt-0.5 shrink-0 w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
                <div>
                  <h4 className="font-extrabold text-sm leading-none text-black">
                    Pure Human Art
                  </h4>
                  <p className="text-xs text-gray-600 mt-1">
                    Every piece hand-crafted. Zero AI.
                  </p>
                </div>
              </div>
              <div className="bg-[#eff6ff] border border-black rounded-lg p-3 flex items-start gap-3">
                <svg
                  className="text-blue-600 mt-0.5 shrink-0 w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.333 0 4 .667 4 2v1H5v-1c0-1.333 2.667-2 4-2z"
                  />
                </svg>
                <div>
                  <h4 className="font-extrabold text-sm leading-none text-black">
                    Identity-First
                  </h4>
                  <p className="text-xs text-gray-600 mt-1">
                    3,333 unique identities, each a life story the world never
                    told.
                  </p>
                </div>
              </div>
              <div className="bg-[#f0fdf4] border border-black rounded-lg p-3 flex items-start gap-3">
                <svg
                  className="text-green-600 mt-0.5 shrink-0 w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <div>
                  <h4 className="font-extrabold text-sm leading-none text-black">
                    Community-First
                  </h4>
                  <p className="text-xs text-gray-600 mt-1">
                    90% of supply reserved for community.
                  </p>
                </div>
              </div>
              <div className="bg-[#fff1f2] border border-black rounded-lg p-3 flex items-start gap-3">
                <svg
                  className="text-rose-600 mt-0.5 shrink-0 w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                <div>
                  <h4 className="font-extrabold text-sm leading-none text-black">
                    Meaning Over Hype
                  </h4>
                  <p className="text-xs text-gray-600 mt-1">
                    Holding a Nobody is a statement — not a flex, but a belief.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CHARACTER CLASSES */}
          <div className="bg-[#fdfbf7] border-4 border-black rounded-2xl p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-black">
            <h3 className="font-extrabold text-lg uppercase tracking-tight mb-4">
              CHARACTER CLASSES
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 border-b border-gray-100 pb-3">
                <div className="w-12 h-12 rounded-full border-2 border-black shrink-0 flex items-center justify-center bg-orange-500">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-extrabold text-base leading-none text-black">
                    Creator Class
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Characters who create and imagine.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 border-b border-gray-100 pb-3">
                <div className="w-12 h-12 rounded-full border-2 border-black shrink-0 flex items-center justify-center bg-blue-600">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-extrabold text-base leading-none text-black">
                    Builder Class
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Characters who build products and ideas.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 border-b border-gray-100 pb-3">
                <div className="w-12 h-12 rounded-full border-2 border-black shrink-0 flex items-center justify-center bg-green-600">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-extrabold text-base leading-none text-black">
                    Collector Class
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Characters who preserve culture and history.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 border-b border-gray-100 pb-3">
                <div className="w-12 h-12 rounded-full border-2 border-black shrink-0 flex items-center justify-center bg-purple-600">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-extrabold text-base leading-none text-black">
                    Degen Class
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Characters born from internet culture.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border-2 border-black shrink-0 flex items-center justify-center bg-gray-600">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-extrabold text-base leading-none text-black">
                    Worker Class
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    The backbone of the world.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RARITY SYSTEM */}
          <div className="bg-[#fdfbf7] border-4 border-black rounded-2xl p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-black">
            <h3 className="font-extrabold text-lg uppercase tracking-wider mb-4">
              RARITY SYSTEM
            </h3>
            <table className="w-full text-left border-separate text-sm" style={{ borderSpacing: "0 0.3rem" }}>
              <tbody>
                <tr>
                  <td className="border-t border-b border-r border-gray-300 py-2 px-2" style={{ lineHeight: 0 }}>
                    <span className="inline-block font-extrabold rounded border border-black bg-[#4e75f7] text-white px-4 py-1.5 text-xs leading-none align-middle">
                      COMMON
                    </span>
                  </td>
                  <td className="border-t border-b border-r border-gray-300 py-2 px-2 font-extrabold text-right align-middle">
                    60%
                  </td>
                  <td className="border-t border-b border-gray-300 py-2 px-2 align-middle">
                    Standard Frame
                  </td>
                </tr>
                <tr>
                  <td className="border-t border-b border-r border-gray-300 py-2 px-2" style={{ lineHeight: 0 }}>
                    <span className="inline-block font-extrabold rounded border border-black bg-[#42b87e] text-white px-4 py-1.5 text-xs leading-none align-middle">
                      UNCOMMON
                    </span>
                  </td>
                  <td className="border-t border-b border-r border-gray-300 py-2 px-2 font-extrabold text-right align-middle">
                    28%
                  </td>
                  <td className="border-t border-b border-gray-300 py-2 px-2 align-middle">
                    Enhanced Frame
                  </td>
                </tr>
                <tr>
                  <td className="border-t border-b border-r border-gray-300 py-2 px-2" style={{ lineHeight: 0 }}>
                    <span className="inline-block font-extrabold rounded border border-black bg-[#5e5af6] text-white px-4 py-1.5 text-xs leading-none align-middle">
                      RARE
                    </span>
                  </td>
                  <td className="border-t border-b border-r border-gray-300 py-2 px-2 font-extrabold text-right align-middle">
                    11.5%
                  </td>
                  <td className="border-t border-b border-gray-300 py-2 px-2 align-middle">
                    Metallic/Unique BG
                  </td>
                </tr>
                <tr>
                  <td className="border-t border-b border-r border-gray-300 py-2 px-2" style={{ lineHeight: 0 }}>
                    <span className="inline-block font-extrabold rounded border border-black bg-[#b055f6] text-white px-4 py-1.5 text-xs leading-none align-middle">
                      EPIC
                    </span>
                  </td>
                  <td className="border-t border-b border-r border-gray-300 py-2 px-2 font-extrabold text-right align-middle">
                    0.5%
                  </td>
                  <td className="border-t border-b border-gray-300 py-2 px-2 text-xs align-middle">
                    Full Art/Animated
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* MINT DETAILS */}
          <div className="bg-[#fdfbf7] border-4 border-black rounded-2xl p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-black overflow-x-auto [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:bg-gray-400 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-200">
            <h3 className="font-extrabold text-lg uppercase tracking-wider mb-4">
              MINT DETAILS
            </h3>
            <table className="w-full text-left border-separate text-sm" style={{ minWidth: "28rem", borderSpacing: "0 0.3rem" }}>
              <thead>
                <tr className="text-gray-500 font-extrabold text-xs">
                  <th className="pb-2 px-2 text-left">TIER</th>
                  <th className="pb-2 px-2 text-center">PRICE</th>
                  <th className="pb-2 px-2 text-center">WALLETS</th>
                  <th className="pb-2 px-2 text-center">SUPPLY</th>
                  <th className="pb-2 px-2 text-center">ACCESS</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-[#fdf5df] font-semibold">
                  <td className="border-t border-b border-r border-gray-300 py-2 px-2" style={{ lineHeight: 0 }}>
                    <span className="inline-block font-extrabold rounded border border-black bg-[#c5a55a] text-white px-3 py-1.5 text-xs leading-none align-middle">
                      GUARANTEED
                    </span>
                  </td>
                  <td className="border-t border-b border-r border-gray-300 py-2 px-2 text-right">0.0033 ETH</td>
                  <td className="border-t border-b border-r border-gray-300 py-2 px-2 text-right">2,000</td>
                  <td className="border-t border-b border-r border-gray-300 py-2 px-2 font-bold text-right">60%</td>
                  <td className="border-t border-b border-gray-300 py-2 px-2 text-gray-600">Allowlist</td>
                </tr>
                <tr className="bg-[#ecf9f0] font-semibold">
                  <td className="border-t border-b border-r border-gray-300 py-2 px-2" style={{ lineHeight: 0 }}>
                    <span className="inline-block font-extrabold rounded border border-black bg-[#42b87e] text-white px-3 py-1.5 text-xs leading-none align-middle">
                      FCFS
                    </span>
                  </td>
                  <td className="border-t border-b border-r border-gray-300 py-2 px-2 text-right">0.0043 ETH</td>
                  <td className="border-t border-b border-r border-gray-300 py-2 px-2 text-right">1,000</td>
                  <td className="border-t border-b border-r border-gray-300 py-2 px-2 font-bold text-right">30%</td>
                  <td className="border-t border-b border-gray-300 py-2 px-2 text-gray-600 leading-none text-xs">FCFS</td>
                </tr>
                <tr className="bg-[#e8f4fc] font-semibold">
                  <td className="border-t border-b border-r border-gray-300 py-2 px-2" style={{ lineHeight: 0 }}>
                    <span className="inline-block font-extrabold rounded border border-black bg-[#3b82f6] text-white px-3 py-1.5 text-xs leading-none align-middle">
                      PUBLIC
                    </span>
                  </td>
                  <td className="border-t border-b border-r border-gray-300 py-2 px-2 text-right">0.005 ETH</td>
                  <td className="border-t border-b border-r border-gray-300 py-2 px-2 text-right">333</td>
                  <td className="border-t border-b border-r border-gray-300 py-2 px-2 font-bold text-right">10%</td>
                  <td className="border-t border-b border-gray-300 py-2 px-2 text-gray-600">Open</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ROADMAP */}
          <div className="bg-[#f5f0da] border-4 border-black rounded-2xl p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-black">
            <div className="flex items-center gap-4 mb-5">
              <img
                src="/img/roadmap_character.png"
                alt=""
                className="w-16 h-auto border-2 border-black rounded-lg"
              />
              <h3 className="font-extrabold text-2xl text-black">ROADMAP</h3>
            </div>
            <div className="flex flex-col gap-6 pl-4 border-l-2 border-black border-dashed">
              <div>
                <span className="text-xs text-gray-500 font-extrabold block">
                  PHASE 1
                </span>
                <div className="flex items-center gap-3 mt-0.5">
                  <h4 className="font-extrabold text-base text-black">
                    Collection Launch
                  </h4>
                  <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-[#10b981] text-white border border-black uppercase">
                    ACTIVE
                  </span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mt-1">
                  Release of 3,333 hand-crafted identities. Building the founding community of Nobodies.
                </p>
              </div>
              <div>
                <span className="text-xs text-gray-500 font-extrabold block">
                  PHASE 2
                </span>
                <div className="flex items-center gap-3 mt-0.5">
                  <h4 className="font-extrabold text-base text-black">
                    Community & Ecosystem
                  </h4>
                  <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-[#3b82f6] text-white border border-black uppercase">
                    COMING SOON
                  </span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mt-1">
                  Holder-exclusive spaces, collaborations, merchandise, and
                  physical tributes.
                </p>
              </div>
              <div>
                <span className="text-xs text-gray-500 font-extrabold block">
                  PHASE 3
                </span>
                <div className="flex items-center gap-3 mt-0.5">
                  <h4 className="font-extrabold text-base text-black">
                    The Archive
                  </h4>
                  <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-gray-400 text-white border border-black uppercase">
                    FUTURE
                  </span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mt-1">
                  A living record of untold stories. Holders submit the names of
                  their own Nobodies.
                </p>
              </div>
              <div>
                <span className="text-xs text-gray-500 font-extrabold block">
                  PHASE 4
                </span>
                <div className="flex items-center gap-3 mt-0.5">
                  <h4 className="font-extrabold text-base text-black">
                    Expansion
                  </h4>
                  <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-gray-400 text-white border border-black uppercase">
                    FUTURE
                  </span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mt-1">
                  Art drops, physical editions, and partnerships that carry the
                  message beyond Web3.
                </p>
              </div>
            </div>
          </div>

          {/* VALUES */}
          <div className="bg-[#fdfbf7] border-4 border-black rounded-2xl p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-black">
            <h3 className="font-extrabold text-lg uppercase mb-4 text-black">
              VALUES
            </h3>
            <div className="flex flex-col gap-5">
              <div className="flex gap-4 items-start">
                <svg
                  className="text-gray-700 shrink-0 mt-0.5 w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                  />
                </svg>
                <div>
                  <h4 className="font-extrabold text-base leading-none text-black">
                    Invisible Impact
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    The greatest contributions often happen unseen.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <svg
                  className="text-amber-600 shrink-0 mt-0.5 w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
                <div>
                  <h4 className="font-extrabold text-base leading-none text-black">
                    Human-Made Only
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Every card is illustrated by hand. No AI Ever.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <svg
                  className="text-green-600 shrink-0 mt-0.5 w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <div>
                  <h4 className="font-extrabold text-base leading-none text-black">
                    Community First
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    The archive belongs to the community.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <svg
                  className="text-rose-600 shrink-0 mt-0.5 w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                <div>
                    <h4 className="font-extrabold text-base leading-none text-black">
                      Meaning Over Status
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Recognition is optional. Impact is not.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <svg
                  className="text-amber-500 shrink-0 mt-0.5 w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>
                <div>
                  <h4 className="font-extrabold text-base leading-none text-black">
                    Legacy Without Fame
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    The impact lasts longer than the spotlight.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* DEDICATION */}
          <div className="bg-[#fed136] border-4 border-black rounded-2xl p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-black">
            <h3 className="font-extrabold text-2xl text-black mb-2">
              Everyone Has A Nobody.
            </h3>
            <p className="text-sm text-black/85 leading-relaxed">
              A teacher. A parent. A friend. A mentor. Someone whose name may
              never be remembered by history, but whose impact changed a life
              forever.
            </p>
            <p className="font-extrabold text-sm mt-3">
              NOBODIES is dedicated to them.
            </p>
            <a
              href="https://x.com/NobodiesclubNFT"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-extrabold text-sm mt-4 hover:underline"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              x.com/NobodiesclubNFT
            </a>
          </div>
        </div>
      </section>

      <section
        id="collection"
        className="flex flex-col min-h-screen w-full items-center justify-end relative overflow-hidden px-8 md:px-20 pb-8 md:pb-20"
      >
        {/* Desktop background */}
        <div className="hidden md:block absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${bgCollection.src})` }} />
        {/* Mobile background */}
        <div className="block md:hidden absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${collectionMobile.src})` }} />
        {/* Dark gradient overlay for mobile — fades upward */}
        <div className="block md:hidden absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
        <div className="relative z-10 flex flex-col items-center gap-8 w-full">
          <div className="flex flex-row items-center justify-center gap-8 md:justify-between md:gap-8 w-full">
            <img src={leftImage.src} alt="" className="w-3/5 md:w-[28%] h-auto" />
            <img
              src={rightImage.src}
              alt=""
              className="w-2/5 md:w-[20%] md:-mt-20 h-auto"
            />
          </div>
          <button className="w-full md:w-auto bg-[#6d5dac] hover:bg-[#5d4d9c] text-white text-sm md:text-base font-extrabold uppercase tracking-wider py-3 md:py-4 px-8 md:px-16 rounded-full shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-y-[1px] active:shadow-none transition-all cursor-pointer">
            Explore The Collection
          </button>
        </div>
      </section>
    </>
  );
}
