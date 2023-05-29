export default {
  components: {
    Tag: {
      baseStyles: {
        display: 'inline-flex',
        verticalAlign: 'top',
        alignItems: 'center',
        maxWidth: '100%',
        fontWeight: 500,
        lineHeight: 1.2,
        outline: 'transparent solid 2px',
        outlineOffset: '2px',
        color: '#1A202C',
        background: '#EDF2F7',
        borderRadius: '0.375rem',
        minHeight: '1.5rem',
        minWidth: '1.5rem',
        fontSize: '0.875rem',
        paddingInlineStart: '0.5rem',
        paddingInlineEnd: '0.5rem',
      },
      variants: {
        outline: {
          border: '2px solid #1A202C',
          background: 'transparent',
          color: '#1A202C',
        },
      },
    },
  },
};
