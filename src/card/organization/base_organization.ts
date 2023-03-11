import { AbstractUserOrgCardGerator } from "../base_user_org";

export class AbstractOrgCardGerator extends AbstractUserOrgCardGerator {
    protected get statsColumnWide(): string {
        return "eight";
    }

    protected createCardHeader(): HTMLElement {
        const header = this.createAnchorElement(
            this.htmlUrl,
            `ui ${this.headerSize} dividing header`
        );

        if (this.getCardData("name")) {
            header.appendChild(this._doc.createTextNode(this.getCardData("name")));

            const subheader: HTMLElement = this.createElement("div", "sub header");
            subheader.appendChild(this._doc.createTextNode(this.getCardData("id")));

            header.appendChild(subheader);
        } else {
            header.appendChild(this._doc.createTextNode(this.getCardData("id")));
        }

        return header;
    }

    protected createStatisticsElement(): HTMLElement {
        const items = this.createElement("div", `ui ${this.infoSize} aligned selection list`);

        if (Number(this.publicRepos) > 0) {
            const item = this.createAnchorElement(`${this.htmlUrl}?tab=repositories`, "item");
            /*
            item.appendChild(this.createElement("i", "book icon"));
            item.appendChild(this.createContentElement([
                this._doc.createTextNode("Repositories"),
                this.createLabelElement(this.publicRepos, this.infoSize),
            ]));
            */
            item.appendChild(this._doc.createTextNode("Repositories"));
            item.appendChild(this.createLabelElement(this.publicRepos, this.infoSize));

            items.appendChild(item);
        }

        if (Number(this.getCardData("public_members_count")) > 0) {
            const item = this.createAnchorElement(
                `//github.com/orgs/${this.getCardData("id")}/people`,
                "item"
            );
            item.appendChild(this._doc.createTextNode("People"));
            item.appendChild(
                this.createLabelElement(this.getCardData("public_members_count"), this.infoSize)
            );

            items.appendChild(item);
        }

        return items;
    }
}
