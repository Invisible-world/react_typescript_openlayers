import { useContext, useEffect } from "react";
import MapContext from "../Map/MapContext";
import OLVectorLayer from "ol/layer/Vector";
import { LayerProp } from "./Layers-types";

const VectorLayer: React.FC<LayerProp> = ({ source, zIndex = 0 }) => {
  const map = useContext(MapContext);
  useEffect(() => {
    if (!map) return;
    let vectorLayer = new OLVectorLayer({
      source,
    });
    map?.addLayer(vectorLayer);
    vectorLayer.setZIndex(zIndex);
    return () => {
      if (map) {
        map.removeLayer(vectorLayer);
      }
    };
  }, [source]);
  return null;
};
export default VectorLayer;
