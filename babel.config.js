module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@components': './src/components',
          '@theme': './src/theme/theme.ts',
          '@icons': './src/assets/icons/index.ts',
          '@hooks': './src/hooks/index.ts',
        },
        extensions: ['.ts', '.tsx'],
      },
    ],
  ],
};
