import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { Grid, Button, Typography } from "@mui/material";
import axios from "../../services/axios";


function TimeData(props) {
  const classes = useStyles();
  const [contact, setContact] = React.useState([]);
  useEffect(() => {
    axios.get("contact").then((res) => {     
      if (res?.data?.statusCode=='200') {
       setContact(res.data.data);       
      } 
    });
  }, []);
  return (
    <Grid container justifyContent="center" className={classes.mainDiv1}>
       {contact.map((data, index) => {
              return (
                <Grid item xs={12} sm={12} md={4} key={index}>
                <div className={data.slug=='store-location'?classes.card1: classes.card}>
                  <img
                    src={data.icon}
                    alt="The Notary Logo"
                    className={classes.imgdata}
                  />
                  <Typography variant="h5" className={classes.data}>
                    {data.description}
                  </Typography>
                  <Typography className={classes.subtitle}>
                    {data.title}
                  </Typography>
                </div>
              </Grid>
              );
            })}     
    </Grid>
  );
}
export default TimeData;


const useStyles = makeStyles((theme) => ({
  subtitle: {
    fontSize: "14px!important",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "8%!important",
      textAlign: "center",
      fontSize: "14px!important",
    },
  },
  imgdata: {
    width: "50px",
  },
  card: {
    color: theme.palette.text.primary,
    backgroundColor: "#FFFFFF",
    borderRadius: "10px",
    textAlign: "center",
    margin: "0% 3%",
    padding: "8%",
    [theme.breakpoints.down("sm")]: {
      margin: "4% 2%",
    },
  },
  card1: {
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.primary.main,
    borderRadius: "10px",
    textAlign: "center",
    margin: "0% 3%",
    padding: "8%",
    [theme.breakpoints.down("sm")]: {
      margin: "4% 2%",
    },
  },
  data: {
    padding: "8% 0% 3% 0%",
    fontFamily: "Almarai-SemiBold !important",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  mainDiv1: {
    padding: "2% 14%",
    backgroundColor: theme.palette.secondary.main,
    [theme.breakpoints.down("sm")]: { padding: "1% 5%" },
  },
}));