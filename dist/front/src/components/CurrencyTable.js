"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyTable = void 0;
const react_1 = require("react");
const CurrencyTable_module_css_1 = require("../css/CurrencyTable.module.css");
const ExchangeRate_1 = require("./ExchangeRate");
const ModalWindow_1 = require("./ModalWindow");
const react_2 = require("react");
function CurrencyTable() {
    const [active, setActive] = (0, react_1.useState)(false);
    const [url, setUrl] = (0, react_1.useState)('');
    const ratesComponent = [
        { id: 1, from: 'EUR', to: 'USD', setUrl, setActive },
        { id: 2, from: 'USD', to: 'EUR', setUrl, setActive },
        { id: 3, from: 'EUR', to: 'RUB', setUrl, setActive },
        { id: 4, from: 'USD', to: 'RUB', setUrl, setActive },
    ];
    return (react_2.default.createElement("div", { className: CurrencyTable_module_css_1.default.container },
        ratesComponent.map((component) => {
            return (react_2.default.createElement(ExchangeRate_1.default, { key: component.id, from: component.from, to: component.to, setUrl: component.setUrl, setActive: setActive }));
        }),
        react_2.default.createElement(ModalWindow_1.default, { url: url, active: active, setActive: setActive, setUrl: setUrl })));
}
exports.CurrencyTable = CurrencyTable;
exports.default = CurrencyTable;
//# sourceMappingURL=CurrencyTable.js.map