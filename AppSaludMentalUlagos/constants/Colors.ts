/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#B1C5DD';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: tintColorLight,
    title: '#003480',
    title2: '#002760',
    background: '#99B3D9',
    tint: tintColorLight,
    icon: '#134793',
    tabIconDefault: tintColorLight,
    tabIconSelected: '#134793',
    card: '#3367B3',
    card2: '#7D9EC7',
    header: '#003480',
    navbar: '#003480',
    alert: '#5B3AAD',

  },
  dark: {
    text: '#B1C5DD',
    title: '#B1C5DD',
    title2: '#002760',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    card: '#7D9EC7',
    card2: '#7D9EC7',
    header: '#668DC6',
    navbar: '#9BA1A6',
    alert: '#8B0000',
  },
};
