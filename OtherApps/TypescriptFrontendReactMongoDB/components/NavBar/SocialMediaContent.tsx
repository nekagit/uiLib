import { Link } from "react-router-dom";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface SocialMediaContent {
  item: {
    name: string;
    href: string;
    current: boolean;
  };
}

function SocialMediaContent(props: SocialMediaContent) {
  const { item } = props;
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
      {item.name}
    </Link>
  );
}
export default SocialMediaContent;
