import React from "react";
import Card from "./Card";
import Form from "./Form";

function Foreground() {
  return (
    <div>
      <div className=" flex justify-between fixed top-0 left-0  z-[3] w-full h-full p-5">
        <Form />
      </div>
    </div>
  );
}

export default Foreground;
