import React from "react";
import { useRef } from "react";
import Babba from "./Babba";
function Foreground() {
  const ref=useRef(null);
    const data = [
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      filesize: ".9 mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      filesize: ".9 mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      filesize: ".9 mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Upload", tagColor: "white" },
    },
  ];

  return (
    <div  ref={ref} className="fixed top-0 left-0 z-[3] flex gap-10 flex-wrap p-6 w-full h-screen ">
      {data.map((item, index) => (
        <Babba data={item} reference={ref} />
      ))}
    </div>
  );
}

export default Foreground;
