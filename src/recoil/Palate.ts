import { atom } from 'recoil';

export const flavorIntensityState = atom<string>({
    key: "flavorIntensity",
    default: ""
})

export const sweetnessState = atom<string>({
    key: "sweetness",
    default: ""
})

export const acidityState = atom<string>({
    key: "acidity",
    default: ""
})

export const tanninState = atom<string>({
    key: "tannin",
    default: ""
})

export const alcoholState = atom<string>({
    key: "alcohol",
    default: ""
})

export const palateFloralState = atom<string[]>({
    key: "palateFloral",
    default: []
})

export const palateGreenFruitState = atom<string[]> ({
    key: "palateGreenFruit",
    default: []
})

export const palateCitrusFruitState = atom<string[]> ({
    key: "palateCitrusFruit",
    default: []
})

export const palateStoneFruitState = atom<string[]> ({
    key: "palateStoneFruit",
    default: []
})

export const palateTropicalFruitState = atom<string[]> ({
    key: "palateTropicalFruit",
    default: []
})

export const palateRedFruitState = atom<string[]> ({
    key: "palateRedFruit",
    default: []
})

export const palateBlackFruitState = atom<string[]> ({
    key: "palateBlackFruit",
    default: []
})

export const palateDriedFruitState = atom<string[]> ({
    key: "palateDriedFruit",
    default: []
})

export const palateHerbaceousState = atom<string[]> ({
    key: "palateHerbaceous",
    default: []
})

export const palateHerbalState = atom<string[]> ({
    key: "palateHerbal",
    default: []
})

export const palatePungenSpiceState = atom<string[]> ({
    key: "palatePungenSpice",
    default: []
})

export const palateYeastState = atom<string[]> ({
    key: "palateYeast",
    default: []
})

export const palateMalolacticFermentationState = atom<string[]> ({
    key: "palateMalolacticFermentation",
    default: []
})

export const palateOakState = atom<string[]> ({
    key: "palateOak",
    default: []
})

export const palateDeliberateOxidationState = atom<string[]> ({
    key: "palateDeliberateOxidation",
    default: []
})

export const palateFruitDevelopmentState = atom<string[]> ({
    key: "palateFruitDevelopment",
    default: []
})

export const palateBottleAgeState = atom<string[]> ({
    key: "palateBottleAge",
    default: []
})