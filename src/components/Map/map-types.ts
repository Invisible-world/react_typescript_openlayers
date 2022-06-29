import Map from "ol/Map";

export interface MapProps {
  children: React.ReactNode;
  center: number[];
  zoom: number;
}

export interface IMapContext {
  mapcontext: Map;
}

export interface MapState {
  map: Map;
}
