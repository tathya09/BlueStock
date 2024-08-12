import React from "react";
import { Helmet } from "react-helmet";


// Import components from the components folder
import Input from '';
import Img from './Img.js';
import Text from "./Text.js";
import { Button } from "./button.js";


// You may need to adjust the import paths depending on where the components are located in the `components` folder.

export default function IPOUpcomingScreenPage() {
  const [collapsed, setCollapsed] = React.useState(false);
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);
  const [searchBarValue, setSearchBarValue] = React.useState("");

  const collapseSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <Helmet>
        <title>IPO Dashboard - Track and Manage Upcoming IPOs | Bluestock</title>
        <meta
          name="description"
          content="Efficiently manage and track upcoming IPOs with our comprehensive IPO Dashboard. Register, subscribe, and stay updated with the latest IPOs."
        />
      </Helmet>
      <div className="relative h-[960px] w-full overflow-auto bg-white-a700 md:h-auto">
        <div className="mt-4 flex flex-1 flex-col gap-[46px]">
          <header className="mx-[38px] flex items-center justify-between gap-5 md:mx-0 md:flex-col">
            <Input
              name="Search Bar"
              placeholder="Search"
              value={searchBarValue}
              onChange={(e) => setSearchBarValue(e.target.value)}
              suffix={
                searchBarValue?.length > 0 ? (
                  <h1 onClick={() => setSearchBarValue("")} height={12} width={12} fillColor="#627b87ff" />
                ) : (
                  <Img src="images/img_rewind.svg" alt="Rewind" className="h-[12px] w-[12px] cursor-pointer" />
                )
              }
              className="ml-60 flex h-[32px] w-[56%] items-center justify-center gap-4 rounded-[5px] bg-gray-100 px-3.5 text-[12px] tracking-[0.50px] text-blue_gray-900"
            />
            <div className="flex w-[18%] items-center justify-center md:w-full md:px-5">
              <Text size="textlg" as="p" className="h-[32px] w-[32px] rounded-[16px] bg-yellow-100 py-0.5 pl-2 pr-3 tracking-[0.50px] !text-white-a700">
                V
              </Text>
              <div className="ml-3 flex flex-1 justify-between gap-5 self-end">
                <Text as="p" className="tracking-[0.50px] !text-blue_gray-900">
                  Hi, Vishal
                </Text>
                <Img src="images/img_arrow_down.svg" alt="Dropdown Arrow" className="h-[20px] w-[20px]" />
              </div>
              <div className="ml-8 flex h-[16px] w-[8%] flex-col items-end bg-[url(/public/images/img_group_6.svg)] bg-cover bg-no-repeat md:h-auto">
                <div className="mb-2.5 h-[6px] w-[6px] rounded-[3px] border-[1.2px] border-solid border-white-a700 bg-red-400" />
              </div>
            </div>
          </header>
          {/* Rest of your component */}
        </div>
      </div>
    </>
  );
}

