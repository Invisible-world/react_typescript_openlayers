import React from "react";
import { IMapContext } from "./map-types";

const MapContext = React.createContext<
  IMapContext | void | object | undefined | any
>(undefined);

export default MapContext;
