import { Emoji } from "./const";

export interface EmojiProcessorInterface {
    processEmoji(text: string): string
}

class AbstractEmojiProcessor implements EmojiProcessorInterface {
    public processEmoji(_text: string): string {
        throw new Error("not implemented");
    }

    protected readonly _regexpEmoji = new RegExp(":[a-zA-Z0-9_-]+:", "gm");
}

class EmojiNop extends AbstractEmojiProcessor {
    public processEmoji(text: string): string {
        return text;
    }
}

class EmojiRemover extends AbstractEmojiProcessor {
    public processEmoji(text: string): string {
        return text.replace(this._regexpEmoji, "");
    }
}

class EmojiResolver extends AbstractEmojiProcessor {
    constructor(private emojiMapping) {
        super();
    }

    public processEmoji(text: string): string {
        const matchList: RegExpMatchArray = text.match(this._regexpEmoji);

        if (matchList === null) {
            return text;
        }

        const replaceMapping = new Object();

        for (const emojiText of matchList) {
            const emojiId = emojiText.substr(1, emojiText.length - 2);
            const tag = `<img src='${this.emojiMapping[emojiId]}' width='${Emoji.WIDTH}' height='${Emoji.HEIGHT}'>`;
            replaceMapping[emojiText] = tag;
        }

        for (const emojiText in replaceMapping) {
            text = text.replace(new RegExp(emojiText, "g"), replaceMapping[emojiText]);
        }

        return text;
    }
}

export class EmojiProcessorFactory {
    public static create(processorType: string, emojiMapping: object): EmojiProcessorInterface {
        console.debug(`emoji processor type: ${processorType}`);

        if (processorType === null) {
            return new EmojiResolver(emojiMapping);
        }

        if (processorType === "nop") {
            return new EmojiNop();
        }

        if (processorType === "remove") {
            return new EmojiRemover();
        }

        if (processorType === "resolve") {
            return new EmojiResolver(emojiMapping);
        }

        console.error(`unknown emoji processor type: ${processorType}`);

        return new EmojiNop();
    }
}
