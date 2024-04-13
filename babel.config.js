module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
        alias: {
          '@components': './src/components/index',
          '@colors': './src/colors',
          '@modules': './src/modules',
          '@views': './src/views',
          '@': './src'
        }
      }
    ]
  ]
}
