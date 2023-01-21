import { RecoilState } from 'recoil';


export interface ButtonProps<T> {
  choices: string[];
  label: string;
  id: string;
  state: RecoilState<T>;
}