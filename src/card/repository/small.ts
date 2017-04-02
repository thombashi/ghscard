import {ChartSize} from "../../const";
import {UiSize} from "../../types";
import {AbstractRepositoryCardGerator} from "./base_repository";


export class SmallRepoCardGerator extends AbstractRepositoryCardGerator {
    protected get headerSize(): UiSize {
        return "medium";
    }

    protected get infoSize(): UiSize {
        return "small";
    }

    protected get popupSize(): UiSize {
        return "small";
    }

    protected get versionLabelSize(): UiSize {
        return "small";
    }

    protected get topicSize(): UiSize {
        return "tiny";
    }

    protected get lineChartHeight(): number {
        return ChartSize.Line.Small.HEIGHT;
    }

    protected get pieChartHeight(): number {
        return ChartSize.Pie.Small.HEIGHT;
    }

    protected get pieChartLegendFontSize(): number {
        return ChartSize.Pie.Small.LEGEND_FONT_SIZE;
    }

    protected get chartTitleFontSize(): number {
        return ChartSize.Line.Small.TITLE_FONT_SIZE;
    }

    protected get chartTickFontSize(): number {
        return ChartSize.Line.Small.TICK_FONT_SIZE;
    }
}
