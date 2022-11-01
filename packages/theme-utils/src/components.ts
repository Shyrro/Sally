export interface ExtractedEvents {
  events: Record<string, CallableFunction>;
  rest: Record<string, unknown>;
}

export const extractEvents = (
  attrs: Record<string, unknown>
): ExtractedEvents => {
  const events: Record<string, CallableFunction> = {};
  const rest: Record<string, unknown> = {};

  Object.keys(attrs).forEach((attrId) => {
    if (!attrId.startsWith('on')) {
      rest[attrId] = attrs[attrId];
    } else {
      const event = attrId.replace('on', 'on:').toLowerCase();
      events[event] = attrs[attrId] as CallableFunction;
    }
  });

  return { events, rest };
};
