import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Face from "@material-ui/icons/Face";
import Chat from "@material-ui/icons/Chat";
import Build from "@material-ui/icons/Build";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionTabs() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="nav-tabs">
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <CustomTabs
                headerColor="warning"
                tabs={[
                  {
                    tabName: "CHURCH MISSION STATEMENT",
                    tabContent: (
                      <p className={classes.textCenter}>
                       The mission of 'Living word pentecostal church' is to teach Christians worldwide who they are in Christ Jesus and how to live a victorious life in their convenant rights and privileges.
                       The fulfiment of that missin takes place when those believes become rooted and grounded enough in GOD"S word to each out and teach others these same principles. <br></br>
                       
                       1. We are called to lead people, primarily born-again believers to a place where they operate prificiently in the biblical principles of faith, love, healing prosperity, redemption and righteousness, and to the place wehre they can share those principles with others. <br></br>
                       2. We are called to assist believers in becoming rooted, grounded and established in the word of GOD by teaching them to give GOD"S word first place in their lives. (Colossians 1:23, Psalm 112:1).<br></br>
                       3. We are called to reveal the mysteirs, the victorious revelations of GOD'S WORD, that have been hidded from all age (Colossians 1:25-25).<br></br>
                       4. We are called to build an army of mature believers, bringing them from milk to meat, fromreligion to reality. We are called to train thehm to become silful in the word of righteousness (Hebrews 5:12-14). <br></br>
                       5. We are called to proclaim that "Jesus Chist is LORD" from the top of the world to the bottom and all the wawy around.<br></br>
                       This vision of "Living word Pentecostal church" will be accomplised worldwide by doing bible study, Evangelical campains, conventions (1 Peter 2:9, Act 26:18).

                      </p>
                    )
                  },
                ]}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
