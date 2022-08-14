import React from "react";
import mainimg from "../../assets/image/Group 9112.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import { makeStyles } from "@mui/styles";
import { Grid, Button, Typography } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
const useStyles = makeStyles((theme) => ({
  subtitle1: {
    fontSize: "40px!important",
    fontFamily: "Almarai-Bold!important",
    [theme.breakpoints.down("sm")]: {
      fontSize: "26px!important",
    },
  },
  subtitle2: {
    fontSize: "20px!important",
    fontFamily: "Almarai-Bold!important",
    color:theme.palette.success.main,
    paddingBottom:'3%',
    [theme.breakpoints.down("sm")]: {
      marginBottom: "8%!important",
      fontSize: "26px!important",
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
  mainDiv: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "column!important",
    [theme.breakpoints.down("sm")]: { padding: "1%", alignItems: "center" },
  },

  mainDiv1: {
    padding: "6% 14%",
    backgroundColor: theme.palette.text.white,
    [theme.breakpoints.down("sm")]: { padding: "16% 5%" },
  },
  mainDiv2: {
    padding: "3% 6%",
    backgroundColor: theme.palette.secondary.main,
    [theme.breakpoints.down("sm")]: { padding: "16% 5%" },
  },
  btn: {
    textTransform: "uppercase",
    borderRadius: "8px !important",
    width: "100%",
  },subdiv:{
    paddingLeft:'6%', [theme.breakpoints.down("sm")]: {   paddingLeft:'0%', },
  }
}));
export default function Payment() {
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <div className={classes.mainDiv1}>
      <Grid container justifyContent="center" className={classes.mainDiv2}>
        <Grid item xs={12} md={6} sm={12} className={classes.mainDiv}>
          <Typography variant="h3" className={classes.subtitle1}>
            {"Receive payments quickly from anywhere"}
          </Typography>
          <Typography className={classes.subtitle3}>
            Why kept very ever home mrs. Considered sympathize ten uncommonly
            occasional assistance sufficient not. Letter of on become he tended
            active enable to.
          </Typography>
        </Grid>{" "}
        <Grid item xs={12} sm={12} md={6} className={classes.subdiv} >
          <Typography variant="h6" className={classes.subtitle2} color="success">
            {"Get Started for Free"}
          </Typography>
          <OutlinedInput placeholder="Name" />
          <OutlinedInput placeholder="Email Address" />
          <OutlinedInput placeholder="Password" />
          <Button variant="contained" className={classes.btn}>
            Get Started
          </Button>
        </Grid>
      </Grid>{" "}
    </div>
  );
}
