import { Grid } from "@material-ui/core";
import React from "react";
import ImdbLogo from "../assests/images/imdbLogo.png";
import { ReactComponent as SearchLogo } from "../assests/images/search.svg";
import UserImage from "./UserImage";

const Navbar = () => {
  return (
    <Grid container xs={12} className="navbar">
      <Grid item xs={4} className="navbar-logo">
        <img src={ImdbLogo} alt="" />
      </Grid>
      <Grid item xs={5} className="navbar-search">
        <SearchLogo className="navbar-search-logo" />
        <input className="navbar-search-input" />
        <UserImage />
      </Grid>
    </Grid>
  );
};

export default Navbar;
