module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@components': './src/components',
          '@theme': './src/theme/theme.ts',
          '@icons': './src/assets/icons',
          '@hooks': './src/hooks',
          '@screens': './src/screens',
          '@routes': './src/routes',
          '@domain': './src/domain',
          '@brand': './src/assets/brand',
          '@api': './src/api',
        },
      },
    ],
  ],
};
