import React from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
import Heading from "@ckeditor/ckeditor5-heading/src/heading";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic";
import Underline from "@ckeditor/ckeditor5-basic-styles/src/underline";
import Link from "@ckeditor/ckeditor5-link/src/link";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph";
import InlineEditor from "@ckeditor/ckeditor5-editor-inline/src/inlineeditor.js";
import Alignment from "@ckeditor/ckeditor5-alignment/src/alignment.js";
import Autoformat from "@ckeditor/ckeditor5-autoformat/src/autoformat.js";
import BlockQuote from "@ckeditor/ckeditor5-block-quote/src/blockquote.js";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold.js";
import CKFinder from "@ckeditor/ckeditor5-ckfinder/src/ckfinder.js";
import CKFinderUploadAdapter from "@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter.js";
import Code from "@ckeditor/ckeditor5-basic-styles/src/code.js";
import CodeBlock from "@ckeditor/ckeditor5-code-block/src/codeblock.js";
import FontBackgroundColor from "@ckeditor/ckeditor5-font/src/fontbackgroundcolor.js";
import FontColor from "@ckeditor/ckeditor5-font/src/fontcolor.js";
import FontFamily from "@ckeditor/ckeditor5-font/src/fontfamily.js";
import FontSize from "@ckeditor/ckeditor5-font/src/fontsize.js";
import HorizontalLine from "@ckeditor/ckeditor5-horizontal-line/src/horizontalline.js";
import Indent from "@ckeditor/ckeditor5-indent/src/indent.js";
import List from "@ckeditor/ckeditor5-list/src/list.js";
import PasteFromOffice from "@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice";
import Table from "@ckeditor/ckeditor5-table/src/table.js";
import TableToolbar from "@ckeditor/ckeditor5-table/src/tabletoolbar.js";
import TextTransformation from "@ckeditor/ckeditor5-typing/src/texttransformation.js";
import { connect } from "react-redux";
import { setDataValue } from "../actions";
import { Paragraph as PText, Card } from "../../../../components";
import "./component.css";
import { createStructuredSelector } from "reselect";
import { selectPost } from "../selectors";

class ContentEditor extends React.Component {
  constructor(props) {
    super(props);

    this.editor = null;

    this.state = {
      editorData: this.props.post.content,
    };

    this.editorConfig = {
      plugins: [
        Alignment,
        Autoformat,
        BlockQuote,
        Bold,
        CKFinder,
        CKFinderUploadAdapter,
        Code,
        CodeBlock,
        Underline,
        Essentials,
        FontBackgroundColor,
        FontColor,
        FontFamily,
        FontSize,
        Heading,
        HorizontalLine,
        Indent,
        Italic,
        Link,
        List,
        Paragraph,
        PasteFromOffice,
        Table,
        TableToolbar,
        TextTransformation,
      ],
      toolbar: [
        "heading",
        "|",
        "bold",
        "italic",
        "underline",
        "|",
        "link",
        "insertTable",
        "alignment",
        "fontColor",
        "fontFamily",
        // "ckfinder",
        "fontSize",
        "indent",
        "autoformat",
        "code",
        "codeblock",
        "blockquote",
        "list",
        "mediaEmbed",
        "pastefromoffice",
        "textransformation",
        "|",
        "undo",
        "redo",
      ],
      table: {
        contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
      },
    };

    this.handleEditorDataChange = this.handleEditorDataChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.editorData !== nextProps.post.content) {
      this.setState({ editorData: nextProps.post.content });
    }
  }

  handleEditorDataChange(evt, editor) {
    this.setState({
      editorData: editor.getData(),
    });
    this.props.setDataValue({
      key: "content",
      value: this.state.editorData,
    });
  }

  render() {
    return (
      <div>
        <PText color="grey" textAlign="center">
          Start Writing...
        </PText>
        <Card hoverable={false} bodyStyle={{ padding: 0 }}>
          <CKEditor
            editor={InlineEditor}
            data={this.state.editorData}
            config={this.editorConfig}
            onChange={this.handleEditorDataChange}
          />
        </Card>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  post: selectPost,
});

export default connect(mapStateToProps, { setDataValue })(ContentEditor);
