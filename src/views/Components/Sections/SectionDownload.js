/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
// core components
import styles from "assets/jss/material-kit-react/views/componentsSections/downloadStyle.js";

const useStyles = makeStyles(styles);

export default function SectionDownload() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer className={classes.textCenter} justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2>Sermons</h2>
            <h4>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Est pellentesque elit ullamcorper dignissim cras tincidunt. Dui faucibus in ornare quam viverra orci sagittis eu. 
            Enim ut tellus elementum sagittis vitae et leo duis. Suspendisse in est ante in nibh mauris cursus mattis molestie.
            Arcu non odio euismod lacinia at. Bibendum ut tristique et egestas quis ipsum. Elit ullamcorper dignissim cras tincidunt lobortis feugiat.
            Habitasse platea dictumst quisque sagittis purus sit amet volutpat consequat.
            </h4>
          </GridItem>
          <GridItem xs={12} sm={8} md={6}>
            <Button
              color="primary"
              size="lg"
              href="#"
              target="_blank"
            >
              Our prayer line
            </Button>
            <Button
              color="primary"
              size="lg"
              href="#"
              target="_blank"
            >
              Our Calendar
            </Button>
          </GridItem>
        </GridContainer>
        <br />
        <br />
        <GridContainer className={classes.textCenter} justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2>Most Recent Story?</h2>
            <h4>
              We{"'"}ve opened{" "}
              <a
                href="#"
                target="_blank"
              >
                New Branch{" "}
              </a>
              a new Living Word Branch in Saldanha, we continue to take an offering during the service for people who prefer to give by cash or check.
              For those who would prefer an online option, we offer online giving through our website, as well as through mobile text.
              The systems make it easy to quickly transfer money from a bank account or debit card to the church safely and securely.
              One-time gifts and recurring withdrawals can both be set up, and gifts can be given either to the church’s general fund or a specific church project.
              If you would like the convenience of “text-to-give,” simply text your gift amount to (636) 249-1114 and follow the prompts.
            </h4>
          </GridItem>
          <GridItem xs={12} sm={8} md={6}>
            <Button
              color="rose"
              size="lg"
              href="#"
              target="_blank"
            >
              Direction
            </Button>
            <Button
              color="rose"
              size="lg"
              href="/login-page"
            >
              Giving
            </Button>
          </GridItem>
        </GridContainer>
        <div className={classes.textCenter + " " + classes.sharingArea}>
          <GridContainer justify="center">
            <h3>Thank you for visiting our church site!</h3>
          </GridContainer>
          <Button color="twitter">
            <i className={classes.socials + " fab fa-twitter"} /> Tweet
          </Button>
          <Button color="facebook">
            <i className={classes.socials + " fab fa-facebook-square"} /> Share
          </Button>
          <Button color="google">
            <i className={classes.socials + " fab fa-google-plus-g"} />
            Share
          </Button>
        </div>
      </div>
    </div>
  );
}
