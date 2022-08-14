import React, { useRef } from "react";
import { makeStyles } from "@mui/styles";
import { Grid, Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  title: {
    color: "#828282 !important",
    fontSize: "12px !important",
  },

  mainDiv: {
    display: "flex !important",
    justifyContent: "center!important",
    alignItems: "center!important",
    padding: "1.25% 8%!important",
    backgroundColor: "#f6f1e7",
    flexDirection: "column !important",
  },
}));
function Footer() {
  const classes = useStyles();

  return (
    <footer >
      <Grid container className={classes.mainDiv}>
        <Grid item xs={12} sm={12} md={12}>
          <Typography className={classes.title}>
            {"Copyright @ 2022 abcd. All Right Reserved."}
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
}

export default Footer;
