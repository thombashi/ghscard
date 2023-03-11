import { AbstractUserOrgCardGerator } from "../base_user_org";

export class AbstractUserCardGerator extends AbstractUserOrgCardGerator {
    protected get statsColumnWide(): string {
        return "seven";
    }

    protected get followers(): string {
        return this.getCardData("followers");
    }

    protected get following(): string {
        return this.getCardData("following");
    }

    protected get publicGists(): string {
        return this.getCardData("public_gists");
    }

    protected get stars(): string {
        return this.getCardData("stars");
    }

    protected createCardHeader(): HTMLElement {
        const header = this.createAnchorElement(
            this.htmlUrl,
            `ui ${this.headerSize} dividing header`
        );

        if (this.getCardData("profile_name")) {
            header.appendChild(this._doc.createTextNode(this.getCardData("profile_name")));

            const subheader: HTMLElement = this.createElement("div", "sub header");
            subheader.appendChild(this._doc.createTextNode(this.getCardData("id")));

            header.appendChild(subheader);
        } else {
            header.appendChild(this._doc.createTextNode(this.getCardData("id")));
        }

        return header;
    }

    protected createExtraCardContent(): HTMLElement {
        const organizationsContent = this.createOrganizations();
        let validContentCount = 0;

        if (organizationsContent) {
            validContentCount++;
        }

        if (validContentCount === 0) {
            return null;
        }

        const extraContent = this.createElement("div", "extra content");

        if (organizationsContent) {
            const header = this.createElement("div", "ui tiny header");
            header.appendChild(this._doc.createTextNode("Organizations"));

            const organizationSegment = this.createExtraContentSegment(validContentCount);
            organizationSegment.appendChild(header);
            organizationSegment.appendChild(organizationsContent);

            extraContent.appendChild(organizationSegment);
        }

        return extraContent;
    }

    private createExtraContentSegment(contenetCount: number): HTMLElement {
        if (contenetCount <= 1) {
            return this.createElement("div", "ui vertical basic compact segment");
        }

        return this.createElement("div", "ui vertical segment");
    }

    protected createStatisticsElement(): HTMLElement {
        const items = this.createElement("div", `ui ${this.infoSize} aligned selection list`);

        if (Number(this.publicRepos) > 0) {
            const item = this.createAnchorElement(this.htmlUrl + "?tab=repositories", "item");
            item.appendChild(this._doc.createTextNode("Repositories"));
            item.appendChild(this.createLabelElement(this.publicRepos, this.infoSize));

            items.appendChild(item);
        }

        if (Number(this.stars) > 0) {
            const item = this.createAnchorElement(this.htmlUrl + "?tab=stars", "item");
            item.appendChild(this._doc.createTextNode("Stars"));
            item.appendChild(this.createLabelElement(this.stars, this.infoSize));

            items.appendChild(item);
        }

        if (Number(this.followers) > 0) {
            const item = this.createAnchorElement(this.htmlUrl + "?tab=followers", "item");
            item.appendChild(this._doc.createTextNode("Followers"));
            item.appendChild(this.createLabelElement(this.followers, this.infoSize));

            items.appendChild(item);
        }

        if (Number(this.following) > 0) {
            const item = this.createAnchorElement(this.htmlUrl + "?tab=following", "item");
            item.appendChild(this._doc.createTextNode("Following"));
            item.appendChild(this.createLabelElement(this.following, this.infoSize));

            items.appendChild(item);
        }

        if (Number(this.publicGists) > 0) {
            const item = this.createAnchorElement(
                `//gist.github.com/${this.getCardData("id")}`,
                "item"
            );
            item.appendChild(this._doc.createTextNode("Gists"));
            item.appendChild(this.createLabelElement(this.publicGists, this.infoSize));

            items.appendChild(item);
        }

        return items;
    }

    protected createOrganizations(): HTMLElement {
        const orgList = this.createElement("div", "ui mini rounded images");

        Array.prototype.forEach.call(this.getCardData("organizations"), (organizationData) => {
            const orgLink = this.createAnchorElement(organizationData["html_url"], "ui image");
            orgLink.setAttribute("data-content", organizationData["name"]);
            orgLink.setAttribute("data-position", "top center");
            orgLink.setAttribute("data-variation", "inverted mini");
            orgLink.appendChild(this.createImageElement(organizationData["avatar_url"]));

            orgList.appendChild(orgLink);
        });

        if (orgList.children.length === 0) {
            return null;
        }

        return orgList;
    }
}
