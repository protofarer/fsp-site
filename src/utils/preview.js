/* eslint-disable */
var CustomPreview = createClass({
  render: function () {
    var entry = this.props.entry;

    // Add 'prose' class to the div for the tailwind typography styles
    return h(
      'div',
      {
        className:
          ' prose prose-h1:font-bold prose-h1:text-xl prose-a:text-blue-600 prose-p:text-justify prose-img:rounded-xl prose-headings:text-center',
      },
      this.props.widgetFor('body')
    );
  },
});

// Register the custom preview template for a specific collection
CMS.registerPreviewTemplate('services', CustomPreview);
CMS.registerPreviewTemplate('coaches', CustomPreview);
console.log('RAN PREVIEW.JS');
