"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ModalWIndow_module_css_1 = require("../css/ModalWIndow.module.css");
const react_1 = require("react");
function ModalWindow(props) {
    const { active, setActive, url, setUrl } = props;
    return (react_1.default.createElement("div", { className: `${ModalWIndow_module_css_1.default.modal} ${active ? ModalWIndow_module_css_1.default.modalActive : ''}`, onMouseDown: () => {
            setActive(false);
            setUrl('');
        } },
        react_1.default.createElement("div", { className: `${ModalWIndow_module_css_1.default.modal__content} ${active ? ModalWIndow_module_css_1.default.modal__contentActive : ''}`, onMouseDown: (e) => e.stopPropagation() },
            react_1.default.createElement("img", { src: url, alt: "" }))));
}
exports.default = ModalWindow;
//# sourceMappingURL=ModalWindow.js.map