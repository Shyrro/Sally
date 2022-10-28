import { css } from '@emotion/css';
import theme from './theme';
export { default as theme } from './theme';

export const formatStyles = (styles) => {
  const transformedStyles = {};
  // TODO: Handle pascalCase pseudo selectors, such as 'focusVisible'
  Object.keys(styles).forEach((value) => {
    if(typeof styles[value] === 'object') {
      styles[value] = formatStyles(styles[value])
    }
    if(value.startsWith('_')) {
      transformedStyles[value.replace('_', '&:')] = styles[value]
    } else {
      transformedStyles[value] = styles[value]
    }
  })

  return transformedStyles
}

export const extractComponentStyles = (
  componentName: string,
  themeObject: typeof theme
) => {

  const styles = formatStyles(themeObject.components[componentName].baseStyles);

  return styles
};

export const useStyle = (componentName: string) => {
  const componentStyles = extractComponentStyles(componentName, theme);
  return css(componentStyles);
};
