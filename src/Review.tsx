import * as React from "react";
import Grid from "@mui/material/Grid";

import TextareaAutosize from '@mui/base/TextareaAutosize';
import {useRecoilValue} from "recoil";

import {appearanceIntensityState, redColorState, whiteColorState, roseColorState} from "./recoil/Apperance";
import {noseIntensityState, noseDevelopmentState, noseFloralState, noseGreenFruitState, noseCitrusFruitState, noseStoneFruitState, noseTropicalFruitState, noseRedFruitState, noseDriedFruitState, noseHerbaceousState, noseHerbalState, nosePungenSpiceState, noseYeastState, noseMalolacticFermentationState, noseOakState, noseDeliberateOxidationState, noseFruitDevelopmentState, noseBottleAgeState, noseBlackFruitState} from "./recoil/Nose";
import {bodyState, sweetnessState, acidityState, tanninState, alcoholState, palateFloralState, palateGreenFruitState, palateCitrusFruitState, palateStoneFruitState, palateTropicalFruitState, palateRedFruitState, palateBlackFruitState, palateDriedFruitState, palateHerbaceousState, palateHerbalState, palatePungenSpiceState, palateYeastState, palateMalolacticFermentationState, palateOakState, palateDeliberateOxidationState, palateFruitDevelopmentState, palateBottleAgeState } from "./recoil/Palate";

const createReviewText = () => {
    const appearanceIntensity = useRecoilValue(appearanceIntensityState);
    const color = useRecoilValue(redColorState) || useRecoilValue(whiteColorState) || useRecoilValue(roseColorState);

    const noseIntensity = useRecoilValue(noseIntensityState);
    const noseDevelopment = useRecoilValue(noseDevelopmentState);
    const aroma = [""].concat(useRecoilValue(noseFloralState)).concat(useRecoilValue(noseGreenFruitState))
    .concat(useRecoilValue(noseCitrusFruitState)).concat(useRecoilValue(noseStoneFruitState))
    .concat(useRecoilValue(noseTropicalFruitState)).concat(useRecoilValue(noseRedFruitState))
    .concat(useRecoilValue(noseBlackFruitState)).concat(useRecoilValue(noseDriedFruitState))
    .concat(useRecoilValue(noseHerbaceousState)).concat(useRecoilValue(noseHerbalState))
    .concat(useRecoilValue(nosePungenSpiceState)).concat(useRecoilValue(noseYeastState))
    .concat(useRecoilValue(noseMalolacticFermentationState)).concat(useRecoilValue(noseOakState))
    .concat(useRecoilValue(noseDeliberateOxidationState)).concat(useRecoilValue(noseFruitDevelopmentState))
    .concat(useRecoilValue(noseBottleAgeState)).filter(Boolean);

    const body = useRecoilValue(bodyState);
    const sweetness = useRecoilValue(sweetnessState);
    const acidity = useRecoilValue(acidityState);
    const tannin = useRecoilValue(tanninState);
    const alcohol = useRecoilValue(alcoholState);

    const flavors = [""].concat(useRecoilValue(palateFloralState)).concat(useRecoilValue(palateGreenFruitState))
    .concat(useRecoilValue(palateCitrusFruitState)).concat(useRecoilValue(palateStoneFruitState))
    .concat(useRecoilValue(palateTropicalFruitState)).concat(useRecoilValue(palateRedFruitState))
    .concat(useRecoilValue(palateBlackFruitState)).concat(useRecoilValue(palateDriedFruitState))
    .concat(useRecoilValue(palateHerbaceousState)).concat(useRecoilValue(palateHerbalState))
    .concat(useRecoilValue(palatePungenSpiceState)).concat(useRecoilValue(palateYeastState))
    .concat(useRecoilValue(palateMalolacticFermentationState)).concat(useRecoilValue(palateOakState))
    .concat(useRecoilValue(palateDeliberateOxidationState)).concat(useRecoilValue(palateFruitDevelopmentState))
    .concat(useRecoilValue(palateBottleAgeState)).filter(Boolean);

    const text = `Appearance: The wine is ${appearanceIntensity} and  ${color}.
Nose: It is ${noseIntensity} and ${noseDevelopment}. The aromas are of ${aroma.join(", ")}.
Palate: It is ${sweetness} with ${acidity} acidity, ${tannin} tannin, ${alcohol} alcohol and ${body} body. Flavors are of ${flavors.join(", ")}.
`
    return text;
}

export default function ReviewForm() {
    return (
      <React.Fragment>
        <Grid container spacing={0} direction={"column"}  alignItems="center" justifyContent="center">
            <Grid item sx={{ width: 1 }} >
                <TextareaAutosize  id="text" aria-label="minimum height" minRows={30} placeholder="write your reviews"  defaultValue={createReviewText()} />           
            </Grid>
        </Grid>
      </React.Fragment>
    );
  }


