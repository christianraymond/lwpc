import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";

import profile from "assets/img/faces/david-k.jpg";

import studio1 from "assets/img/examples/studio-1.jpg";
import studio2 from "assets/img/examples/studio-2.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import studio4 from "assets/img/examples/studio-4.jpg";
import studio5 from "assets/img/examples/studio-5.jpg";
import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work3 from "assets/img/examples/cynthia-del-rio.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
import work5 from "assets/img/examples/clem-onojegaw.jpg";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  const churchBrand = <img src="livingwordimg.jpg" height={70} width={120} padding={340}/>
  return (
    <div>
      <Header
        color="transparent"
        brand={churchBrand}
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      />
      <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>David Kashema</h3>
                    <h6>Senior pastor of Living word pentecostal church</h6>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-whatsapp"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fa fa-envelope"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-facebook"} />
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
              As a leader, Pastor David Kashema is highly regarded for his boldness, innovation and vision.
              As a church pastor, he is well respected for his passion for the cause of Christ and the local church, and for preaching messages that change mindsets and ministries. 
              But at HOME – Living Word Church – Pastor David is most loved for being the ‘dad of the house’ – a pastor who loves God and people, and a speaker of life who declares, ‘The best is yet to come’..{" "}
              </p>
              <h4>"I have two great passions: one is to build the Church of Jesus Christ and the other is to lift the lives of people and help them fulfil their potential in life".</h4>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
