import {Dimensions, I18nManager} from 'react-native';

export const {width, height} = Dimensions.get('window');

export const guidelineBaseWidth = 375;
export const guidelineBaseHeight = 850;

const widthRatio = width / guidelineBaseWidth;
const heightRatio = height / guidelineBaseHeight;

export const scale = (size:number) => widthRatio * size;
export const verticalScale = (size:number) => heightRatio * size;

const defaultModerateFactor = width > guidelineBaseWidth ? 0.5 : 1.25;

export const moderateScale = (size:number, factor = defaultModerateFactor) =>
  size + (scale(size) - size) * factor;

export const lineHeightScale = (size:number) => (I18nManager.isRTL ? size * 1.5 : size);
