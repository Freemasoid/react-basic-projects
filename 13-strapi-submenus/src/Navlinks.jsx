import React from "react";
import sublinks from "./data";
import { useGlobalContext } from "./Context";

function Navlinks() {
  const { setPageID } = useGlobalContext();

  return (
    <div className="nav-links">
      {sublinks.map((item) => {
        const { pageID, page } = item;
        return (
          <button
            key={pageID}
            className="nav-link"
            onMouseEnter={() => setPageID(pageID)}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
}

export default Navlinks;
