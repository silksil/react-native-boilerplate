import { Box as BaseBox } from "@components/Box";
import { Image as BaseImage } from "@components/Image";

import styled from "styled-components/native";

export const Box = styled(BaseBox)`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors["color-secondary-500"]};
`;

export const CallToActionBox = styled(BaseBox)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TextBox = styled.View`
  width: 70%;
`;

export const Image = styled(BaseImage)`
  transform: rotate(10deg);
`;
