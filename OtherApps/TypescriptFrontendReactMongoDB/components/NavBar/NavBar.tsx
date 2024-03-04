import { Disclosure } from "@headlessui/react";
import { animated } from "@react-spring/web";
import { useState } from "react";
import NavBarContent from "./NavBarContent";
import SocialMediaContent from "./SocialMediaContent";

const navigation = [
  { name: "Glavna", href: "/index", current: false, isNav: true },
  // { name: "Sport", href: "/sport", current: false, isNav: true },
  // { name: "Skola", href: "/school", current: false, isNav: true },
  // { name: "Galerija", href: "/gallery", current: false, isNav: true },
  // { name: "Kontakt", href: "/contact", current: false, isNav: false },
  // { name: "Sportski Dani", href: "/sport/sportDays", current: false, isNav: false}
];

function NavBar() {
  const [visible, setVisible] = useState(false);
  const [nav, setNav] = useState(navigation);

  function handleActive(name: string) {
    console.log(nav);
    setNav((prevNav) =>
      prevNav.map((item) => ({
        ...item,
        current: item.name === name,
      }))
    );
  }
  return (
    <Disclosure as="nav">
      {() => (
        <animated.div
          style={{
            color: !visible ? "white" : "rgb(68,68,69)",
            background: !visible ? "rgb(60,60,60)" : "white",
            transition: "3s background",
            opacity: !visible ? 0 : 1,
          }}
          onMouseEnter={() => setVisible(true)}
          onMouseLeave={() => setVisible(false)}
        >
          <div className="flex-row">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.isNav ? (
                  <NavBarContent
                    key={item.name}
                    item={item}
                    handleActive={handleActive}
                  />
                ) : (
                  <SocialMediaContent key={item.name} item={item} />
                )}
                <br />
              </div>
            ))}
          </div>
        </animated.div>
      )}
    </Disclosure>
  );
}
export default NavBar;
