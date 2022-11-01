import { kebabCase, merge } from 'lodash-es';
import theme from './theme';

export const formatStyles = (styles: { [key: string]: any; }) => {
  const transformedStyles = {};

  Object.keys(styles).forEach((value) => {
    if (typeof styles[value] === 'object') {
      styles[value] = formatStyles(styles[value]);
    }
    if (value.startsWith('_')) {
      transformedStyles[`&:${kebabCase(value)}`] = styles[value];
    } else {
      transformedStyles[value] = styles[value];
    }
  });

  return transformedStyles;
};

export const extractComponentStyles = (
  componentName: string,
  themeObject: typeof theme,
  variant?: string
) => {
  // TODO: handle reduced theme variables, such as "bg" instead of "background"
  // TODO: Before merging, take into account default props
  const componentTheme = themeObject.components[componentName];
  const mergedStyles = {};
  merge(
    mergedStyles,
    componentTheme?.baseStyles,
    variant ? componentTheme?.variants[variant] : {},
    componentTheme?.sizes
  );
  const styles = formatStyles(mergedStyles);


  return styles;
};

export const useStyle = (componentName: string, variant?: string) => {
  const componentStyles = extractComponentStyles(componentName, theme, variant);
  return componentStyles;
};
