export default {
  components: {
    Tag: {
      baseStyles: {
        background: 'red',
        _invalid: {
          background: 'pink',
          _hover: {
            background: 'blue',
          },
        },
        _hover: {
          background: 'green',
        },
        _focusVisible: {
          border: 'red',
          _hover: {
            background: 'red',
          },
        },
      },
    },
  },
};
