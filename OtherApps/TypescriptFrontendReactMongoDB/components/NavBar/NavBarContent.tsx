import { Link } from "react-router-dom";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface NavBarContent {
  item: {
    name: string;
    href: string;
    current: boolean;
  };
  handleActive: (name: string) => void;
}

function NavBarContent(props: NavBarContent) {
  const { item, handleActive } = props;
  return (
    <Link
      key={item.name}
      className={classNames(
        item.current
          ? "bg-black-900 text-red-600"
          : "hover:bg-gray-700 hover:text-white",
        "rounded px-1"
      )}
      to={item.href}
    >
      <button
        onClick={() => {
          handleActive(item.name)
        }}
      >
        {item.name}
      </button>
    </Link>
  );
}
export default NavBarContent;
