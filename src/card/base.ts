import { CARD_ELEMENT_ID, Margin, DEFAULT_SEMANTIC_UI_CSS_URL, JsUrl } from "../const";
import { EmojiProcessorInterface } from "../emoji";
import { DateTimeKey, UiColor, UiSize } from "../types";
import { CardGeratorInterface } from "./interface";

import dayjs from "dayjs";

export class AbstractCardGerator implements CardGeratorInterface {
    protected get headerSize(): UiSize {
        throw Error("not implemented");
    }

    protected get htmlUrl(): string {
        throw Error("not implemented");
    }

    protected get infoSize(): UiSize {
        throw Error("not implemented");
    }

    protected get popupSize(): UiSize {
        throw Error("not implemented");
    }

    protected get color(): string {
        return this._color;
    }

    protected get iframeWidth(): number {
        return this._iframeWidth;
    }

    protected get cardWidth(): number {
        return this.iframeWidth - Margin.FRAME * 2;
    }

    constructor(
        protected _doc: Document,
        protected _cardData: object,
        private _iframeWidth: number,
        private _color: string,
        protected _emojiProcessor: EmojiProcessorInterface
    ) {}

    public createCard(uniqueFrameNumber: number): HTMLIFrameElement {
        const cardFrame = this._doc.createElement("iframe");

        cardFrame.id = `__ghscard_iframe${uniqueFrameNumber}__`;
        cardFrame.scrolling = "no";
        cardFrame.width = `${this.iframeWidth}px`;
        cardFrame.style.visibility = "hidden";
        cardFrame.style.border = "0px";
        // cardFrame.style.overflow = "visible";
        // this.appendCardCss(cardFrame.id);

        const iframeBody = this._doc.createElement("body");
        iframeBody.appendChild(this.createCardElement());
        iframeBody.appendChild(this.createScriptElement());

        const html = this.createHeaderElement().outerHTML + iframeBody.outerHTML;
        (<any>cardFrame).srcdoc = html;

        return cardFrame;
    }

    protected isDisplayChart(): boolean {
        return false;
    }

    protected isDisplayCommitChart(): boolean {
        return false;
    }

    private createCardElement(): HTMLElement {
        const card: HTMLElement = this.createElement("div", `ui ${this.getColor()} card`);
        card.id = CARD_ELEMENT_ID;
        card.style.margin = `${Margin.CARD_CONTENT}px`;
        card.appendChild(this.createCardContent());

        const extraCardContent = this.createExtraCardContent();
        if (extraCardContent !== null) {
            card.appendChild(extraCardContent);
        }

        return card;
    }

    protected getColor(): UiColor {
        throw Error("not implemented");
    }

    protected getScript(): string {
        throw Error("not implemented");
    }

    protected createCardHeader(): HTMLElement {
        throw Error("not implemented");
    }

    protected createCardContent(): HTMLElement {
        throw Error("not implemented");
    }

    protected createExtraCardContent(): HTMLElement {
        throw Error("not implemented");
    }

    private createHeaderElement(): HTMLElement {
        const header = this._doc.createElement("header");
        header.appendChild(this.createScriptSrcElement(JsUrl.JQUERY));
        header.appendChild(
            this.createStyleSheetLinkElement(this._doc, DEFAULT_SEMANTIC_UI_CSS_URL)
        );
        header.appendChild(this.createScriptSrcElement(JsUrl.SEMANTIC_UI));

        if (this.isDisplayChart()) {
            header.appendChild(this.createScriptSrcElement(JsUrl.MOMENT));
            header.appendChild(this.createScriptSrcElement(JsUrl.CHART));
            header.appendChild(this.createScriptSrcElement(JsUrl.PLEASE));
        }

        header.appendChild(
            this.createCssElement(this._doc, `.ui.card { width: ${this.cardWidth}px; }`)
        );

        return header;
    }

    private createCssElement(doc: Document, cssText: string) {
        const css = doc.createElement("style");
        css.type = "text/css";
        css.appendChild(doc.createTextNode(cssText));

        return css;
    }

    private createStyleSheetLinkElement(doc: Document, href: string) {
        const link = doc.createElement("link");
        link.rel = "stylesheet";
        link.href = href;

        return link;
    }

    protected createElement(tagName: string, className: string): HTMLElement {
        const element: HTMLElement = this._doc.createElement(tagName);
        element.className = className;

        return element;
    }

    protected createAnchorElement(href: string, className: string = null): HTMLAnchorElement {
        const element: HTMLAnchorElement = this._doc.createElement("a");
        if (className) {
            element.className = className;
        }
        element.href = href;
        element.target = "__top";

        return element;
    }

    protected createImageElement(src: string, className: string = null): HTMLImageElement {
        const element: HTMLImageElement = this._doc.createElement("img");
        if (className) {
            element.className = className;
        }
        element.src = src;

        return element;
    }

    protected createLabelElement(text: string, size: UiSize): HTMLElement {
        const label = this.createElement("div", `ui circular horizontal ${size} label`);

        label.style.marginLeft = `${Margin.LABEL}px`;
        label.appendChild(this._doc.createTextNode(text));

        return label;
    }

    protected createElementWithChild<T>(className: string, childNodeArray: Array<T>): HTMLElement {
        const element = this.createElement("div", className);

        Array.prototype.forEach.call(childNodeArray, (childNode) => {
            if (childNode) {
                element.appendChild(childNode);
            }
        });

        return element;
    }

    protected createContentElement<T>(childNodeArray: Array<T>): HTMLElement {
        const content = this.createElement("div", "content");

        Array.prototype.forEach.call(childNodeArray, (childNode) => {
            if (childNode) {
                content.appendChild(childNode);
            }
        });

        return content;
    }

    protected createColumn(element: HTMLElement, wide = ""): HTMLElement {
        const column = this.createElement("div", `${wide} column`);
        column.appendChild(element);

        return column;
    }

    protected createDescription(text: string): HTMLElement {
        if (!text) {
            return null;
        }

        const descElement = this.createElement("div", "description");
        descElement.innerHTML = this._emojiProcessor.processEmoji(this.escapeHtml(text));

        return descElement;
    }

    protected createDateTimeElement(
        key: DateTimeKey,
        prefix: string,
        iconName: string,
        className: string
    ): HTMLElement {
        const datetimeValue = this._cardData[key];
        if (!datetimeValue) {
            return null;
        }

        const datetimeElement: HTMLElement = this.createElement("div", className);
        datetimeElement.appendChild(this.createElement("i", iconName));
        datetimeElement.appendChild(
            this.createContentElement([
                this._doc.createTextNode(`${prefix} ${dayjs(datetimeValue).format("YYYY-MM-DD")}`),
            ])
        );

        return datetimeElement;
    }

    protected createPopup(): HTMLElement {
        const popup = this.createElement("div", "ui special popup");
        popup.appendChild(this.createPopupInfoList());

        return popup;
    }

    protected createPopupInfoList(): HTMLElement {
        throw Error("not implemented");
    }

    private createScriptElement(): HTMLElement {
        const scriptContent = ["$(window).on(\"load\", function() {", this.getScript(), "});"].join(
            "\n"
        );

        const scriptElement = this._doc.createElement("script");
        scriptElement.innerHTML = scriptContent;

        return scriptElement;
    }

    private createScriptSrcElement(src: string, charset = null) {
        const script = this._doc.createElement("script");
        script.src = src;

        if (charset) {
            script.charset = charset;
        }

        return script;
    }

    protected _createEmailElement(emailAddress: string, className: string): HTMLElement {
        if (!emailAddress) {
            return null;
        }

        const mailLink = this.createAnchorElement(`mailto:${emailAddress}`, "content");
        mailLink.appendChild(this._doc.createTextNode(this.escapeHtml(emailAddress)));

        const email = this.createElement("div", className);
        email.title = "email address";
        email.appendChild(this.createElement("i", "mail icon"));
        email.appendChild(mailLink);

        return email;
    }

    protected escapeHtml(text: string): string {
        return text
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    }

    protected toUiColor(color: string): UiColor {
        const validColorArray = [
            "red",
            "orange",
            "yellow",
            "olive",
            "green",
            "teal",
            "blue",
            "violet",
            "purple",
            "pink",
            "brown",
            "grey",
            "black",
        ];
        const defaultColor = "grey";

        if (color == null) {
            return defaultColor;
        }

        color = color.toLowerCase();
        if (validColorArray.indexOf(color) >= 0) {
            return validColorArray[color];
        }

        console.warn(`unexpected color: (${color})`);

        return defaultColor;
    }
}
