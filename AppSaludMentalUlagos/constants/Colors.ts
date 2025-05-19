/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#B1C5DD';
const tintColorDark = '#7248D8';

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
    text: '#E3DAF7',
    title: '#5B3AAD',
    title2: '#5B3AAD',
    background: '#E3DAF7',
    tint: tintColorDark,
    icon: '#E3DAF7',
    tabIconDefault: '#E3DAF7',
    tabIconSelected: tintColorDark,
    card: '#7248D8',
    card2: '#AAA5FC',
    header: '#5B3AAD',
    navbar: '#5B3AAD',
    alert: '#002760',
  },
};
