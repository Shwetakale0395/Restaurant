import React from "react";
import mainimg from "../../assets/image/Group 9112.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import { makeStyles } from "@mui/styles";
import { Grid, Button, Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  subtitle1: {
    fontSize: "46px!important",
    fontFamily: "Almarai-Bold!important",
    [theme.breakpoints.down("sm")]: {
      fontSize: "18px!important",
    },
  },

  subtitle3: {
    fontSize: "18px !important",
    padding: "4% 0%",
    color: theme.palette.text.primary,
    fontFamily: "Almarai-regular!important",
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px !important",
    },
  },
  mainDiv2: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    flexDirection: "column!important",
    [theme.breakpoints.down("sm")]: { alignItems: "center" },
  },
  mainDiv: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "column!important",
    [theme.breakpoints.down("sm")]: { padding: "1%", alignItems: "flex-start", },
  },
  mainDiv1: {
    padding: "0% 14%",
    backgroundColor: theme.palette.secondary.main,
    [theme.breakpoints.down("sm")]: { padding: "3% 5%" },
  },
  btn: {
    [theme.breakpoints.down("sm")]: { fontSize: "10px!important", padding: "11px 28px!important", },
  },
}));
export default function AboutUs() {
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <Grid container justifyContent="center" className={classes.mainDiv1}>
      <Grid item xs={6} md={6} sm={6} className={classes.mainDiv}>
        <Typography variant="h3" className={classes.subtitle1}>
          {"Different Spice For A Different Taste"}
        </Typography>
        <Typography className={classes.subtitle3}>
          Lorem ipsum dolor sit amet consectetur adipiscing elit, nulla enim
          posuere quis consequat
        </Typography>
        <Button variant="contained" className={classes.btn}>
          GET STARTED
        </Button>
      </Grid>{" "}
      <Grid item xs={6} sm={6} md={6} className={classes.mainDiv2}>
        <img src={mainimg} alt="" style={{ width: "130%" }} />
      </Grid>
    </Grid>
  );
}
