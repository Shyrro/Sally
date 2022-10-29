import { css } from '@emotion/css';
import theme from './theme';
import kebabCase from 'kebab-case';
export { default as theme } from './theme';

export const formatStyles = (styles) => {
  const transformedStyles = {};

  Object.keys(styles).forEach((value) => {
    if (typeof styles[value] === 'object') {
      styles[value] = formatStyles(styles[value]);
    }
    if (value.startsWith('_')) {
      const kebabCaseValue = kebabCase(value);
      transformedStyles[kebabCaseValue.replace('_', '&:')] = styles[value];
    } else {
      transformedStyles[value] = styles[value];
    }
  });

  return transformedStyles;
};

export const extractComponentStyles = (
  componentName: string,
  themeObject: typeof theme
) => {
  // TODO: handle deep merge of theme baseStyles, variants, sizes
  // Before merging, take into account default props
  const styles = formatStyles(themeObject.components[componentName].baseStyles);
  return styles;
};

export const useStyle = (componentName: string) => {
  const componentStyles = extractComponentStyles(componentName, theme);
  return css(componentStyles);
};
