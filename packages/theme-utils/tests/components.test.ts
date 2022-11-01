import { describe, expect, it } from 'vitest';
import { extractEvents } from '../src';

describe('extract attributes', () => {
  it('retrieves custom events as native svelte events notation', () => {
    // Arrange
    const attributes = {
      anAttribute: 'test',
      onClick: () => ({
        c: 'callback',
      }),
    };

    // Act
    const { events, rest } = extractEvents(attributes);

    // Assert
    expect(events.anAttribute).toBe(undefined);
    expect(events['on:click']).toBeDefined();
    expect(events['on:click']().c).toBe('callback');
    expect(rest.anAttribute).toBe('test');
  });

  it('retrieves multiple events correctly', () => {
    // Arrange
    const attributes = {
      whatever: 'what',
      onKeyDown: () => 'keydown event triggered',
      onPointerDown: () => 'pointer down event triggered',
      onChange: () => 'change event triggered',
    };

    // Act
    const { events, rest } = extractEvents(attributes);

    // Assert
    expect(events.whatever).not.toBeDefined();
    expect(events['on:keydown']()).toBe('keydown event triggered');
    expect(events['on:pointerdown']()).toBe('pointer down event triggered');
    expect(events['on:change']()).toBe('change event triggered');
    expect(rest.whatever).toBe('what');
  });
});
