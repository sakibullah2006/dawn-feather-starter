import "../css/app.css";
import Alpine from "alpinejs";
import slider from "./slider.js";

window.Alpine = Alpine;
Alpine.data("slider", slider);
Alpine.start();
