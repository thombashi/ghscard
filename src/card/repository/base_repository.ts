import {AVATAR_ELEMENT_ID, CARD_ELEMENT_ID} from "../../const";
import {EmojiProcessorInterface} from "../../emoji";
import {ElementDisplay, UiColor, UiSize, RepoCardDataKey} from "../../types";
import {AbstractCardGerator} from "../base";

import * as moment from "moment";


namespace CanvasId {
    export const COMMITS_CHART = "__commits_chart_canvas__";
    export const ISSUES_CHART = "__issues_chart_canvas__";
    export const LANGUAGES_CHART = "__language_chart_canvas__";
}

export class AbstractRepositoryCardGerator extends AbstractCardGerator {
    protected get versionLabelSize(): UiSize {
        throw Error("not implemented");
    }

    protected get topicSize(): UiSize {
        throw Error("not implemented");
    }

    protected get htmlUrl(): string {
        return this.getCardData("html_url");
    }

    private get language(): string{
        return this.getCardData("language");
    }

    protected get lineChartHeight(): number {
        throw Error("not implemented");
    }

    protected get pieChartHeight(): number {
        throw Error("not implemented");
    }

    protected get pieChartLegendFontSize(): number {
        throw Error("not implemented");
    }

    protected get chartTitleFontSize(): number {
        throw Error("not implemented");
    }

    protected get chartTickFontSize(): number {
        throw Error("not implemented");
    }

    private get releaseTagColor(): UiColor {
        return "blue";
    }

    constructor(
            doc: Document, cardData: Object,
            iframeWidth: number,
            color: string,
            protected chartDisplay: ElementDisplay,
            protected topicDisplay: ElementDisplay,
            emojiProcessor: EmojiProcessorInterface) {
        super(doc, cardData, iframeWidth, color, emojiProcessor);

        this.colorMap = {
            "a": "red",
            "b": "orange",
            "c": "yellow",
            "d": "olive",
            "e": "green",
            "f": "teal",
            "g": "blue",
            "h": "violet",
            "i": "purple",
            "j": "pink",
            "k": "brown",
            "l": "grey",
            "m": "black",
            "n": "red",
            "o": "orange",
            "p": "yellow",
            "q": "olive",
            "r": "green",
            "s": "teal",
            "t": "blue",
            "u": "violet",
            "v": "purple",
            "w": "pink",
            "x": "brown",
            "y": "grey",
            "z": "black",
        };
        this.colorMap["C"] = "black";
        this.colorMap["C++"] = "pink";
        this.colorMap["Go"] = "teal";
        this.colorMap["HTML"] = "red";
        this.colorMap["Java"] = "brown";
        this.colorMap["Swift"] = "orange";
        this.colorMap["JavaScript"] = "yellow";
        this.colorMap["Python"] = "blue";
        this.colorMap["Ruby"] = "purple";
        this.colorMap["Shell"] = "green";
    }

    protected isDisplayChart(): Boolean {
        if (this.chartDisplay === "none") {
            return false;
        }

        return true;
    }

    protected isDisplayCommitChart(): Boolean {
        return this.isDisplayChart() && Number(this.getCardData("commits_last_year")) > 0;
    }

    protected isDisplayTopic(): Boolean {
        if (this.topicDisplay === "none") {
            return false;
        }

        if (this.getCardData("topics") == null) {
            return false;
        }

        return this.getCardData("topics").length > 0;
    }

    protected getScript(): string {
        const popupScript = [
            `$('#${AVATAR_ELEMENT_ID}.ui.image').popup({`,
                `on: 'click',`,
                `inline: true,`,
            `});`,
        ].join("\n");

        let scriptArray = [
            popupScript,
        ];

        if (this.isDisplayChart()) {
            scriptArray.push(`$('.ui.accordion').accordion();`);
            scriptArray.push(this.getGlobalChartOption());
            scriptArray.push(this.createIssuesLabeChartScript());
            scriptArray.push(this.createLanguageLabeChartScript());

            if (this.isDisplayCommitChart()) {
                scriptArray.push(this.createCommitChartScript());
            }
        }

        return scriptArray.join("\n");
    }

    private getGlobalChartOption(): string {
        return "Chart.defaults.global.defaultFontSize = 10;";
    }

    private getPieChartOption(): Object {
        return {
            responsive: false,
            legend: {
                position: "right",
                labels: {
                    fontSize: this.pieChartLegendFontSize,
                }
            },
        };
    }

    private createIssuesLabeChartScript(): string {
        let issuesLabelArray = [];
        if (this.getCardData("has_issues")) {
            for (let issueLabel of this.getCardData("open_issues")["labels"]) {
                issuesLabelArray.push(`'${issueLabel}'`);
            }
        }

        return `
var issuesCanvas = document.getElementById('${CanvasId.ISSUES_CHART}');
if (issuesCanvas) {
    issuesCanvas.width = ${this.getChartWidth()};
    let myPieChart = new Chart(issuesCanvas, {
        type: 'pie',
        data: {
            labels: [${issuesLabelArray.join(", ")}],
            datasets: [{
                data: [${this.getCardData("open_issues")["data"]}],
                backgroundColor: Please.make_color({
                    colors_returned: ${this.getCardData("open_issues_count")},
                }),
            }]
        },
        options: ${JSON.stringify(this.getPieChartOption())},
    });
}`;
    }

    private createLanguageLabeChartScript(): string {
        let languageLabelArray = [];
        for (let languageLabel of this.getCardData("languages")["labels"]) {
            languageLabelArray.push(`'${languageLabel}'`);
        }

        return `
var languageCanvas = document.getElementById('${CanvasId.LANGUAGES_CHART}');

if (languageCanvas) {
    languageCanvas.width = ${this.getChartWidth()};
    let myPieChart = new Chart(languageCanvas, {
        type: 'pie',
        data: {
            labels: [${languageLabelArray.join(", ")}],
            datasets: [{
                data: [${this.getCardData("languages")["data"]}],
                backgroundColor: Please.make_color({
                    colors_returned: ${this.getCardData("languages")["labels"].length},
                }),
            }]
        },
        options: ${JSON.stringify(this.getPieChartOption())},
    });
}
`;
    }

    private createCommitChartScript(): string {
        let fetchDate = moment(this.getCardData("fetched_at"));
        let dateArray = [];

        for (let i = 0; i < 52; i++) {
            dateArray.push(`moment('${fetchDate.format("YYYY-MM-DD")}').toDate()`);
            fetchDate.subtract(1, "weeks");
        }
        dateArray.reverse();

        const script = `
var commitsCanvas = document.getElementById('${CanvasId.COMMITS_CHART}');
if (commitsCanvas) {
    commitsCanvas.width = ${this.getChartWidth()};
    var commitsChart = new Chart(commitsCanvas, {
        type: 'line',
        data: {
            labels: [${dateArray.join(", ")}],
            datasets: [{
                label: 'Commits',
                data: [${this.getCardData("participation")}],
                fill: true,
                backgroundColor: 'rgba(136, 211, 161, 0.9)',
                borderWidth: 0,
                pointRadius: 0.5,
                pointHitRadius: 8,
                showLine: true,
            }]
        },
        options: {
            responsive: false,
            title: {
                display: true,
                fontSize: ${this.chartTitleFontSize},
                text: '${this.getCardData("commits_last_year")} commits in the last year'
            },
            legend: { display: false },
            scales:{
                xAxes: [{
                    type: 'time',
                    time: { format: 'MM/YYYY', tooltipFormat: 'YYYY wo [week]' },
                    gridLines: { display: false },
                    ticks: { minRotation: 25, fontSize: ${this.chartTickFontSize} },
                }],
                yAxes: [{
                    ticks: { min: 0 },
                    scaleLabel: { display: true, labelString: 'Commits' },
                }],
            },
        }
    });
}`;
        return script;
    }

    protected createCardHeader(): HTMLElement {
        let header = this.createElement("div", `ui dividing ${this.headerSize} header`);
        header.appendChild(this.createOwnerAvatar());
        header.appendChild(this.createPopup());

        let subheaderText = this.getCardData("owner_name");
        if (subheaderText == null) {
            subheaderText = this.getCardData("organization")["name"];
        }
        if (subheaderText != null) {
            let subheader = this.createElement("div", "sub header");
            subheader.appendChild(this._doc.createTextNode(subheaderText));

            header.appendChild(this.createContentElement([
                this.createRepositoryName(), subheader]));
        }

        const latest_tag = this.getCardData("latest_tag");
        if (typeof latest_tag === "string" && latest_tag) {
            header.appendChild(this.createTagLabel());
        }

        return header;
    }

    private getChartWidth(): number {
        const marginWidth = 32;
        const cardWidth = this.cardWidth;
        const chartWidth = cardWidth - marginWidth;

        return chartWidth > marginWidth ? chartWidth : cardWidth;
    }

    private getCardData(key: RepoCardDataKey): string {
        return this._cardData[key];
    }

    protected getColor(): UiColor {
        if (this.color != null) {
            return this.toUiColor(this.color);
        }

        const defaultColor: UiColor = "grey";
        if (this.language == null) {
            return defaultColor;
        }

        let color: UiColor = this.colorMap[this.language];
        if (typeof color !== "undefined") {
            return color;
        }

        color = this.colorMap[this.language.charAt(0).toLowerCase()];
        if (typeof color !== "undefined") {
            return color;
        }

        return defaultColor;
    }

    private getDescription(): string {
        const text = this.getCardData("description");
        if (text == null) {
            return "no description";
        }

        return text;
    }

    protected createCardContent(): HTMLElement {
        const segmentClassName = "ui vertical basic compact segment";

        let childArray = [
            this.createCardHeader(),
            this.createElementWithChild(
                segmentClassName, [this.createDescription(this.getDescription())]),
        ];

        {
            let infoArray = [];

            const cardInfoList = this.createCardInfoList();
            if (cardInfoList) {
                infoArray.push(cardInfoList);
            }

            const detailInfoList = this.createDetailInfoList();
            if (detailInfoList) {
                infoArray.push(detailInfoList);
            }

            if (infoArray.length > 0) {
                childArray.push(this.createElementWithChild(
                    segmentClassName, infoArray));
            }
        }

        if (this.isDisplayCommitChart()) {
            childArray.push(this.createElementWithChild(
                segmentClassName, [this.createCommitChart()]));
        }

        if (this.isDisplayTopic()) {
            let topicsLabelList = [];
            for (let labelText of this.getCardData("topics")) {
                topicsLabelList.push(this.createTopicLabelElement(labelText, this.topicSize));
            }
            if (topicsLabelList.length > 0) {
                childArray.push(this.createElementWithChild(
                    segmentClassName, topicsLabelList));
            }
        }

        return this.createContentElement(childArray);
    }

    private createCommitChart(): HTMLElement {
        let canvas = this._doc.createElement("canvas");
        canvas.id = CanvasId.COMMITS_CHART;
        canvas.height = this.lineChartHeight;

        return canvas;
    }

    protected createExtraCardContent(): HTMLElement {
        let grid = this.createElement(
            "div", "ui equal width center middle aligned grid");

        const languageLabel = this.createLanguageLabel();
        if (languageLabel) {
            grid.appendChild(this.createColumn(languageLabel, "six wide"));
        }
        grid.appendChild(this.createColumn(this.createStars()));
        grid.appendChild(this.createColumn(this.createForks()));

        let extraContent = this.createElement("div", "extra content");
        extraContent.appendChild(grid);

        return extraContent;
    }

    protected createPopupInfoList(): HTMLElement {
        let displayMapping = {
            "subscribers_count": true,
            "open_issues_count": true,
            "branches_count": true,
            "contributors_count": true,
            "created_at": true,
            "updated_at": true,
        };

        return this._createInfoList(displayMapping, this.popupSize);
    }

    protected createCardInfoList(): HTMLElement {
        let displayMapping = {
            "repo_homepage": true,
            "wiki": true,
            "pulls_count": true,
            "license": true,
        };

        if (!this.isDisplayChart()) {
            displayMapping["open_issues_count"] = true;
        }

        return this._createInfoList(displayMapping, this.infoSize);
    }

    protected createDetailInfoList(): HTMLElement {
        if (!this.isDisplayChart()) {
            return null;
        }

        let accordion = this.createElement("div", "ui accordion");

        if (this.getCardData("open_issues_count")) {
            let title = this.createElementWithChild("title", [
                this.createElement("i", "dropdown icon"),
                this._doc.createTextNode("Open issues"),
                this.createLabelElement(
                    String(this.getCardData("open_issues_count")), this.infoSize),
            ]);
            accordion.appendChild(title);

            let canvas = this._doc.createElement("canvas");
            canvas.id = CanvasId.ISSUES_CHART;
            canvas.height = this.pieChartHeight;

            accordion.appendChild(this.createContentElement([canvas]));
        }

        if (Number(this.getCardData("languages_count")) > 1) {
            let title = this.createElementWithChild("title", [
                this.createElement("i", "dropdown icon"),
                this._doc.createTextNode("Languages"),
                this.createLabelElement(
                    String(this.getCardData("languages_count")), this.infoSize),
            ]);
            accordion.appendChild(title);

            let canvas = this._doc.createElement("canvas");
            canvas.id = CanvasId.LANGUAGES_CHART;
            canvas.height = this.pieChartHeight;

            accordion.appendChild(this.createContentElement([canvas]));
        }

        if (accordion.children.length === 0) {
            return null;
        }

        return accordion;
    }

    protected _createInfoList(displayMapping: Object, size: UiSize = null): HTMLElement {
        if (size === null) {
            size = this.infoSize;
        }

        const itemClassName = "item";
        let infoList = this.createElement("div", `ui ${size} list`);

        if (displayMapping["repo_homepage"]) {
            const element = this.createHomepageElement(itemClassName);
            if (element) {
                infoList.appendChild(element);
            }
        }

        if (displayMapping["wiki"]) {
            const element = this.createWikiElement(itemClassName);
            if (element) {
                infoList.appendChild(element);
            }
        }

        if (displayMapping["subscribers_count"]
                && Number(this.getCardData("subscribers_count")) > 0) {
            const element = this.createWatchersElement(itemClassName);
            if (element) {
                infoList.appendChild(element);
            }
        }

        if (displayMapping["open_issues_count"]
                && Number(this.getCardData("open_issues_count")) > 0) {
            const element = this.createIssuesElement(itemClassName);
            if (element) {
                infoList.appendChild(element);
            }
        }

        if (displayMapping["pulls_count"]
                && (Number(this.getCardData("pulls_count")) > 0)) {
            const element = this.createPullsElement(itemClassName);
            if (element) {
                infoList.appendChild(element);
            }
        }

        if (displayMapping["branches_count"]
                && (Number(this.getCardData("branches_count")) > 0)) {
            const element = this.createBranchElement(itemClassName);
            if (element) {
                infoList.appendChild(element);
            }
        }

        if (displayMapping["contributors_count"]
                && Number(this.getCardData("contributors_count")) > 0) {
            const element = this.createContributorsElement(itemClassName);
            if (element) {
                infoList.appendChild(element);
            }
        }

        if (displayMapping["license"]) {
            const element = this.createLicenseElement(itemClassName);
            if (element) {
                infoList.appendChild(element);
            }
        }

        if (displayMapping["created_at"]) {
            infoList.appendChild(this.createDateTimeElement(
                "created_at", "Created at", "wait icon", itemClassName));
        }

        if (displayMapping["updated_at"]) {
            infoList.appendChild(this.createDateTimeElement(
                "updated_at", "Updated at", "history icon", itemClassName));
        }

        if (infoList.children.length === 0) {
            infoList.appendChild(
                this.createDateTimeElement("created_at", "Created at", "wait icon", "item"));
        }

        return infoList;
    }

    private createTopicLabelElement(topic: string, size: UiSize): HTMLElement {
        let label = this.createAnchorElement(
            `//github.com/search?q=topic%3A${topic}&type=Repositories`,
            `ui blue horizontal basic ${size} label`);
        label.appendChild(this._doc.createTextNode(topic));
        label.title = `topic: ${topic}`;

        return label;
    }

    private createHomepageElement(className: string): HTMLElement {
        const homepageUrl: string = this.getCardData("repo_homepage");

        if (homepageUrl == null) {
            console.debug(`homepage not found in ${this.htmlUrl}`);
            return null;
        }

        let linkElement = this.createAnchorElement(homepageUrl, "content");
        linkElement.title = "Repository homepage";
        linkElement.appendChild(this._doc.createTextNode(this.escapeHtml(linkElement.hostname)));

        return this.createElementWithChild(className, [
            this.createElement("i", "home icon"), linkElement]);
    }

    private createWikiElement(className: string): HTMLElement {
        if (!this.getCardData("has_wiki")) {
            console.debug(`wiki not found in ${this.htmlUrl}`);
            return null;
        }

        let linkElement = this.createAnchorElement(`${this.htmlUrl}/wiki`, "content");
        linkElement.title = "Repository wiki";
        linkElement.appendChild(this._doc.createTextNode("Wiki"));

        return this.createElementWithChild(className, [
            this.createElement("i", "book icon"), linkElement]);
    }

    private createWatchersElement(className: string): HTMLElement {
        let linkElement = this.createAnchorElement(`${this.htmlUrl}/watchers`, "content");
        linkElement.appendChild(this._doc.createTextNode("Watchers"));
        linkElement.appendChild(this.createLabelElement(
            String(this.getCardData("subscribers_count")), this.infoSize));

        return this.createElementWithChild(className, [
            this.createElement("i", "unhide icon"), linkElement]);
    }

    private createIssuesElement(className: string): HTMLElement {
        let linkElement = this.createAnchorElement(`${this.htmlUrl}/issues`, "content");
        linkElement.appendChild(this._doc.createTextNode("Issues"));
        linkElement.appendChild(this.createLabelElement(
            String(this.getCardData("open_issues_count")), this.infoSize));

        return this.createElementWithChild(className, [
            this.createElement("i", "warning circle icon"), linkElement]);
    }

    private createPullsElement(className: string): HTMLElement {
        let linkElement = this.createAnchorElement(`${this.htmlUrl}/pulls`, "content");
        linkElement.appendChild(this._doc.createTextNode("Pull requests"));
        linkElement.appendChild(this.createLabelElement(
            String(this.getCardData("pulls_count")), this.infoSize));

        return this.createElementWithChild(className, [
            this.createElement("i", "sign in icon"), linkElement]);
    }

    private createBranchElement(className: string): HTMLElement {
        let linkElement = this.createAnchorElement(`${this.htmlUrl}/branches`, "content");
        linkElement.appendChild(this._doc.createTextNode("Branches"));
        linkElement.appendChild(this.createLabelElement(
            String(this.getCardData("branches_count")), this.infoSize));

        return this.createElementWithChild(className, [
            this.createElement("i", "fork icon"), linkElement]);
    }

    private createContributorsElement(className: string): HTMLElement {
        let linkElement = this.createAnchorElement(
            `${this.htmlUrl}/graphs/contributors`, "content");
        linkElement.appendChild(this._doc.createTextNode("Contributors"));
        linkElement.appendChild(this.createLabelElement(
            String(this.getCardData("contributors_count")), this.infoSize));

        return this.createElementWithChild(className, [
            this.createElement("i", "users icon"), linkElement]);
    }

    private createLicenseElement(className: string): HTMLElement {
        const licenseData = this.getCardData("license");

        if (licenseData == null || licenseData["spdx_id"] == null) {
            return null;
        }

        let licenseElement: HTMLElement = this.createElement("div", className);
        licenseElement.appendChild(this.createElement("i", "law icon"));
        licenseElement.appendChild(this.createContentElement([
            this._doc.createTextNode(licenseData["spdx_id"])]));
        licenseElement.title = licenseData["name"];

        return licenseElement;
    }

    private createRepositoryName(): HTMLElement {
        let repoLink: HTMLElement;
        if (this.htmlUrl) {
            repoLink = this.createAnchorElement(this.htmlUrl);
        }
        else {
            repoLink = this._doc.createElement("div");
        }

        repoLink.appendChild(this._doc.createTextNode(this.getCardData("name")));

        return repoLink;
    }

    private createOwnerAvatar(): HTMLElement {
        let avatar = this.createImageElement(
            this.getCardData("avatar_url"), "ui avatar image");
        avatar.id = AVATAR_ELEMENT_ID;

        return avatar;
    }

    private createTagLabel(): HTMLElement {
        let tagLabel = this.createAnchorElement(
            `${this.htmlUrl}/releases`,
            `ui ${this.releaseTagColor} ${this.versionLabelSize} label`);
        tagLabel.title = "Latest tag";
        tagLabel.appendChild(this._doc.createTextNode(this.getCardData("latest_tag")));
        tagLabel.setAttribute("data-tooltip", `${this.getCardData("tags_count")} releases`);
        tagLabel.setAttribute("data-inverted", "");
        tagLabel.setAttribute("data-position", "bottom center");

        return tagLabel;
    }

    private createLanguageLabel(): HTMLElement {
        if (!this.language) {
            return null;
        }

        let languageElement = this.createElement("div", `ui ${this.getColor()} label`);
        languageElement.title = "Language";
        languageElement.appendChild(this._doc.createTextNode(this.language));

        return languageElement;
    }

    private createStars(): HTMLElement {
        let icon = this.createElement("i", "star black icon");
        icon.title = "Stargazers";

        let stargazersLink: HTMLElement;
        if (this.htmlUrl) {
            stargazersLink = this.createAnchorElement(`${this.htmlUrl}/stargazers`);
        }
        else {
            stargazersLink = this._doc.createElement("div");
        }
        stargazersLink.title = "Stargazers count";
        stargazersLink.appendChild(icon);
        stargazersLink.appendChild(
            this._doc.createTextNode(this.getCardData("stargazers_count")));

        return stargazersLink;
    }

    private createForks(): HTMLElement {
        let icon = this.createElement("i", "fork black icon");
        icon.title = "Forks";

        let forksLink: HTMLElement;
        if (this.htmlUrl) {
            forksLink = this.createAnchorElement(`${this.htmlUrl}/network`);
        }
        else {
            forksLink = this._doc.createElement("div");
        }
        forksLink.title = "Forks count";
        forksLink.appendChild(icon);
        forksLink.appendChild(
            this._doc.createTextNode(this.getCardData("forks_count")));

        return forksLink;
    }

    private colorMap: Object;
}
