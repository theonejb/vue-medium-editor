module.exports = (function () {
  var Vue = require("Vue");

  var MediumEditorComponent = Vue.extend({
    template: "<div><textarea v-model=\"body\"></textarea></div>",

    props: ["data"],

    ready: function () {
      var self = this;
      var MediumEditor = require("medium-editor");

      var editorToDataSync = function (data, editable) {
        self.data = editable.innerHTML;
      };

      this.editor = new MediumEditor(this.$el.children[0]);
      this.editor.subscribe("editableInput", editorToDataSync);

      this.$on("data-updated", function () {
        this.editor.setContent(this.data);
      });
    }
  });

  return MediumEditorComponent;
})();
