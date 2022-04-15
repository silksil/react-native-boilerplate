const boxShadowSizes = {
  s: {
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: "0.22",
    shadowRadius: "2px",
    elevation: "3",
  },
  m: {
    shadowOffset: {
      width: "1",
      height: "1",
    },
    shadowOpacity: "0.39",
    shadowRadius: "8px",
    elevation: "13",
  },
};

const boxShadowColor = {
  backgroundBasicLight: "#455f7f",
  backgroundBasicDark: "rgba(255, 255, 255, 0.25)",
  primary: "#000",
  secondary: "#000",
};

const brandColorsBoxShadowStyling = {
  basic: {
    s: {
      shadowColor: boxShadowColor.primary,
      ...boxShadowSizes.s,
    },
    m: {
      shadowColor: boxShadowColor.primary,
      ...boxShadowSizes.m,
    },
  },
};

const boxShadow = {
  light: {
    backgroundBasic: {
      s: {
        shadowColor: boxShadowColor.backgroundBasicLight,
        ...boxShadowSizes.s,
      },
      m: {
        shadowColor: boxShadowColor.backgroundBasicLight,
        ...boxShadowSizes.m,
      },
    },
    ...brandColorsBoxShadowStyling,
  },
  dark: {
    backgroundBasic: {
      s: {
        shadowColor: boxShadowColor.backgroundBasicDark,
        ...boxShadowSizes.s,
      },
      m: {
        shadowColor: boxShadowColor.backgroundBasicDark,
        ...boxShadowSizes.m,
      },
    },
    ...brandColorsBoxShadowStyling,
  },
};

export { boxShadow };
