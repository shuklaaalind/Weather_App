import {PixelRatio} from 'react-native';
//@ts-ignore
import {create} from 'react-native-pixel-perfect';

const pixelRatio = PixelRatio.get();

console.log({pixelRatio});

const designResolution = {
  width: 1440 / pixelRatio,
  height: 3040 / pixelRatio,
};
const perfectSize = create(designResolution);
const scaler = (size: number) => perfectSize(size / pixelRatio);

export default scaler;
