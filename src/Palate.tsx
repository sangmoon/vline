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
  yeast,
  malolacticFermentation,
  oak,
  deliberateOxidation,
  fruitDevelopment,
  bottleAge,
} from "./Lexion";

import {SelectTextFields} from "./TextField";
import {MultipleSelectChip} from "./MultipleSelect";
import {bodyState, sweetnessState, acidityState, tanninState, alcoholState, palateFloralState, palateGreenFruitState, palateCitrusFruitState, palateStoneFruitState, palateTropicalFruitState, palateRedFruitState, palateBlackFruitState, palateDriedFruitState, palateHerbaceousState, palateHerbalState, palatePungenSpiceState, palateYeastState, palateMalolacticFermentationState, palateOakState, palateDeliberateOxidationState, palateFruitDevelopmentState, palateBottleAgeState } from "./recoil/Palate";


const body = [
  "light",
  "medium(-)",
  "medium",
  "medium(+)",
  "high",
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
  floral: {
    choices: floral, 
    state: palateFloralState
  },
  greenFruit: {
    choices: greenFruit, 
    state: palateGreenFruitState
  },

  citrusFruit: {
    choices: citrusFruit, 
    state: palateCitrusFruitState
  },

  stoneFruit: {
    choices: stoneFruit, 
    state: palateStoneFruitState
  },

  tropicalFruit: {
    choices: tropicalFruit, 
    state: palateTropicalFruitState
  },

  redFruit: {
    choices: redFruit, 
    state: palateRedFruitState
  },

  blackFruit: {
    choices: blackFruit,
    state: palateBlackFruitState
  },

  driedFruit: {
    choices: driedFruit,
    state: palateDriedFruitState
  },  

  herbaceous: {
    choices: herbaceous,
    state: palateHerbaceousState
  },

  herbal: {
    choices: herbal,
    state: palateHerbalState
  },

  pungentSpice: {
    choices: pungentSpice,
    state: palatePungenSpiceState
  },

  yeast: {
    choices: yeast,
    state: palateYeastState
  },

  malolacticFermentation: {
    choices: malolacticFermentation,
    state: palateMalolacticFermentationState
  },
  
  oak: {
    choices: oak,
    state: palateOakState
  },

  deliberateOxidation: {
    choices: deliberateOxidation,
    state: palateDeliberateOxidationState
  },

  fruitDevelopment: {
    choices: fruitDevelopment,
    state: palateFruitDevelopmentState
  },

  bottleAge: {
    choices: bottleAge,
    state: palateBottleAgeState
  },
}

const multipleSelectGrids = (): JSX.Element[] => {
  const grids = (
    Object.keys(multipleSelectFeatures) as Array<
      keyof typeof multipleSelectFeatures
    >
  ).map((feature) => {
    return (
      <Grid item xs={12} key={feature}>
        <MultipleSelectChip
          choices={multipleSelectFeatures[feature]["choices"]}
          id={"palate-".concat(feature)}
          label={feature}
          state={multipleSelectFeatures[feature]["state"]}
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
            choices={body}
            label={"body"}
            id={"body"}
            state={bodyState}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectTextFields
            choices={sweetness}
            label={"sweetness"}
            id={"sweetness"}
            state={sweetnessState}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectTextFields
            choices={acidity}
            label={"acidity"}
            id={"acidity"}
            state={acidityState}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectTextFields
            choices={alcohol}
            label={"alcohol"}
            id={"alcohol"}
            state={alcoholState}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectTextFields choices={tannin} label={"tannin"} id={"tannin"}  state={tanninState}/>
        </Grid>
      </Grid>
      {multipleSelectGrids()}
    </React.Fragment>
  );
}
