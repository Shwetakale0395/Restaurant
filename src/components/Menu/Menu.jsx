import React, { useState, useRef, useEffect } from "react";
import axios from "../../services/axios";
import { makeStyles } from "@mui/styles";
import { Grid, Button, Typography } from "@mui/material";
import Slider from "react-slick";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "bootstrap/dist/css/bootstrap.min.css";
import ChevronLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ChevronRightIcon from '@mui/icons-material/ArrowCircleRight';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
export default function Menu() {
  const classes = useStyles();
  const [value, setValue] = React.useState("pizza");
  const [categories, setCategories] = React.useState([]);
  const [menuData, setMenu] = React.useState([]);
  var componentRef = useRef();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    axios.get("category").then((res) => {
      if (res?.data?.statusCode == "200") {
        setCategories(res.data.data);
      }
    });
  }, []);

  useEffect(() => {
    debugger;
    axios.get(`category/${value}`).then((res) => {
      if (res?.data?.statusCode == "200") {
     
        setMenu(res.data.data);
      }
    });
  }, [value]);
  var settings = {
    infinite: menuData.length > 4 ? true : false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: menuData.length > 4 ? true : false,
        },
      },
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: menuData.length > 3 ? true : false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: menuData.length > 2 ? true : false,
        },
      },
      {
        breakpoint: 568,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: menuData.length > 1 ? true : false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: menuData.length > 1 ? true : false,
        },
      },
    ],
  };

  return (
    <div className={classes.mainDiv1}>
      <Grid container justifyContent="start">
        <Grid item xs={12} md={7} sm={12} className={classes.mainDiv}>
          <Typography variant="h3" className={classes.subtitle1}>
            {"Our Popular Menu"}
          </Typography>
          <Typography className={classes.subtitle3}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            imperdiet tempus dolor sed auctor. Volutpat facilisi in imperdiet
            quam penatibus ut.
          </Typography>
        </Grid>
        <Grid item xs={12} md={12} sm={12}>
          <Tabs id="controlled-tab-example" className="mb-3"    activeKey={value}
      onSelect={(k) => setValue(k)}>
            {categories.map((item, index) => {
              return (
                <Tab
                  key={index}
                  eventKey={item.slug}
                  title={
                    <span className={classes.tab}>
                      <img src={item.icon} className={classes.icon} />
                      {item.name}
                    </span>
                  }
                ></Tab>
              );
            })}
          </Tabs>
          <Slider
           
            {...settings}
            ref={(el) => (componentRef = el)}
            style={{ margin: "0%" }}
          >
            {menuData.map((data, index) => {
              return (                
                  <div className={classes.card}>
                    <img
                      src={data.image}
                      alt="The Notary Logo"
                      className={classes.imgdata}
                    />
                    <div className={classes.maindiv}>
                    <Typography variant="h5" className={classes.data}>
                      {data.title}
                    </Typography>
                    <p style={{whiteSpace:'nowrap',marginBottom:'0px'}}><Typography className={classes.subtitle} component="span" color="primary">
                      {data.currency }
                    </Typography>
                    <Typography component="span" className={classes.subtitle}>
                      {" " + data.price}
                    </Typography>
                    </p>
                    
                    <Button className={classes.btn}  endIcon={<ShoppingCartIcon />}>Add to Cart</Button>
                    </div>
               
                  </div>               
              );
            })}
          </Slider>
        </Grid>
      </Grid>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  tab: {
    color: theme.palette.text.black,
    whiteSpace: "nowrap",
  },
  btn:{
    color: '#6d6d6f !important',
  },
 maindiv: {backgroundColor:'#f6f1e7',
    color: '#6d6d6f',
    padding: '6%'
  },
  subtitle1: {
    fontSize: "40px!important",
    fontFamily: "Almarai-SemiBold!important",
    [theme.breakpoints.down("sm")]: {
      fontSize: "26px!important",
    },
  },
  imgdata: {
    width: '100%',
    objectFit: 'cover',
    height: '30vh',
    borderTopLeftRadius: '12px',
    borderTopRightRadius: '12px'
  },
  card: {   
    color: theme.palette.text.primary,
    backgroundColor: "#FFFFFF",
    borderRadius: "10px",
    margin: "0% 3%",
    paddingRight: "8%",
    [theme.breakpoints.down("sm")]: {
      margin: "4% 2%",
    },
  },
  subtitle2: {
    fontSize: "20px!important",
    fontFamily: "Almarai-Bold!important",
    color: theme.palette.success.main,
    paddingBottom: "3%",
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
    justifyContent: "start",
    alignItems: "flex-start",
    flexDirection: "column!important",
    [theme.breakpoints.down("sm")]: { padding: "1%", alignItems: "center" },
  },

  mainDiv1: {
    padding: "0% 14%",paddingBottom: '5%',
    backgroundColor: theme.palette.text.white,
    [theme.breakpoints.down("sm")]: { padding: "1% 5%" },
  },

  subdiv: {
    paddingLeft: "6%",
    [theme.breakpoints.down("sm")]: { paddingLeft: "0%" },
  },
  icon: {
    width: "32px",
    marginRight: "8%",
  },
}));
