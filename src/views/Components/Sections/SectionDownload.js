import React from 'react';
import Parallax from "components/Parallax/Parallax.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/components.js";
import { makeStyles } from "@material-ui/core/styles";
import "assets/css/main.scss";

const useStyles = makeStyles(styles);

export default function SectionDownload() {
  const classes = useStyles();

  return (
    <div className="hero-image">
      <div className="hero-text">
        <h3>LATEST MESSAGE</h3>
        <p>When you pass through a difficult season, you have to remember it’s not your final destination. You may be down now, but get ready to rise again. God is not going to let anything keep you from your purpose. You haven’t seen, heard or imagined where He’s taking you.</p>
        <p>- David Kashema</p>
        <button>Watch More</button>
      </div>
      <Parallax>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
    </div>
  )
}



