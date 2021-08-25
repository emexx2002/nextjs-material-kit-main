/*eslint-disable*/
import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "styles/jss/nextjs-material-kit/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinksl(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>

      <ListItem className={classes.listItem}>

      </ListItem>
      <ListItem className={classes.listItem}>
        <Link href="/login">
          <a className={classes.navLink} style={{ fontWeight: "bold" }}>Login</a>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button color="info" style={{ textDecoration: "capitalize !important", fontWeight: "bold" }} round>
          Sign Up
        </Button>


      </ListItem>



    </List>
  );
}
