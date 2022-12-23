import React from "react";
import { ImHome } from "react-icons/im";
import { MdVideoCameraBack } from "react-icons/md";
import { BiLibrary } from "react-icons/bi";
import { AiOutlineFile } from "react-icons/ai";
import { BsSkipEndFill } from "react-icons/bs";
import SideBtn from "./SideBtn";

const Sidebar = () => {
  const sideItems = [
    { name: "Main", icon: <ImHome /> },
    { name: "Mini", icon: <MdVideoCameraBack /> },
    { name: "Channels", icon: <AiOutlineFile /> },
    { name: "Collection", icon: <BiLibrary /> },
    { name: "Past", icon: <BsSkipEndFill /> },
  ];

  return (
    <div>
      {sideItems.map((item, id) => (
        <SideBtn key={id} name={item.name} icon={item.icon} />
      ))}
    </div>
  );
};

export default Sidebar;
