import { Button as BaseButton } from "@ui-kitten/components";

import styled from "styled-components/native";
import {
  space,
  border,
  layout,
  position,
  flexbox,
  color,
  typography,
} from "styled-system";

export const Button = styled(BaseButton)`
  ${space}
  ${border}
  ${layout}
  ${position}
  ${flexbox}
  ${color}
  ${typography}
`;
