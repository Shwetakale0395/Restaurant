import { createStyles, makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  footer: {
    backgroundColor: "#000000",
  },
  link: {
    fontFamily: "Almarai-Regular",
    fontSize: "16px",
    color: theme.palette.text.white,
    paddingBottom: "6%",
  },
  link1: {
    fontFamily: "Almarai-Regular",
    fontSize: "18px",
    color: theme.palette.text.primary,
    paddingBottom: "6%",
  },
  title: {
    color: "rgba(30, 255, 228, 1)",
    background: "linear-gradient(73.62deg, #00C1AA 1.49%, #0ABF68 137.45%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontFamily: "Almarai-Regular !important",
  },
  socialMedia: {
    paddingTop: "6%",
    paddingTop: "37%",
    fontSize: "20px",
    color: "rgba(229, 229, 229, 1)",
  },
  border: {
    borderTop: "0.8px Solid rgba(234, 234, 234, 0.17)",
  },
  copyRight: {
    padding: "2% 5%",
    padding: "1% 0%",
    display: "flex",
    alignItems: "center",
    fontSize: "16px",
    color: "rgba(255, 255, 255, 0.49)",
  },
}));
