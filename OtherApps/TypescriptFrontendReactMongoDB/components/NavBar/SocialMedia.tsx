import { Disclosure } from "@headlessui/react";
import { animated } from "@react-spring/web";
import React, { useState } from "react";
import SocialMediaContent from "./SocialMediaContent";

const navigation = [
  { name: "Willkommen", href: "/", current: false },
  { name: "AboutUs", href: "/aboutUs", current: false },
  { name: "Kurse", href: "/course", current: false },
  { name: "Kontakt", href: "/contact", current: false },
];

function SocialMedia() {
  const [visible, setVisible] = useState(false);

  return (
    <Disclosure as="nav">
      {() => (
        <animated.div
          style={{
            color: !visible ? "white" : "rgb(68,68,69)",
            background: !visible ? "rgb(60,60,60)" : "white",
            transition: "3s background",
          }}
          onMouseEnter={() => setVisible(true)}
          onMouseLeave={() => setVisible(false)}
        >
          <div className="flex-row">
            {navigation.map((item) => (
              <SocialMediaContent
                key={item.name}
                item={item}
              />
            ))}
          </div>
          <SocialMedia />
        </animated.div>
      )}
    </Disclosure>
  );
}
export default SocialMedia;
