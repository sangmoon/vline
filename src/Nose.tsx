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
import {noseIntensityState, noseDevelopmentState, noseFloralState, noseGreenFruitState, noseCitrusFruitState, noseStoneFruitState, noseTropicalFruitState, noseRedFruitState, noseDriedFruitState, noseHerbaceousState, noseHerbalState, nosePungenSpiceState, noseYeastState, noseMalolacticFermentationState, noseOakState, noseDeliberateOxidationState, noseFruitDevelopmentState, noseBottleAgeState, noseBlackFruitState} from "./recoil/Nose";

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
  floral: {
    choices: floral, 
    state: noseFloralState
  },
  greenFruit: {
    choices: greenFruit, 
    state: noseGreenFruitState
  },

  citrusFruit: {
    choices: citrusFruit, 
    state: noseCitrusFruitState
  },

  stoneFruit: {
    choices: stoneFruit, 
    state: noseStoneFruitState
  },

  tropicalFruit: {
    choices: tropicalFruit, 
    state: noseTropicalFruitState
  },

  redFruit: {
    choices: redFruit, 
    state: noseRedFruitState
  },

  blackFruit: {
    choices: blackFruit,
    state: noseBlackFruitState
  },

  driedFruit: {
    choices: driedFruit,
    state: noseDriedFruitState
  },  

  herbaceous: {
    choices: herbaceous,
    state: noseHerbaceousState
  },

  herbal: {
    choices: herbal,
    state: noseHerbalState
  },

  pungentSpice: {
    choices: pungentSpice,
    state: nosePungenSpiceState
  },

  yeast: {
    choices: yeast,
    state: noseYeastState
  },

  malolacticFermentation: {
    choices: malolacticFermentation,
    state: noseMalolacticFermentationState
  },
  
  oak: {
    choices: oak,
    state: noseOakState
  },

  deliberateOxidation: {
    choices: deliberateOxidation,
    state: noseDeliberateOxidationState
  },

  fruitDevelopment: {
    choices: fruitDevelopment,
    state: noseFruitDevelopmentState
  },

  bottleAge: {
    choices: bottleAge,
    state: noseBottleAgeState
  },
}

const recoilMultipleSelectGrids = (): JSX.Element[] => {
  const grids = (
    Object.keys(multipleSelectFeatures) as Array<
      keyof typeof multipleSelectFeatures
    >
  ).map((feature) => {
    return (
      <Grid item xs={12} key={feature}>
        <MultipleSelectChip
          choices={multipleSelectFeatures[feature]["choices"]}
          id={"nose-".concat(feature)}
          label={feature}
          state={multipleSelectFeatures[feature]["state"]}
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
            state={noseIntensityState}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectTextFields
            choices={development}
            label={"development"}
            id={"development"}
            state={noseDevelopmentState}
          />
        </Grid>
      </Grid>
      {recoilMultipleSelectGrids()}
    </React.Fragment>
  );
}
