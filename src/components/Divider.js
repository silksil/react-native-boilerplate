import styled from "styled-components/native";
import { layout, space } from "styled-system";

export const Divider = styled.View`
  width: 100%;
  border-bottom-color: ${({ theme }) =>
    theme.colors["background-basic-color-3"]};
  border-bottom-width: 1px;
  ${space};
  ${layout};
`;
