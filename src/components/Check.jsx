import { team01, team02, team03, team04, team05, team06, arrowUp, arrowRight } from "../assets"
import { useScroll, motion, useTransform, easeInOut } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { getCurrentBreakpoint } from "../utils/breakpoints";

const members = [
  { name: "Bing Wen Tan", title: "Founder", image: team01 },
  { name: "Amanda Goh", title: "New Gen AI", image: team02 },
  { name: "Vincent Teyssier", title: "CTO", image: team03 },
  { name: "Carlos Leyva-Salas", title: "Product Manager", image: team04 },
  { name: "Wendy Po", title: "Ux Designer Lead", image: team05 },
  { name: "Tasha Tan", title: "Ux Designer", image: team06 },
  { name: "Bing Wen Tan", title: "Founder", image: team01 },
  { name: "Amanda Goh", title: "New Gen AI", image: team02 },
  { name: "Vincent Teyssier", title: "CTO", image: team03 },
  { name: "Carlos Leyva-Salas", title: "Product Manager", image: team04 },
  { name: "Wendy Po", title: "Ux Designer Lead", image: team05 },
  { name: "Tasha Tan", title: "Ux Designer", image: team06 },
]

// configurations
const containerHeightMultiplier = 2; //multiplier of window height- the bigger the number, the slower the scrolling
const navbarHeight = 112; // in px, from h-28 in App.jsx
const lpadding = 6;

// setting height/width through tailwind [] arbitrary values seems to be inconsistent
const paddingInPx = lpadding * 4;

const Member = ({ name, title, image }) => (
  <div className={`flex flex-col pl-${lpadding} gap-y-2 text-left`}>
    <img className="h-auto object-cover md:w-72 sm:w-48 w-36" src={image} alt={name} />
    <div>
      <p className="font-semibold">{name}</p>
      <p>{title}</p>
    </div>
  </div>
)

const Check = () => {
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [fullWidth, setFullWidth] = useState(0);



  const updateSizes = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    })
    let imageSize;
    switch (getCurrentBreakpoint()) {
      case "xs":
      case "ss":
        imageSize = 36;
        break;
      case "sm":
        imageSize = 48;
        break;
      default:
        imageSize = 72;
    }
    const imageSizeInPx = imageSize * 4;

    setFullWidth(imageSizeInPx * members.length + paddingInPx * (members.length + 1));
  }

  useEffect(() => {
    window.addEventListener("resize", () => {
      updateSizes();
    });
    updateSizes();
  }, []);

  const containerHeight = dimensions.height * containerHeightMultiplier;
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  })

  const navbarPercent = (dimensions.height - navbarHeight) / dimensions.height / containerHeightMultiplier;

  const y = useTransform(
    scrollYProgress,
    [0, navbarPercent, 1],
    [`0px`, `0px`, `${containerHeight - dimensions.height + navbarHeight}px`]
  )
  const x = useTransform(
    scrollYProgress,
    [navbarPercent, 0.95],
    ["0px", `${-fullWidth + dimensions.width - paddingInPx}px`],
    { ease: easeInOut }
  )

  // const joinUsY = useTransform(scrollYProgress,
  //   [0, 1],
  //   [`${-containerHeight + carouselRef.current.offsetHeight + 144 + navbarHeight}px`, `${-dimensions.height + carouselRef.current.offsetHeight + 48 + navbarHeight}px`])

  return (
    <div className="w-100" style={{ height: `${containerHeight}px` }} ref={containerRef}>
      <motion.div className="block" style={{ maxHeight: `${dimensions.height - navbarHeight}px`, y }}>
        <motion.div className="overflow-x-hidden">
          <h1 className="flex-1 font-poppins font-semibold text-checkShadeDark text-center pb-4">
            Check dubious <span className="text-checkPrimary600">messages</span>
          </h1>
          <motion.div className="flex w-max" style={{ x }}>
            {members.map((member, index) => (
              <Member key={index} {...member} />
            ))}
          </motion.div>
        </motion.div>
        <motion.div>
          <div className="bg-checkBG sm:px-16 px-6 flex justify-center items-center">
            <div className="xl:max-w-[1280px] w-full">

              {/** Text block */}
              <h2 className="text-checkPrimary600 text-left font-bold leading-none tracking-tight inline">
                CheckMate is powered by a crew of multidisciplinary volunteers, who separate facts from fiction with the help of artificial intelligence.
              </h2>

              {/** CTA */}
              <div className="flex flex-row gap-x-6 pt-6">
                <a
                  href="/about"
                  className="cursor-pointer flex flex-row items-center justify-center gap-x-4 bg-checkWhite font-workSans rounded-[50px] px-5 py-4 text-center max-w-sm"
                >
                  <span className="text-checkPrimary600">Learn more</span>
                  <img src={arrowUp} className="fill-checkPrimary600" />
                </a>
                <a
                  href="https://bit.ly/add-checkmate"
                  className="cursor-pointer flex flex-row items-center justify-center gap-x-4 bg-checkPrimary600 font-workSans rounded-[50px] px-5 py-4 text-center max-w-sm"
                >
                  <span className="text-checkWhite">Join as a fact checker</span>
                  <img src={arrowRight} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
};

export default Check;
