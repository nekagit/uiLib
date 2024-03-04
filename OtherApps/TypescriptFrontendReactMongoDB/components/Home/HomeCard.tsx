import { Controller, animated, useSpring } from "@react-spring/web";
import { useState } from "react";

function HomeCard() {
  const [isShowing, setIsShowing] = useState(false);
  const animations = new Controller({ opacity: 0 });

  const handleOnEnter = () => {
    animations.start({ opacity: isShowing ? 1 : 0 });
    setIsShowing(!isShowing);
  };

  const divImgSpring = useSpring({
    transform: "scaleX(0.90)",
    config: { duration: 2000 },
    from: {
      transform: "scaleX(0.85)",
    },
  });

  return (
    <>
      <animated.div
        style={{ ...divImgSpring }}
        className="borderDiv rounded"
        onMouseEnter={handleOnEnter}
      />
      <animated.div className="HomeCard" />
    </>
  );
}
export default HomeCard;
