import { Component, ReactNode, createElement } from "react";
import { WordHighlighterInput } from "./components/WordHighlighterInput";
import { WordsHighlighterPreviewProps } from "../typings/WordsHighlighterProps";

export class preview extends Component<WordsHighlighterPreviewProps> {
    render(): ReactNode {
        const searchwordsvalue=this.props.searchwordskey || "";
        const searchWords = searchwordsvalue.split(/\s/).filter(word => word)
        const textToHighlight=this.props.textToHighlightkey || "";
        return <WordHighlighterInput searchWords={searchWords} textToHighlight={textToHighlight} />;
    }
}

export function getPreviewCss(): string {
    return require("./ui/WordsHighlighter.css");
}
