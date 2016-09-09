module.exports = (function () {
  var Vue = require("Vue");

  var MediumEditorComponent = Vue.extend({
    template: "<div><textarea v-model=\"content\"></textarea></div>",

    props: ["content"],

    ready: function () {
      var self = this;
      var MediumEditor = require("medium-editor");

      var editorToDataSync = function (data, editable) {
        self.content = editable.innerHTML;
      };

      this.editor = new MediumEditor(this.$el.children[0]);
      this.editor.subscribe("editableInput", editorToDataSync);

      this.$on("data-updated", function () {
        this.editor.setContent(this.content);
      });
    }
  });

  return MediumEditorComponent;
})();
