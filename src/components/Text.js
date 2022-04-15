import { Text as BaseText } from "@ui-kitten/components";
import styled from "styled-components/native";
import {
  color,
  flexbox,
  layout,
  position,
  space,
  typography,
  border,
} from "styled-system";

export const Text = styled(BaseText)`
  ${border}
  ${space}
  ${layout}
  ${typography}
  ${position}
  ${flexbox}
  ${color}

  text-decoration-line:${({ textDecorationLine }) =>
    textDecorationLine ? textDecorationLine : "none"};
`;
