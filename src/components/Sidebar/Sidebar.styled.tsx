import styled from "styled-components";

export const StyledSidebar = styled.div`
  width: 306px;
  height: 720px;
  left: 60px;
  top: 0px;
  background: #fbfbfb;
`;

export const InnerDiv = styled.div`
  width: 306px;
  height: 419px;
  left: 60px;
  top: 0px;
 }
`;

export const LocationWrapper = styled.div`
  width: 180px;
  height: 23px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  margin: auto;
  padding: 2rem;
  display: -webkit-box;
  > img {
    padding: 3px;
  }
  > p {
    margin-left: 8px;
  }
`;

export const LatLangContainer = styled.div`
  width: 33px;
  height: 19px;
  margin-left: 6.01rem;
  > div {
    display: flex;
    padding: 2px;
    > span {
      border: 0.5px solid #c7c7c7;
      border-radius: 5px;
      padding: 2px;
    }
  }
`;
