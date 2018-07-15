import { CardGeratorInterface } from "./card/interface";
import { MediumOrgCardGerator } from "./card/organization/medium";
import { SmallOrgCardGerator } from "./card/organization/small";
import { TinyOrgCardGerator } from "./card/organization/tiny";
import { MediumRepoCardGerator } from "./card/repository/medium";
import { SmallRepoCardGerator } from "./card/repository/small";
import { TinyRepoCardGerator } from "./card/repository/tiny";
import { MediumUserCardGerator } from "./card/user/medium";
import { SmallUserCardGerator } from "./card/user/small";
import { TinyUserCardGerator } from "./card/user/tiny";
import { EmojiProcessorInterface } from "./emoji";
import { CardStyle, CardType, ElementDisplay } from "./types";

export function createCardGenerator(
    doc: Document,
    cardStyle: CardStyle,
    cardData: Object,
    iframeWidth: number,
    color: string,
    chartDisplay: ElementDisplay,
    topicDisplay: ElementDisplay,
    emojiProcessor: EmojiProcessorInterface
): CardGeratorInterface {
    const cardType: CardType = cardData["card_type"].toLowerCase();

    console.debug([
        "createCardGenerator:",
        `  chartDisplay: ${chartDisplay}`,
        `  topicDisplay: ${topicDisplay}`,
    ]);

    switch (cardType) {
        case "organization": {
            switch (cardStyle) {
                case "medium": {
                    return new MediumOrgCardGerator(
                        doc,
                        cardData,
                        iframeWidth,
                        color,
                        emojiProcessor
                    );
                }
                case "small": {
                    return new SmallOrgCardGerator(
                        doc,
                        cardData,
                        iframeWidth,
                        color,
                        emojiProcessor
                    );
                }
                case "tiny": {
                    return new TinyOrgCardGerator(
                        doc,
                        cardData,
                        iframeWidth,
                        color,
                        emojiProcessor
                    );
                }
                default: {
                    console.error(`invalid card style: type=${cardType}, style=${cardStyle}`);
                    return null;
                }
            }
        }
        case "repository": {
            switch (cardStyle) {
                case "medium": {
                    return new MediumRepoCardGerator(
                        doc,
                        cardData,
                        iframeWidth,
                        color,
                        chartDisplay,
                        topicDisplay,
                        emojiProcessor
                    );
                }
                case "small": {
                    return new SmallRepoCardGerator(
                        doc,
                        cardData,
                        iframeWidth,
                        color,
                        chartDisplay,
                        topicDisplay,
                        emojiProcessor
                    );
                }
                case "tiny": {
                    return new TinyRepoCardGerator(
                        doc,
                        cardData,
                        iframeWidth,
                        color,
                        chartDisplay,
                        topicDisplay,
                        emojiProcessor
                    );
                }
                default: {
                    console.error(`invalid card style: type=${cardType}, style=${cardStyle}`);
                    return null;
                }
            }
        }
        case "user": {
            switch (cardStyle) {
                case "medium": {
                    return new MediumUserCardGerator(
                        doc,
                        cardData,
                        iframeWidth,
                        color,
                        emojiProcessor
                    );
                }
                case "small": {
                    return new SmallUserCardGerator(
                        doc,
                        cardData,
                        iframeWidth,
                        color,
                        emojiProcessor
                    );
                }
                case "tiny": {
                    return new TinyUserCardGerator(
                        doc,
                        cardData,
                        iframeWidth,
                        color,
                        emojiProcessor
                    );
                }
                default: {
                    console.error(`invalid card style: type=${cardType}, style=${cardStyle}`);
                    return null;
                }
            }
        }
        default: {
            console.error(`invalid card type: ${cardType}`);
            return null;
        }
    }
}
