import React from "react";

interface LayersProp {
  children: React.ReactNode;
}
const Layers: React.FC<LayersProp> = ({ children }) => {
  return <div>{children}</div>;
};
export default Layers;
