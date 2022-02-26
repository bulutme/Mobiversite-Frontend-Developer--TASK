import { Grid } from "@material-ui/core";
import React from "react";
import Content from "./Content";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Users from "./Users";

const Web = () => {
  return (
    <Grid container xs={12}>
      <Grid item xs={12}>
        <Navbar />
      </Grid>
      <Grid item xs={12}>
        <Grid container xs={12}>
          <Grid item xs={4}>
            <Sidebar />
          </Grid>
          <Grid item xs={5}>
            <Content />
          </Grid>
          <Grid item xs={3}>
            <Users />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Web;
