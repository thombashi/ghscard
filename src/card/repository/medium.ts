import { ChartSize } from "../../const";
import { UiSize } from "../../types";
import { AbstractRepositoryCardGerator } from "./base_repository";

export class MediumRepoCardGerator extends AbstractRepositoryCardGerator {
    protected get headerSize(): UiSize {
        return "large";
    }

    protected get infoSize(): UiSize {
        return "medium";
    }

    protected get popupSize(): UiSize {
        return "medium";
    }

    protected get versionLabelSize(): UiSize {
        return "medium";
    }

    protected get topicSize(): UiSize {
        return "small";
    }

    protected get lineChartHeight(): number {
        return ChartSize.Line.Medium.HEIGHT;
    }

    protected get pieChartHeight(): number {
        return ChartSize.Pie.Medium.HEIGHT;
    }

    protected get pieChartLegendFontSize(): number {
        return ChartSize.Pie.Medium.LEGEND_FONT_SIZE;
    }

    protected get chartTitleFontSize(): number {
        return ChartSize.Line.Medium.TITLE_FONT_SIZE;
    }

    protected get chartTickFontSize(): number {
        return ChartSize.Line.Medium.TICK_FONT_SIZE;
    }
}
