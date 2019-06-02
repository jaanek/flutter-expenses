module.exports = function (api) {
  if (api) {
    api.cache(true);
  }

  const presets = [
    '@babel/preset-react',
    ['@babel/preset-env', {
      targets: {
        node: '9.7.1' // node: "current"
      }
    }],
  ];
  const plugins = [
    '@babel/plugin-proposal-object-rest-spread',
    ['@babel/plugin-transform-react-jsx', {
      pragma: 'React.createElement',
      throwIfNamespace: false
    }]
  ];

  return {
    presets,
    plugins
  };
};
