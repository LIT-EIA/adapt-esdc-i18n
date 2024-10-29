$.i18n.translate = function (key, options) {
  var mode = options && options.mode;
  var messages = this().messageStore.messages;
  var override = messages.override && messages.override[key];
  var lang = (mode === 'aat') ? localStorage.getItem("lang") || 'en' : document.documentElement.lang;
  this().locale = lang;
  return (mode !== 'aat') && override || this(key, options.$1);
};

Handlebars.registerHelper('t', function (key, $1) {
  return $.i18n.translate(key, {$1: $1});
});

Handlebars.registerHelper('tp', function (string, key) {
  return $.i18n.translate(string + key);
});

Handlebars.registerHelper('ta', function (key, $1) {
  return $.i18n.translate(key, {$1: $1, mode: 'aat'});
});

Handlebars.registerHelper('tpa', function (string, key) {
  return $.i18n.translate(string + key, {mode: 'aat'});
});
