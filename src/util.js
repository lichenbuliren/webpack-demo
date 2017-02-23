export default {
  log: function() {
    console.log.apply(this, arguments);
  },
  warn: function() {
    console.log.apply(this, arguments);
  },
  $: function(selector) {
    return document.querySelectorAll(selector);
  }
}