Convert Footnotes to Inline Notes for Wordpress
===

This Google Script extracts the content of your footnotes and inserts them inline into the text, originally created to prepare content for entry into Wordpress installation using footnote plugin. Content is wrapped in [note] shortcode

Use
===
To install, do the following:

1. Open the document you'd like to create endnotes in.
2. Go to **Tools > Script Editor** and delete the default `function` text in the editor.
3. Copy the convertFootnotes script and paste it into the editor.
4. Save and close the script and document.
5. Reopen the document, give the script permission to run, and you'll see a new menu item, "Create Endnotes" in your toolbar.

Note: You can reverse this by simply clicking the 'undo' button in the docs menu

License
===
This is provided AS IS under the MIT Open License.

This was adapted from footToEnd by @bennettscience