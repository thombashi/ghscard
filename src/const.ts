export const AVATAR_ELEMENT_ID = "__avatar_id__";
export const CARD_ELEMENT_ID = "__card_id__";

export namespace Margin {
    export const CARD_CONTENT: number = 4;
    export const FRAME: number = 6;
    export const LABEL: number = 4;
}

const CDN_PREFIX = "//cdnjs.cloudflare.com/ajax/libs";
const SEMANTIC_UI_VERSION = "2.4.1";

export namespace JsUrl {
    export const CHART = `${CDN_PREFIX}/Chart.js/2.8.0/Chart.min.js`;
    export const JQUERY = `${CDN_PREFIX}/jquery/3.4.0/jquery.min.js`;
    export const MOMENT = `${CDN_PREFIX}/moment.js/2.24.0/moment.min.js`;
    export const PLEASE = `${CDN_PREFIX}/pleasejs/0.4.2/Please.min.js`;
    export const SEMANTIC_UI: string = `${CDN_PREFIX}/semantic-ui/${SEMANTIC_UI_VERSION}/semantic.min.js`;
}

export const DEFAULT_SEMANTIC_UI_CSS_URL: string = `${CDN_PREFIX}/semantic-ui/${SEMANTIC_UI_VERSION}/semantic.min.css`;

export namespace Emoji {
    export const WIDTH = 16;
    export const HEIGHT = 16;
}

const STEP_HEIGHT = 20;

namespace BaseChartSize {
    export namespace Line {
        export const HEIGHT = 110;
        export const TITLE_FONT_SIZE = 10;
        export const TICK_FONT_SIZE = 8;
    }
    export namespace Pie {
        export const HEIGHT = 160;
        export const LEGEND_FONT_SIZE = 10;
    }
}

export namespace ChartSize {
    export namespace Line {
        export namespace Medium {
            export const HEIGHT = BaseChartSize.Line.HEIGHT + STEP_HEIGHT * 2;
            export const TITLE_FONT_SIZE = BaseChartSize.Line.TITLE_FONT_SIZE + 2;
            export const TICK_FONT_SIZE = BaseChartSize.Line.TICK_FONT_SIZE + 2;
        }
        export namespace Small {
            export const HEIGHT = BaseChartSize.Line.HEIGHT + STEP_HEIGHT * 1;
            export const TITLE_FONT_SIZE = BaseChartSize.Line.TITLE_FONT_SIZE + 1;
            export const TICK_FONT_SIZE = BaseChartSize.Line.TICK_FONT_SIZE + 1;
        }
        export namespace Tiny {
            export const HEIGHT = BaseChartSize.Line.HEIGHT;
            export const TITLE_FONT_SIZE = BaseChartSize.Line.TITLE_FONT_SIZE;
            export const TICK_FONT_SIZE = BaseChartSize.Line.TICK_FONT_SIZE;
        }
    }
    export namespace Pie {
        export namespace Medium {
            export const HEIGHT = BaseChartSize.Pie.HEIGHT + STEP_HEIGHT * 2;
            export const LEGEND_FONT_SIZE = BaseChartSize.Pie.LEGEND_FONT_SIZE + 2;
        }
        export namespace Small {
            export const HEIGHT = BaseChartSize.Pie.HEIGHT + STEP_HEIGHT * 1;
            export const LEGEND_FONT_SIZE = BaseChartSize.Pie.LEGEND_FONT_SIZE + 1;
        }
        export namespace Tiny {
            export const HEIGHT = BaseChartSize.Pie.HEIGHT + STEP_HEIGHT;
            export const LEGEND_FONT_SIZE = BaseChartSize.Pie.LEGEND_FONT_SIZE;
        }
    }
}
