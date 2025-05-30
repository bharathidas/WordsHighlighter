import { Component, ReactNode, createElement } from "react";
import Highlighter from "react-highlight-words";

export interface WordHighlighterProps {
    activeClassName?:string;
    activeIndex?:number;
    caseSensitive?:boolean;
    highlightClassName?:string;
    searchWords: string[];
    autoEscape?:boolean;
    textToHighlight: string;

}


export class WordHighlighterInput extends Component<WordHighlighterProps> {
   
    render(): ReactNode {
       
        return <Highlighter
        activeClassName={this.props.activeClassName}
        activeIndex={this.props.activeIndex}
        caseSensitive={this.props.caseSensitive}
        highlightClassName={this.props.highlightClassName}
        searchWords={this.props.searchWords}
        autoEscape={this.props.autoEscape}
        textToHighlight={this.props.textToHighlight}
      />;
 }
}
