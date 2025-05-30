/**
 * This file was generated from WordsHighlighter.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { EditableValue } from "mendix";
import { Big } from "big.js";

export interface WordsHighlighterContainerProps {
    name: string;
    tabIndex?: number;
    id: string;
    textToHighlightkey: EditableValue<string>;
    searchwordskey: EditableValue<string>;
    highlightclassnamekey?: EditableValue<string>;
    activeIndexkey?: EditableValue<Big>;
    autoescapekey: boolean;
    caseSensitivekey?: EditableValue<boolean>;
    activeClassNamekey?: EditableValue<string>;
}

export interface WordsHighlighterPreviewProps {
    readOnly: boolean;
    renderMode: "design" | "xray" | "structure";
    translate: (text: string) => string;
    textToHighlightkey: string;
    searchwordskey: string;
    highlightclassnamekey: string;
    activeIndexkey: string;
    autoescapekey: boolean;
    caseSensitivekey: string;
    activeClassNamekey: string;
}
