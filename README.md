VueMediumEditor
===

[Medium Editor](https://github.com/yabwe/medium-editor) as a [Vue](https://vuejs.org/) component.

To use, `require` the module and register it as a Vue `component` with any name you want:

    var VueMediumEditor = require("vue-medium-editor");
    Vue.component("medium-editor", VueMediumEditor);

Then in your Vue template, you can use it like this:

    <medium-editor :data.sync="blogEntry.description"></medium-editor>

You'll also need to include CSS assets for the Medium Editor package. You can hook it up to your build process, or you can just include them in your HTML like this:

    <link rel="stylesheet" href="node_modules/medium-editor/dist/css/medium-editor.css" media="all">
    <link rel="stylesheet" href="node_modules/medium-editor/dist/css/themes/default.css" media="all">

##Props
 - `data`: The content to edit.


##Events
`vue-medium-editor` listens for a `data-updated` event. When this event is received, the contents of the Medium Editor are reset to the current value of the `data` property. This is needed the Medium Editor library operates on a copy of the data in a content-editable element, and it can not notice changes in the data.

Thus, if you ever need to modify `data` from your code, you'll need to make sure `vue-medium-editor` receives this event to notice your changes.
