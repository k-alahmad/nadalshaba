import React, { useEffect, useState } from "react";
import { data } from "../../../../../data/headerData";
import { systemSettings } from "../../../../../settings";
import { useLocation } from "react-router-dom";
const HeaderSlidingText = () => {
  const location = useLocation();
  const [title, setTitle] = useState([]);

  useEffect(() => {
    let pathName =
      location.pathname == "/" ? "en" : location.pathname.substring(1);
    if (pathName) {
      let tempTitle =
        systemSettings.availableLanguages.length > 1
          ? data.titles[2].find((title) => title.lng == pathName).value
          : data.titles[2][0].value;
      setTitle(tempTitle.split(" "));
    }
  }, [data, location.pathname]);

  return (
    <div className="text-9xl bg-transparent text-primary overflow-hidden -mt-[350px] max-md:hidden">
      <p className="animate-textCamera relative whitespace-nowrap py-4">
        {title.map((item, index) => {
          if (index == 1)
            return (
              <span
                key={index}
                className="border-text text-transparent"
              >{` ${item} `}</span>
            );
          else {
            return <span key={index}>{item}</span>;
          }
        })}
      </p>
    </div>
  );
};

export default HeaderSlidingText;
