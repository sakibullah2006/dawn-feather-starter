import "../css/app.css";
import Alpine from "alpinejs";
import collapse from "@alpinejs/collapse";
import focus from "@alpinejs/focus";
import slider from "./slider.js";
import collapsible from "./header/collapsible.js";

window.Alpine = Alpine;
Alpine.plugin(collapse);
Alpine.plugin(focus);
Alpine.data("slider", slider);
Alpine.data("collapsible", collapsible);
Alpine.start();
