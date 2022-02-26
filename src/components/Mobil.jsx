import { Drawer, Grid, makeStyles } from "@material-ui/core";
import React, { useState, useContext, useEffect } from "react";
import Content from "./Content";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { DataContext } from "../context/Context";

const useStyles = makeStyles((theme) => ({
  sidebar: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      width: "80%",
    },
  },
}));

const Mobil = () => {
  const { isFalse, setIsFalse } = useContext(DataContext);
  const classes = useStyles();
  const [sidebarVisibility, setSidebarVisibility] = useState(false);
  const handleClickOpen = () => {
    setSidebarVisibility(true);
    setIsFalse(false);
  };

  const handleCloseDrawer = () => {
    setSidebarVisibility(false);
  };
  useEffect(() => {
    setSidebarVisibility(isFalse ? false : true);
  }, [isFalse]);

  return (
    <div className="mobil-content">
      <Grid container xs={12}>
        <Grid item xs={12}>
          <Navbar />
        </Grid>
        <Grid item xs={12}>
          <Grid container xs={12}>
            <Content />
            {sidebarVisibility ? (
              <Drawer
                PaperProps={{ className: classes.sidebar }}
                anchor="left"
                open={sidebarVisibility}
                onClose={() => handleCloseDrawer()}
              >
                <Sidebar />
              </Drawer>
            ) : (
              <div className="mobil-menu-icon" onClick={handleClickOpen}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z" />
                </svg>
              </div>
            )}
          </Grid>
          {/* <Grid item xs={3}>
          <Users />
        </Grid> */}
        </Grid>
      </Grid>
    </div>
  );
};

export default Mobil;
