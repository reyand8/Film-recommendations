/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
      "@storybook/preset-create-react-app",
      "@storybook/addon-links",
      "@storybook/addon-essentials",
      "@chromatic-com/storybook",
      "@storybook/addon-a11y",
      "@storybook/addon-interactions",
      "@storybook/addon-backgrounds",
      "@storybook/addon-viewport",
      "@react-theming/storybook-addon",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },
  docs: {
    autodocs: "tag"
  },
  features: { modernInlineRender: true },

};
export default config;
export const framework = "@storybook/react";