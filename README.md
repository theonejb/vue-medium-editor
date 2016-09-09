VueMediumEditor
===

[Medium Editor](https://github.com/yabwe/medium-editor) as a [Vue](https://vuejs.org/) component.

To use, `require` the module and register it as a Vue `component` with any name you want:

    var VueMediumEditor = require("vue-medium-editor");
    Vue.component("medium-editor", VueMediumEditor);

Then in your Vue template, you can use it like this:

    <medium-editor :body.sync="curAlbum.description"></medium-editor>


##Props
 - `body`: The string to display in the editor.
