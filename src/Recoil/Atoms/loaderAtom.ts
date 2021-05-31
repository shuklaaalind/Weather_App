import {atom, useRecoilValue} from 'recoil';

class LoaderAtom {
  mutateState: (param: boolean | ((param: boolean) => boolean)) => void;

  constructor() {
    this.mutateState = () => {};
  }

  onLoad = ({setSelf}: any) => {
    this.mutateState = setSelf;
  };

  showLoader = () => {
    this.mutateState(true);
  };

  hideLoader = () => {
    this.mutateState(false);
  };
}

export const LoaderAtomInstance = new LoaderAtom();

const loaderAtom = atom({
  key: 'loaderAtom',
  default: false,
  effects_UNSTABLE: [LoaderAtomInstance.onLoad],
});

export const useLoaderValue = () => useRecoilValue(loaderAtom);
