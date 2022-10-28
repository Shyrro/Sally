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
      },
    },
  },
};
