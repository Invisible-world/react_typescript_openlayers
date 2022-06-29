import styled from "styled-components";

interface NavProps {
  imageProps?: ImageProps;
}
interface ImageProps {
  active?: boolean;
  onClick?: (e: React.MouseEvent<HTMLImageElement>, id: number) => void;
  src?: string;
  key?: number;
  alt?: string;
}

export const Nav = styled("div")<NavProps>`
  position: absolute;
  width: 60px;
  height: 720px;
  left: 0px;
  top: 0px;
  background: #ffffff;
  box-shadow: 0px 0.6px 1.8px rgba(0, 0, 0, 0.1);
`;

export const IconWrapper = styled("img")<ImageProps>`
  width: 44px;
  height: 44px;
  left: 8px;
  top: 8px;
  border-radius: 5px;
  margin-top: 10px;
  margin-left: 6px;
  padding: 1rem;
  background: ${(props) => (props.active ? "#1f4782" : "")};
  &:hover {
    cursor: pointer;
  }
`;
