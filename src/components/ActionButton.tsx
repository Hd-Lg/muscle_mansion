import { SelectedPage } from "@/utils";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
      href={`#${SelectedPage.ContactUs}`}
      className="cursor-pointer rounded-md bg-gray-500 px-10 py-2 hover:bg-gray-800 hover:text-white"
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
