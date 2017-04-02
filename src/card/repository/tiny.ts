import {ChartSize} from "../../const";
import {UiSize} from "../../types";
import {AbstractRepositoryCardGerator} from "./base_repository";


export class TinyRepoCardGerator extends AbstractRepositoryCardGerator {
    protected get headerSize(): UiSize {
        return "small";
    }

    protected get infoSize(): UiSize {
        return "tiny";
    }

    protected get popupSize(): UiSize {
        return "mini";
    }

    protected get versionLabelSize(): UiSize {
        return "tiny";
    }

    protected get topicSize(): UiSize {
        return "mini";
    }

    protected get lineChartHeight(): number {
        return ChartSize.Line.Tiny.HEIGHT;
    }

    protected get pieChartHeight(): number {
        return ChartSize.Pie.Tiny.HEIGHT;
    }

    protected get pieChartLegendFontSize(): number {
        return ChartSize.Pie.Tiny.LEGEND_FONT_SIZE;
    }

    protected get chartTitleFontSize(): number {
        return ChartSize.Line.Tiny.TITLE_FONT_SIZE;
    }

    protected get chartTickFontSize(): number {
        return ChartSize.Line.Tiny.TICK_FONT_SIZE;
    }

    protected isDisplayChart(): Boolean {
        if (this.chartDisplay === "block") {
            return true;
        }

        return false;
    }

    protected createCardInfoList(): HTMLElement {
        return null;
    }

    protected createPopupInfoList(): HTMLElement {
        return this._createInfoList({
            "repo_homepage": true,
            "wiki": true,
            "license": true,
            "created_at": true,
        }, this.popupSize);
    }
}
