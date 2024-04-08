export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  parameters: {
    backgrounds: {
      default: 'main-background',
      values: [
        {
          name: 'main-background',
          value: '#849198',
        },
      ],
    },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/i,
    },
  },
};

export default parameters;
