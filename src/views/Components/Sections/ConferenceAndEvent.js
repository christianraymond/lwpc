import React from "react";
import Parallax from "components/Parallax/Parallax.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "../../../components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/components.js";
import { makeStyles } from "@material-ui/core/styles";
import "assets/css/main.scss";

const useStyles = makeStyles(styles);

export default function SectionDownload() {
  const classes = useStyles();

  return (
    <div className="hero-image1">
      <div className="hero-text1">
        <h2>Conferences & Events</h2>
        <h4>Championing the cause of local churches everywhere.</h4>
        <p>
          We have exciting events of different reanges, from weddings,
          conference, baptism and many other great events that we'd love to see
          you joining
        </p>
        <Button
          color="danger"
          size="lg"
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-play" />
          Watch video
        </Button>
      </div>
      <Parallax>
        <div className={classes.container}>
          <GridContainer>
            <GridItem></GridItem>
          </GridContainer>
        </div>
      </Parallax>
    </div>
  );
}
