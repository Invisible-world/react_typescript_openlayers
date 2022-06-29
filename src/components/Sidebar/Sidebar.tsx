import React from "react";
import {
  StyledSidebar,
  InnerDiv,
  LocationWrapper,
  LatLangContainer,
} from "./Sidebar.styled";
import Flag from "../../assests/images/Marker.png";
import { LocationType } from "../../location-types";

const Sidebar: React.FC<LocationType | any> = ({ location }) => {
  return (
    <StyledSidebar>
      <InnerDiv>
        {location &&
          location?.locations?.map((loc: any, id: number) => (
            <React.Fragment key={loc[0]}>
              <LocationWrapper>
                <img src={Flag} alt={"marker"} />
                <p>Location {`${id + 1}`}</p>
              </LocationWrapper>
              <LatLangContainer>
                <div>
                  Lat:<span>{loc[0]}</span>
                </div>
                <div>
                  Lang:<span>{loc[1]}</span>
                </div>
              </LatLangContainer>
              <br />
            </React.Fragment>
          ))}
      </InnerDiv>
    </StyledSidebar>
  );
};

export default Sidebar;
