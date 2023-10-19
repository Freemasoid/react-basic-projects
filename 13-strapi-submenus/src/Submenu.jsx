import React from "react";
import sublinks from "./data";
import { useGlobalContext } from "./Context";
import { useRef } from "react";

function Submenu() {
  const { pageID, setPageID } = useGlobalContext();

  const currentPage = sublinks.find((item) => item.pageID === pageID);
  const handleMouseLeave = (e) => {
    setPageID(null);
  };

  return (
    <div
      className={currentPage ? "submenu show-submenu" : "submenu"}
      onMouseLeave={handleMouseLeave}
    >
      <h5>{currentPage?.page}</h5>
      <div
        className="submenu-links"
        style={{
          gridTemplateColumns: currentPage?.links?.length > 3 ? "1fr 1fr" : "1fr",
        }}
      >
        {currentPage?.links?.map((link) => {
          const { id, url, label, icon } = link;
          return (
            <a href={url} key={id}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Submenu;
