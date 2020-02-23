import React from "react";
// plugin that creates slider
import Slider from "nouislider";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";
import Switch from "@material-ui/core/Switch";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import People from "@material-ui/icons/People";
import Check from "@material-ui/icons/Check";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.js";
import Paginations from "components/Pagination/Pagination.js";
import Badge from "components/Badge/Badge.js";

// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import Card from "components/Card/Card.js";
import image1 from "assets/img/bg0.jpg";
import image2 from "assets/img/bg01.jpg";
import image3 from "assets/img/bg02.jpg";


import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionBasics() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([24, 22]);
  const [selectedEnabled, setSelectedEnabled] = React.useState("b");
  const [checkedA, setCheckedA] = React.useState(true);
  const [checkedB, setCheckedB] = React.useState(false);

  const handleToggle = value => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
  };
  return (
    <div className={classes.sections}>
      <div className={classes.container}>
        <div className={classes.title}>
          <h3><b>Living word pentecostal is a church that believes in Jesus, a church that loves God and people.</b></h3> 
        </div>
        <div id="overview">
            <p>Here at Living word church, we believe your best days are still out in front of you. Whether you are joining us in person or online, we invite you to experience our services and be a part of the church family. The Bible says when you are planted in the house of the Lord, you will flourish. Get ready to step into a new level of your destiny!</p>
            <p>Overwhelmed by the gift of salvation we have found in Jesus, we have a heart for authentic worship, are passionate about the local church, and are on mission to see God’s kingdom established across the earth.</p>
            <p>Overwhelmed by the gift of salvation we have found in Jesus, we have a heart for authentic worship, are passionate about the local church, and are on mission to see God’s kingdom established across the earth.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
      <div className={classes.section}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12} className={classes.marginAuto}>
                <Card carousel>
                  <Carousel {...settings}>
                    <div>
                      <img src={image1} alt="First slide" className="slick-image" />
                      <div className="slick-caption">
                        <h4>
                          <LocationOn className="slick-icons" />
                          Leader pastors during church service
                        </h4>
                      </div>
                    </div>
                    <div>
                      <img
                        src={image2}
                        alt="Second slide"
                        className="slick-image"
                      />
                      <div className="slick-caption">
                        <h4>
                          <LocationOn className="slick-icons" />
                         Chritians gathering service time
                        </h4>
                      </div>
                    </div>
                    <div>
                      <img src={image3} alt="Third slide" className="slick-image" />
                      <div className="slick-caption">
                        <h4>
                          <LocationOn className="slick-icons" />
                          Worship time, praise and worship
                        </h4>
                      </div>
                    </div>
                  </Carousel>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
        </div>
    </div>
  )
}
