import { describe, expect, it } from 'vitest';
import { extractComponentStyles } from '../src';

// The two tests marked with concurrent will be run in parallel
describe('extract styles', () => {
  it('extracts base component styles', () => {
    // Arrange
    const theme: any = {
      components: { Button: { baseStyles: { color: 'green', bg: 'red' } } },
    };

    // Act
    const styles: any = extractComponentStyles('Button', theme);

    // Assert
    expect(styles.color).toBe('green');
    expect(styles.bg).toBe('red');
  });

  it('replaces prefix _ with &: for pseudo selectors deeply', () => {
    // Arrange
    const theme: any = {
      components: {
        Button: {
          baseStyles: {
            color: 'green',
            bg: 'red',
            _hover: {
              bg: 'pink',
              _focus: {
                bg: 'gray',
              },
            },
          },
        },
      },
    };

    // Act
    const styles: any = extractComponentStyles("Button", theme)

    // Assert
    expect(styles.color).toBe('green')
    expect(styles['&:hover'].bg).toBe('pink')
    expect(styles['&:hover']['&:focus'].bg).toBe('gray')
  });
});
