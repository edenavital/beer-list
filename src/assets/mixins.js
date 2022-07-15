const genericFlexCenter = {
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
};

export const MIXINS = {
  genericWrapper: {
    ...genericFlexCenter,
    width: "100%",
    height: "100%",
    flexDirection: "column",
  },
  genericFlex: {
    ...genericFlexCenter,
  },
  textEllipsis: {
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
};
