import React, { useContext } from "react";
import Titles from "./Titles";
import { DataContext } from "../context/Context";

const Sidebar = () => {
  const { data, buttonType, setButtonTypeFunc, setSelectedIdFunc } =
    useContext(DataContext);

  return (
    <div className="sideBar">
      <div className="sideBar-top">
        <button
          className={buttonType === 1 ? "borderBottom" : ""}
          onClick={() => setButtonTypeFunc(1)}
        >
          Popular
        </button>
        <button
          className={buttonType === 2 ? "borderBottom" : ""}
          onClick={() => setButtonTypeFunc(2)}
        >
          Recents
        </button>
      </div>
      <div className="sideBar-bottom">
        {data &&
          data.length > 0 &&
          data.map((item) => (
            <div onClick={() => setSelectedIdFunc(item.id)}>
              <Titles
                title={item.title}
                like={item.like}
                dislike={item.dislike}
                comment={item.comments.length}
                date={item.date}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Sidebar;
