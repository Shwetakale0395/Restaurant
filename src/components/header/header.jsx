import React, { useEffect, useState, useRef } from "react";
import {
  Grid,
  Button,
  IconButton,
  ListItemButton,
  Tabs,
  Tab,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import Logo from "../../assets/image/Logo with text.png";

const useStyles = makeStyles((theme) => ({
  header: {
    padding: "1.5% 14%",
    backgroundColor: theme.palette.secondary.main,
    color: "#E5E5E5",
    [theme.breakpoints.down("sm")]: { padding:'3%', },
  },
  img:{
    width: "60%", [theme.breakpoints.down("sm")]: {  width: "40%" },
  }
}));

const Header = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState("Home");

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      className={classes.header}
    >
      <Grid item xs={6} md={2} className={classes.div1}>
        <img src={Logo} alt="The Notary Logo" className={classes.img} />
      </Grid>
      <Grid
        item
        xs={2}
        md={4}
        className={classes.div2}
        sx={{
          display: { xs: "none", sm: "none", md: "flex" },
          justifyContent: "flex-end",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="primary"
          aria-label="secondary tabs example"
        >
          <Tab value="Home" label="Home" />
          <Tab value="Form" label="Form" />
          <Tab value="Menu" label="Menu" />
        </Tabs>
      </Grid>
      <Grid
        item
        xs={6}
        md={6}
        className={classes.div2}
        sx={{
          display: "flex", justifyContent: "flex-end",
        }}
      >
        <IconButton aria-label="cart">
          <Badge badgeContent={4} color="success">
            <ShoppingCartIcon color="action" />
          </Badge>
        </IconButton>
        <Button
          variant="contained"
          sx={{ padding: "8px 24px", borderRadius: "16px",marginLeft:'5%' }}
        >
          Log In
        </Button>
      </Grid>
    </Grid>
  );
};

export default Header;
