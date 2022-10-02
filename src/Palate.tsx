import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {
  floral,
  greenFruit,
  citrusFruit,
  stoneFruit,
  tropicalFruit,
  redFruit,
  blackFruit,
  driedFruit,
  herbaceous,
  herbal,
  pungentSpice,
  other,
  yeast,
  malolacticFermentation,
  oak,
  deliberateOxidation,
  fruitDevelopment,
  bottleAge,
} from "./Lexion";
import SelectTextFields from "./TextField";
import MultipleSelectChip from "./MultipleSelect";

const flavorIntensity = [
  "light",
  "medium(-)",
  "medium",
  "medium(+)",
  "pronounced",
];
const sweetness = [
  "dry",
  "off-dry",
  "medium-dry",
  "medium-sweet",
  "sweet",
  "luscious",
];
const acidity = ["low", "medium(-)", "medium", "medium(+)", "high"];
const tannin = ["low", "medium(-)", "medium", "medium(+)", "high"];
const alcohol = ["low", "medium", "high"];

const multipleSelectFeatures = {
  floral: floral,
  greenFruit: greenFruit,
  citrusFruit: citrusFruit,
  stoneFruit: stoneFruit,
  tropicalFruit: tropicalFruit,
  redFruit: redFruit,
  blackFruit: blackFruit,
  driedFruit: driedFruit,
  herbaceous: herbaceous,
  herbal: herbal,
  pungentSpice: pungentSpice,
  other: other,
  yeast: yeast,
  malolacticFermentation: malolacticFermentation,
  oak: oak,
  deliberateOxidation: deliberateOxidation,
  fruitDevelopment: fruitDevelopment,
  bottleAge: bottleAge,
};

const multipleSelectGrids = (): JSX.Element[] => {
  const grids = (
    Object.keys(multipleSelectFeatures) as Array<
      keyof typeof multipleSelectFeatures
    >
  ).map((feature) => {
    return (
      <Grid item xs={12} key={feature}>
        <MultipleSelectChip
          choices={multipleSelectFeatures[feature]}
          id={"palate-".concat(feature)}
          label={feature}
        />
      </Grid>
    );
  });
  return grids;
};

export default function PalateForm() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Palate
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <SelectTextFields
            choices={flavorIntensity}
            label={"flavor intensity"}
            id={"flavorIntensity"}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectTextFields
            choices={sweetness}
            label={"sweetness"}
            id={"sweetness"}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectTextFields
            choices={acidity}
            label={"acidity"}
            id={"acidity"}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectTextFields
            choices={alcohol}
            label={"alcohol"}
            id={"alcohol"}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectTextFields choices={tannin} label={"tannin"} id={"tannin"} />
        </Grid>
      </Grid>
      {multipleSelectGrids()}
    </React.Fragment>
  );
}
