import { Vector as VectorSource } from "ol/source";
import { Feature } from "ol";

interface featureProp {
  features: Feature[] | undefined | any;
}

function vector({ features }: featureProp) {
  return new VectorSource({
    features,
  });
}

export default vector;
