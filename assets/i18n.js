$.i18n.translate = function (key, mode) {
  var messages = this().messageStore.messages;
  var override = messages.override && messages.override[key];
  var lang = (mode === 'aat') ? localStorage.getItem("lang") || 'en' : document.documentElement.lang;
  this().locale = lang;
  return (mode !== 'aat') && override || this(key);
};

Handlebars.registerHelper('t', function (key) {
  return $.i18n.translate(key);
});

Handlebars.registerHelper('tp', function (string, key) {
  return $.i18n.translate(string + key);
});

Handlebars.registerHelper('ta', function (key, $1) {
  return $.i18n.translate(key, 'aat');
});

Handlebars.registerHelper('tpa', function (string, key) {
  return $.i18n.translate(string + key, 'aat');
});
