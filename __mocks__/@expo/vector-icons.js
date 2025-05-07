const React = require("react");
const createIcon = (name) => (props) =>
  React.createElement("Icon", { ...props, name });

exports.Entypo = createIcon("Entypo");
exports.Feather = createIcon("Feather");
exports.MaterialIcons = createIcon("MaterialIcons");
exports.FontAwesome = createIcon("FontAwesome");
exports.default = {
  Entypo: exports.Entypo,
  Feather: exports.Feather,
  MaterialIcons: exports.MaterialIcons,
  FontAwesome: exports.FontAwesome,
};
