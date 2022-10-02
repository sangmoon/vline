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

const noseIntensity = [
  "light",
  "medium(-)",
  "medium",
  "medium(+)",
  "pronounced",
];

const development = [
  "youthful",
  "developing",
  "fully developed",
  "tired/past its best",
];

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
          id={"nose-".concat(feature)}
          label={feature}
        />
      </Grid>
    );
  });
  return grids;
};

export default function NoseForm() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Nose
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <SelectTextFields
            choices={noseIntensity}
            label={"nose intensity"}
            id={"noseIntensity"}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectTextFields
            choices={development}
            label={"development"}
            id={"development"}
          />
        </Grid>
      </Grid>
      {multipleSelectGrids()}
    </React.Fragment>
  );
}
