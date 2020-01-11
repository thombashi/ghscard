import { CardGeratorInterface } from "./card/interface";
import { AVATAR_ELEMENT_ID, DEFAULT_SEMANTIC_UI_CSS_URL, Margin, JsUrl } from "./const";
import { EmojiProcessorFactory } from "./emoji";
import { createCardGenerator } from "./factory";
import { CardStyle } from "./types";

import $ from "jquery";

namespace CardAttr {
    export namespace Display {
        export const CHART = "chart-display"; // only for repository
        export const TOPICS = "topic-display"; // only for repository
    }

    export const EMOJI = "emoji";
    export const FRAME_COLOR = "color";
    export const STYLE = "card-style";
    export const WIDTH = "card-width";
}

const DEFAULT_CARD_WIDTH_MAPPING = {
    medium: 420,
    small: 380,
    tiny: 340,
};
const DEFAULT_CARD_STYLE: CardStyle = "medium";

export class CardGeneratorManager {
    constructor(private _doc: Document) {}

    public generateCards(): void {
        console.debug(navigator.userAgent);
        let frameCount = 0;

        Array.prototype.forEach.call(this._doc.getElementsByClassName("ghscard"), cardElement => {
            const dataSourcePath: string = cardElement.getAttribute("src");
            let cardStyle: CardStyle;

            if (cardElement.getAttribute(CardAttr.STYLE) !== null) {
                cardStyle = cardElement.getAttribute(CardAttr.STYLE);
            } else {
                console.debug(`${CardAttr.STYLE} attribute not found`);
                cardStyle = DEFAULT_CARD_STYLE;
            }

            $.getJSON(dataSourcePath, cardData => {
                console.info(`--- creating a GitHub card from ${dataSourcePath} ---`);
                console.debug(cardData);

                const cardGenerator: CardGeratorInterface = createCardGenerator(
                    this._doc,
                    cardStyle,
                    cardData,
                    this.getIframeWidth(cardElement.getAttribute(CardAttr.WIDTH), cardStyle),
                    cardElement.getAttribute(CardAttr.FRAME_COLOR),
                    cardElement.getAttribute(CardAttr.Display.CHART),
                    cardElement.getAttribute(CardAttr.Display.TOPICS),
                    EmojiProcessorFactory.create(
                        cardElement.getAttribute(CardAttr.EMOJI),
                        cardData["emojis"]
                    )
                );

                if (cardGenerator == null) {
                    console.error(`skip invalid card data: ${dataSourcePath}`);
                    return;
                }

                let cardFrame = cardGenerator.createCard(frameCount);

                frameCount++;
                cardElement.parentNode.insertBefore(cardFrame, cardElement);
                $(cardFrame).on("load", () => {
                    let card = cardFrame.contentWindow.document.getElementsByTagName("div")[0];

                    if (card === undefined) {
                        return;
                    }

                    //cardFrame.height = `${card.getBoundingClientRect().height + Margin.FRAME * 2}px`;
                    cardFrame.height = `${card.getBoundingClientRect().height + Margin.FRAME}px`;
                    cardFrame.style.visibility = "visible";
                });
            }).fail((jqXHR, textStatus, errorThrown) => {
                console.error(
                    [
                        `failed to execute getJSON: ${textStatus}`,
                        `path: ${dataSourcePath}`,
                        `error: ${errorThrown}`,
                        `response：${jqXHR.responseText}`,
                    ].join("\n")
                );
            });
        });
    }

    private getIframeWidth(cardWidth: string, cardStyle: CardStyle): number {
        let iframeWidth: number;

        if (cardWidth === null) {
            iframeWidth = DEFAULT_CARD_WIDTH_MAPPING[cardStyle];
        } else {
            iframeWidth = Number(cardWidth);
        }

        return iframeWidth;
    }

    /*
    private appendCardCss(cardId: string): void {
        this._doc.head.appendChild(this.createCssElement(
            this._doc, `#${cardId} .ui.card {
                position: fixed;
                height:100%;
            }`));
            //    overflow: hidden;
    }
    */
}
