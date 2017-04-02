import {AVATAR_ELEMENT_ID} from "../const";
import {EmojiProcessorInterface} from "../emoji";
import {UiColor, UiSize, UserOrgCardDataKey} from "../types";
import {AbstractCardGerator} from "./base";


export class AbstractUserOrgCardGerator extends AbstractCardGerator {
    protected get avatarColumnWide(): string {
        throw Error("not implemented");
    }

    protected get statsColumnWide(): string {
        throw Error("not implemented");
    }

    protected get htmlUrl(): string {
        return this.getCardData("html_url");
    }

    protected get publicRepos(): string {
        return this.getCardData("public_repos");
    }

    constructor(
            doc: Document, cardData: Object,
            iframeWidth: number,
            color: string,
            emojiProcessor: EmojiProcessorInterface) {
        super(doc, cardData, iframeWidth, color, emojiProcessor);
    }

    protected createStatisticsElement(): HTMLElement {
        throw Error("not implemented");
    }

    protected getCardData(key: UserOrgCardDataKey): string {
        return this._cardData[key];
    }

    protected getScript(): string {
        return [
            `$('#${AVATAR_ELEMENT_ID}.ui.image').popup({`,
            `  on: 'click',`,
            `  inline: true`,
            `});`,
            `$('.ui.images .image').popup();`,
        ].join("\n");
    }

    protected getColor(): UiColor {
        return this.toUiColor(this.color);
    }

    protected createCardContent(): HTMLElement {
        return this._createCardContent();
    }

    protected _createCardContent(): HTMLElement {
        const segmentClassName = "ui vertical basic compact segment";
        let content = this.createContentElement([this.createCardHeader()]);

        {
            let grid = this.createElement("div", "ui grid");

            {
                let avatarColumn = this.createElement(
                    "div", `${this.avatarColumnWide} wide center aligned column`);
                avatarColumn.appendChild(this.createAvatar());
                avatarColumn.appendChild(this.createPopup());
                grid.appendChild(avatarColumn);
            }

            {
                let statsColumn = this.createElement(
                    "div", `${this.statsColumnWide} wide left aligned column`);
                const statsElement = this.createStatisticsElement();

                if (statsElement) {
                    statsColumn.appendChild(statsElement);
                }

                grid.appendChild(statsColumn);
            }

            content.appendChild(this.createElementWithChild(segmentClassName, [grid]));
        }

        {
            const descriptionElement = this.createDescription(this.getCardData("description"));
            if (descriptionElement) {
                content.appendChild(this.createElementWithChild(
                    segmentClassName, [descriptionElement]));
            }
        }

        {
            const userInfoList = this.createUserInfoList();
            if (userInfoList) {
                content.appendChild(this.createElementWithChild(segmentClassName, [userInfoList]));
            }
        }

        return content;
    }

    protected _createCardContentTiny(): HTMLElement {
        const segment_style = "ui vertical basic compact segment";
        let content = this.createContentElement([this.createCardHeader()]);

        {
            let grid = this.createElement("div", "ui grid");

            {
                let avatarColumn = this.createElement(
                    "div", `${this.avatarColumnWide} wide center aligned column`);
                avatarColumn.appendChild(this.createAvatar());
                avatarColumn.appendChild(this.createPopup());
                grid.appendChild(avatarColumn);
            }

            {
                let userInfoColumn = this.createElement(
                    "div", `nine wide left aligned column`);
                userInfoColumn.appendChild(this.createUserInfoList());
                grid.appendChild(userInfoColumn);
            }

            let segment = this.createElement("div", segment_style);
            segment.appendChild(grid);

            content.appendChild(segment);
        }

        {
            const bioElement = this.createDescription(this.getCardData("description"));
            if (bioElement) {
                let segment = this.createElement("div", segment_style);
                segment.appendChild(bioElement);

                content.appendChild(segment);
            }
        }

        return content;
    }

    protected createExtraCardContent(): HTMLElement {
        return null;
    }

    protected createAvatar(): HTMLElement {
        let avatar = this.createImageElement(
            this.getCardData("avatar_url"), "ui medium rounded image");
        avatar.id = AVATAR_ELEMENT_ID;

        return avatar;
    }

    protected createPopupInfoList(): HTMLElement {
        return this._createInfoList({
            "created_at": true,
            "updated_at": true,
        }, this.popupSize);
    }

    protected createCompanyElement(className: string): HTMLElement {
        const companyName = this.getCardData("company");

        if (!companyName) {
            return null;
        }

        let company = this.createElement("div", className);
        company.title = "Company";
        company.appendChild(this.createElement("i", "users icon"));
        company.appendChild(this.createContentElement(
            [this._doc.createTextNode(this.escapeHtml(companyName))]
        ));

        return company;
    }

    protected createLocationElement(className: string): HTMLElement {
        const locationName = this.getCardData("location");

        if (!locationName) {
            return null;
        }

        let location = this.createElement("div", className);
        location.title = "Location";
        location.appendChild(this.createElement("i", "marker icon"));
        location.appendChild(this.createContentElement(
            [this._doc.createTextNode(this.escapeHtml(locationName))]
        ));

        return location;
    }

    protected createBlogElement(className: string): HTMLElement {
        const url = this.getCardData("blog");

        if (!url) {
            return null;
        }

        let blogLink = this.createAnchorElement(url, "content");
        blogLink.appendChild(this._doc.createTextNode(this.escapeHtml(url)));

        return this.createElementWithChild(className, [
            this.createElement("i", "linkify icon"), blogLink]);
    }

    protected createEmailElement(className: string): HTMLElement {
        return super._createEmailElement(this.getCardData("email"), className);
    }

    protected _createInfoList(displayMapping: Object, size: UiSize = null): HTMLElement {
        if (size === null) {
            size = this.infoSize;
        }

        const itemClassName = "item";
        let infoList = this.createElement("div", `ui ${size} list`);

        if (displayMapping["company"]) {
            const element = this.createCompanyElement(itemClassName);
            if (element) {
                infoList.appendChild(element);
            }
        }

        if (displayMapping["location"]) {
            const element = this.createLocationElement(itemClassName);
            if (element) {
                infoList.appendChild(element);
            }
        }

        if (displayMapping["email"]) {
            const element = this.createEmailElement(itemClassName);
            if (element) {
                infoList.appendChild(element);
            }
        }

        if (displayMapping["blog"]) {
            const element = this.createBlogElement(itemClassName);
            if (element) {
                infoList.appendChild(element);
            }
        }

        if (displayMapping["created_at"]) {
            infoList.appendChild(this.createDateTimeElement(
                "created_at", "Joined on", "wait icon", itemClassName));
        }

        if (displayMapping["updated_at"]) {
            infoList.appendChild(this.createDateTimeElement(
                "updated_at", "Updated at", "history icon", itemClassName));
        }

        if (infoList.children.length === 0) {
            infoList.appendChild(
                this.createDateTimeElement("created_at", "Joined on", "wait icon", itemClassName));
        }

        return infoList;
    }

    protected createUserInfoList(): HTMLElement {
        return this._createInfoList({
            "company": true,
            "location": true,
            "email": true,
            "blog": true,
        });
    }
}
