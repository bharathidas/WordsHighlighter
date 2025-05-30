import { Component, ReactNode, createElement } from "react";
import { WordHighlighterInput } from "./components/WordHighlighterInput";

import { WordsHighlighterContainerProps } from "../typings/WordsHighlighterProps";

import "./ui/WordsHighlighter.css";

export class WordsHighlighter extends Component<WordsHighlighterContainerProps> {
    
    render(): ReactNode {
        const searchwordsvalue=this.props.searchwordskey.value || '[]';
        //const searchWords = searchwordsvalue.split(/\s/).filter(word => word);
        const searchWords=JSON.parse(searchwordsvalue);
        const textToHighlight=this.props.textToHighlightkey.value || "";
        const activeClassName=this.props.activeClassNamekey?.value || "activeClass";
        var activeIndex = 0;
        if(this.props.activeIndexkey?.value!=undefined){
            activeIndex=Number(this.props.activeIndexkey?.value);
        }
        const caseSensitive=this.props.caseSensitivekey?.value;
        const highlightClassName=this.props.highlightclassnamekey?.value || "highlightClass";
        const autoEscape=this.props.autoescapekey;

        return  <WordHighlighterInput 
        activeClassName={activeClassName} 
        activeIndex={activeIndex}
        caseSensitive={caseSensitive}
        highlightClassName={highlightClassName}
        searchWords={searchWords} 
        autoEscape={autoEscape}
        textToHighlight={textToHighlight}/>;
       
    }
}
