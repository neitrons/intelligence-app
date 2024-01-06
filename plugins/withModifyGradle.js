const { withGradleProperties } = require("@expo/config-plugins");

module.exports = (config) => {
  const newGraddleProperties = [
    {
      type: "property",
      key: "AsyncStorage_db_size_in_MB",
      value: "10",
    },
    {
      type: "property",
      key: "FLIPPER_VERSION",
      value: "0.144.0",
    },
  ];

  return withGradleProperties(config, (config) => {
    newGraddleProperties.map((gradleProperty) =>
      config.modResults.push(gradleProperty)
    );

    return config;
  });
};
