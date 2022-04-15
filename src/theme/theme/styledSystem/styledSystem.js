import { boxShadow } from "./boxShadow";
import { componentSizes } from "./componentSizes";
import { fontSizes } from "./fontSizes";

const styledSystem = {
  bookCoverHeightToWidthRatio: 0.625,
  bookCoverWidthToHeightRatio: 1.5,
  boxShadow,
  ...componentSizes,
  radii: {
    s: 8,
    m: 16,
    l: 24,
    xl: 100,
  },
  space: {
    xss: 2,
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
    xxl: 68,
  },
  fontWeights: {
    normal: 400,
    bold: "700",
    lighter: "200",
  },
  fontSizes,
  iconSize: {
    s: {
      width: 16,
      height: 16,
    },
    m: {
      width: 24,
      height: 24,
    },
    l: {
      width: 32,
      height: 32,
    },
    xl: {
      width: 48,
      height: 48,
    },
  },
};

export { styledSystem };
