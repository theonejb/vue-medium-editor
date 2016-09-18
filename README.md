VueMediumEditor
===

[Medium Editor](https://github.com/yabwe/medium-editor) as a [Vue](https://vuejs.org/) component.

To use, `require` the module and register it as a Vue `component` with any name you want:

    var VueMediumEditor = require("vue-medium-editor");
    Vue.component("medium-editor", VueMediumEditor);

Then in your Vue template, you can use it like this:

    <medium-editor :content.sync="blogEntry.description"></medium-editor>

You'll also need to include CSS assets for the Medium Editor package. You can hook it up to your build process, or you can just include them in your HTML like this:

    <link rel="stylesheet" href="node_modules/medium-editor/dist/css/medium-editor.css" media="all">
    <link rel="stylesheet" href="node_modules/medium-editor/dist/css/themes/default.css" media="all">

##Props
 - `content`: The content to edit.
