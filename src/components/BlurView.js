import { BlurView as BaseBlurView } from "expo-blur";
import styled from "styled-components/native";
import { space, layout, position } from "styled-system";

export const BlurView = styled(BaseBlurView)`
  ${space}
  ${layout}
  ${position}
`;
