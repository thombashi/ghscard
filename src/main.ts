import { CardGeneratorManager } from "./manager";

import $ from "jquery";

(function (window, $) {
    $(window).on("load", function () {
        let generator_card = new CardGeneratorManager(document);
        generator_card.generateCards();
    });
})(window, $);
