import React from "react";
import { 
         ListItem,
         ListItemText,
         ListItemIcon,
         Typography } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";

function InfoList(props) {
return (
<ListItem>
  <ListItemIcon style={{ color: "#ffea00" }}>
    <CheckIcon />
  </ListItemIcon>
  <ListItemText>
      <Typography variant="h5" style={{fontWeight: 'bold'}}>{props.text}</Typography>
  </ListItemText>
</ListItem>
);
}

export default InfoList;