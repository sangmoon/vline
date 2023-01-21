import { atom } from 'recoil';

export const appearanceIntensityState = atom<string>({
  key: 'appearanceIntensity',
  default: "",
})

export const redColorState = atom<string>({
  key: 'redColor',
  default: ''
})

export const whiteColorState = atom<string>({
  key: 'whiteColor',
  default: ''
})

export const roseColorState = atom<string>({
  key: 'roseColor',
  default: ''
})



