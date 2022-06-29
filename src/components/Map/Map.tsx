import React, { useState, useRef, useEffect } from "react";
import { StyledMap } from "./Map.styled";
import MapContext from "./MapContext";
import * as ol from "ol";
import { MapProps, MapState } from "./map-types";

const Map: React.FC<MapProps> = ({ children, center, zoom }) => {
  const mapRef = useRef<HTMLDivElement | null | any>(null);
  const [map, setMap] = useState<MapState | object>();
  useEffect(() => {
    let options = {
      view: new ol.View({ zoom, center }),
      layers: [],
      controls: [],
      overlays: [],
    };
    let mapObject = new ol.Map(options);
    mapObject.setTarget(mapRef.current);
    setMap(mapObject);
    return () => mapObject.setTarget(undefined);
  }, []);

  return (
    <MapContext.Provider value={map}>
      <StyledMap ref={mapRef}>{children}</StyledMap>
    </MapContext.Provider>
  );
};

export default Map;
