import { CardGeneratorManager } from "./manager";

import $ from "jquery";

(function (window, $) {
    $(window).on("load", function () {
        const generatorCard = new CardGeneratorManager(document);
        generatorCard.generateCards();
    });
})(window, $);
