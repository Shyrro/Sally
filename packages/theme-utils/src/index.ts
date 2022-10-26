import { css } from '@emotion/css';
import theme from './theme';
export { default as theme } from './theme';

export const extractComponentStyles = (
  componentName: string,
  themeObject: typeof theme
) => {
  return themeObject.components[componentName].baseStyles;
};

export const useStyle = (componentName: string) => {
  const componentStyles = theme.components[componentName].baseStyles;
  return css(componentStyles);
};
