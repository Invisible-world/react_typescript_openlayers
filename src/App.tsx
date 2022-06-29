import React, { useEffect, useState } from "react";
import Map from "./components/Map/Map";
import GlobalStyles from "./global.styled";
import { fromLonLat } from "ol/proj";
import VerticalNav from "./components/VerticalNav/VerticalNav";
import axios, { AxiosResponse } from "axios";
import Sidebar from "./components/Sidebar/Sidebar";
import { LocationType } from "./location-types";
import Layers from "./components/Layers/Layers";
import VectorLayer from "./components/Layers/VecorLayer";
import TileLayer from "./components/Layers/TileLayer";
import { osm, vector } from "./Source";
import { Style, Icon } from "ol/style";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import BlueCircle from "./assests/images/icon1.png";

const App: React.FC = () => {
  const [center, setCenter] = useState([126.9779451, 37.5662952]);
  const [zoom, setZoom] = useState(16);
  const [iconStatus, setIconStatus] = useState(false);
  const [locations, setLocations] = useState<LocationType | null>(null);
  const [features, setFeatures] = useState<any>(null);

  useEffect(() => {
    if (iconStatus) {
      axios
        .get<LocationType>(
          "https://angelswing-frontend-test-serverless-api.vercel.app/api/locations"
        )
        .then((res: AxiosResponse) => {
          addMarkers(res.data.locations);
          setLocations(res.data);
        })
        .catch((err) => console.log(err));
    }
    return () => {
      if (iconStatus) {
        setLocations(null);
      }
    };
  }, [iconStatus]);

  const addMarkers = (lonLatArray: any) => {
    var iconStyle = new Style({
      image: new Icon({
        anchorXUnits: "pixels",
        anchorYUnits: "pixels",
        crossOrigin: "anonymous",
        src: BlueCircle,
        color: "#042f66",
      }),
    });

    let features = lonLatArray?.map((item: any) => {
      const finalItem = [item[1], item[0]];
      let feature = new Feature({
        geometry: new Point(fromLonLat(finalItem)),
      });

      feature.setStyle(iconStyle);
      return feature;
    });
    setFeatures(features);
  };

  return (
    <>
      <GlobalStyles />
      <Map center={fromLonLat(center)} zoom={zoom}>
        <VerticalNav setIconStatus={setIconStatus} />
        <Sidebar location={locations} />
        <Layers>
          <TileLayer source={osm()} />
          {iconStatus && <VectorLayer source={vector({ features })} />}
        </Layers>
      </Map>
    </>
  );
};

export default App;
