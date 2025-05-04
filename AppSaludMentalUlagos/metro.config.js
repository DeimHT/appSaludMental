const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Desactiva bridge-less mode
config.transformer.experimentalImportSupport = false;

module.exports = config;
