"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ExchangeRate_module_css_1 = require("../css/ExchangeRate.module.css");
const exchangeRateController_1 = require("../controllers/exchangeRateController");
const react_1 = require("react");
function ExchangeRate({ from, to, setUrl, setActive, }) {
    const doucleCLickHandler = () => {
        exchangeRateController_1.default.getGiphy(from, to)
            .then((value) => {
            setUrl(value.data.url);
            setActive(true);
        })
            .catch(() => {
            alert('Данные валюты сломанные и не откликаются на API сайта');
        });
    };
    return (react_1.default.createElement("div", { className: ExchangeRate_module_css_1.default.container, onDoubleClick: doucleCLickHandler },
        react_1.default.createElement("div", { className: ExchangeRate_module_css_1.default.td }, from),
        react_1.default.createElement("div", { className: ExchangeRate_module_css_1.default.td }, to)));
}
exports.default = ExchangeRate;
//# sourceMappingURL=ExchangeRate.js.map