import React from "react";

function Heading({ title }: { title: string }) {
  return (
    <h1 className="block mb-4 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gradientL to-gradientR w-fit">
      {title}
    </h1>
  );
}

export default Heading;
