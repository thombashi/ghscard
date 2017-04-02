import {CardGeneratorManager} from "./manager";

import * as $ from "jquery";


(function(window, $){
    $(window).on("load", function(){
        let generator_card = new CardGeneratorManager(document);
        generator_card.generateCards();
    });
})(window, $);
