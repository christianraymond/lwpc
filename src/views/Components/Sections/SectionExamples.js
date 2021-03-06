import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import landing from "assets/img/landing.jpg";
import profile from "assets/img/profile.jpg";
import SectionDownload from "../Sections/SectionDownload";
import ConferenceAndEvent from "../Sections/ConferenceAndEvent";
import styles from "assets/jss/material-kit-react/views/componentsSections/exampleStyle.js";

const useStyles = makeStyles(styles);

export default function SectionExamples() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={6}>
            <Link to="landing-page" className={classes.link}>
              <img
                src={landing}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />
              <Button color="primary" size="lg" simple>
                Read more
              </Button>
            </Link>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Link to="profile-page" className={classes.link}>
              <img
                src={profile}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />
              <br></br>
              <br></br>
              <p style={{fontSize: '16px', color: '#b8860b'}}>
                "I'm so excited to welcome you at the Living word pentecostal
                Church. I know you'll leave better than you walked in! Each of
                our services is 90 minutes long, The parking is always availabe
                and free, Our ushers will direct you into the sanctuary and find
                you and your guests a perfect seat."
              </p>
              <p style={{fontSize: '16px', color: '#b8860b'}}>- David Kashema</p>
              <Button color="primary" size="lg" simple>
                Read more
              </Button>
            </Link>
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <SectionDownload />
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <ConferenceAndEvent />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
