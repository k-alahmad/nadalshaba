import React, { useEffect, useState } from "react";
import { data } from "../../../../../data/headerData";
import { systemSettings } from "../../../../../settings";
import { useLocation } from "react-router-dom";
const HeaderSlidingText = () => {
  const location = useLocation();
  const [title, setTitle] = useState([]);

  useEffect(() => {
    let tempTitle =
      systemSettings.availableLanguages.length > 1
        ? data.titles[2].find(
            (title) => title.lng == location.pathname.substring(1)
          )?.value
        : data.titles[2][0].value;

    let headerTitle = tempTitle?.split(" ");

    setTitle(headerTitle);
  }, []);

  return (
    <div className="text-9xl bg-transparent text-primary overflow-hidden  -mt-[350px] max-md:hidden">
      <p className="animate-textCamera relative whitespace-nowrap py-4">
        {title[0]}
        <span className="border-text text-transparent">{` ${title[1]} `}</span>
        {title[2]}
      </p>
    </div>
  );
};

export default HeaderSlidingText;
