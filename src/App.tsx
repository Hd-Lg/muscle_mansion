import { Navbar } from "@/components";
import { useEffect, useState } from "react";
import { SelectedPage } from "./utils/types";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [topOfPage, setTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      // Check if at top of page, assign page position to state for menu color.
      if (window.scrollY === 0) {
        setTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      } else {
        setTopOfPage(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Clean up of useEffect
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="app bg-dark-20">
      <Navbar
        topOfPage={topOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
    </div>
  );
}

export default App;
