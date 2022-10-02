import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SelectTextFields from "./TextField";

const appearanceIntensity = ["pale", "medium", "deep"];
const redColor = ["purple", "ruby", "garnet", "tawny", "brown"];
const whiteColor = ["lemon-green", "lemon", "gold", "amber", "brown"];
const roseColor = ["pink", "salmon", "orange"];

export default function AppearanceForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Appearance
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <SelectTextFields
            choices={appearanceIntensity}
            label={"intensity"}
            id={"appearanceIntensity"}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectTextFields
            choices={redColor}
            label={"red color"}
            id={"readColor"}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectTextFields
            choices={whiteColor}
            label={"white color"}
            id={"whiteColor"}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectTextFields
            choices={roseColor}
            label={"rose color"}
            id={"roseColor"}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
