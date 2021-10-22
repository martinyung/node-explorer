var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import logoSrc from '../assets/img/logo--r3.svg';
import { BottomBar, Container, Column, Dropdown, IconCustom, Option, Row, TextInput, TopNavBar, DashboardItem, } from '../exports';
var DasboardExample = function () {
    var _a = useState(''), textValue = _a[0], setTextValue = _a[1];
    var logo = (_jsx("a", __assign({ href: "#" }, { children: _jsx("img", { src: logoSrc, alt: "", width: "33px" }, void 0) }), void 0));
    return (_jsxs(Container, __assign({ className: "min-h-screen", fluid: true }, { children: [_jsx(TopNavBar, { logo: logo, title: "tooling design system", right: _jsxs(_Fragment, { children: [_jsx(IconCustom, { icon: "Magnify", className: "h-5" }, void 0), _jsxs(Dropdown, __assign({ positionX: "left", positionY: "bottom", closeOnSelectOption: true, trigger: _jsx(IconCustom, { icon: "Account", className: "h-5" }, void 0) }, { children: [_jsx(Option, __assign({ value: "one" }, { children: "One" }), void 0), _jsx(Option, __assign({ value: "two" }, { children: "Two" }), void 0), _jsx(Option, __assign({ value: "three" }, { children: "Three" }), void 0), _jsx(Option, __assign({ value: "four" }, { children: "Four" }), void 0), _jsx(Option, __assign({ value: "five" }, { children: "Five" }), void 0), _jsx(Option, __assign({ value: "six" }, { children: "Six" }), void 0), _jsx(Option, __assign({ value: "seven" }, { children: "Seven" }), void 0)] }), void 0), _jsx(IconCustom, { icon: "ExitToApp", className: "h-5" }, void 0)] }, void 0) }, void 0), _jsxs("div", __assign({ className: "p-16" }, { children: [_jsxs("div", __assign({ className: "flex justify-between" }, { children: [_jsx("h2", { children: "Lorem Ipsum" }, void 0), _jsx(TextInput, { invalid: textValue.length < 3, label: "search", errorMessage: "Text is too short", value: textValue, onChange: function (event) { return setTextValue(event.target.value); } }, void 0)] }), void 0), _jsxs(Row, __assign({ className: "my-8" }, { children: [_jsx(Column, __assign({ cols: 2 }, { children: _jsxs(DashboardItem, __assign({ withBackground: true, icon: "AstronautFlight" }, { children: [_jsx("p", { children: "lorem ipsum" }, void 0), _jsx("p", { children: "sit dolor" }, void 0)] }), void 0) }), void 0), _jsx(Column, __assign({ cols: 2 }, { children: _jsxs(DashboardItem, __assign({ icon: "AstronautHello" }, { children: [_jsx("p", { children: "lorem ipsum" }, void 0), _jsx("p", { children: "sit dolor" }, void 0)] }), void 0) }), void 0), _jsx(Column, __assign({ cols: 2 }, { children: _jsxs(DashboardItem, __assign({ withBackground: true, icon: "AstronautSittingOnPlanet" }, { children: [_jsx("p", { children: "lorem ipsum" }, void 0), _jsx("p", { children: "sit dolor" }, void 0)] }), void 0) }), void 0), _jsx(Column, __assign({ cols: 2 }, { children: _jsxs(DashboardItem, __assign({ icon: "AstronautWithFlag" }, { children: [_jsx("p", { children: "lorem ipsum" }, void 0), _jsx("p", { children: "sit dolor" }, void 0)] }), void 0) }), void 0), _jsx(Column, __assign({ cols: 2 }, { children: _jsxs(DashboardItem, __assign({ withBackground: true, icon: "EssentialsAccept" }, { children: [_jsx("p", { children: "lorem ipsum" }, void 0), _jsx("p", { children: "sit dolor" }, void 0)] }), void 0) }), void 0), _jsx(Column, __assign({ cols: 2 }, { children: _jsxs(DashboardItem, __assign({ icon: "EssentialsAdd" }, { children: [_jsx("p", { children: "lorem ipsum" }, void 0), _jsx("p", { children: "sit dolor" }, void 0)] }), void 0) }), void 0)] }), void 0), _jsxs(Row, __assign({ className: "my-8" }, { children: [_jsx(Column, __assign({ cols: 2 }, { children: _jsxs(DashboardItem, __assign({ withBackground: true, icon: "AstronautFlight" }, { children: [_jsx("p", { children: "lorem ipsum" }, void 0), _jsx("p", { children: "sit dolor" }, void 0)] }), void 0) }), void 0), _jsx(Column, __assign({ cols: 2 }, { children: _jsxs(DashboardItem, __assign({ icon: "AstronautHello" }, { children: [_jsx("p", { children: "lorem ipsum" }, void 0), _jsx("p", { children: "sit dolor" }, void 0)] }), void 0) }), void 0), _jsx(Column, __assign({ cols: 2 }, { children: _jsxs(DashboardItem, __assign({ withBackground: true, icon: "AstronautSittingOnPlanet" }, { children: [_jsx("p", { children: "lorem ipsum" }, void 0), _jsx("p", { children: "sit dolor" }, void 0)] }), void 0) }), void 0), _jsx(Column, __assign({ cols: 2 }, { children: _jsxs(DashboardItem, __assign({ icon: "AstronautWithFlag" }, { children: [_jsx("p", { children: "lorem ipsum" }, void 0), _jsx("p", { children: "sit dolor" }, void 0)] }), void 0) }), void 0), _jsx(Column, __assign({ cols: 2 }, { children: _jsxs(DashboardItem, __assign({ withBackground: true, icon: "EssentialsAccept" }, { children: [_jsx("p", { children: "lorem ipsum" }, void 0), _jsx("p", { children: "sit dolor" }, void 0)] }), void 0) }), void 0), _jsx(Column, __assign({ cols: 2 }, { children: _jsxs(DashboardItem, __assign({ icon: "EssentialsAdd" }, { children: [_jsx("p", { children: "lorem ipsum" }, void 0), _jsx("p", { children: "sit dolor" }, void 0)] }), void 0) }), void 0)] }), void 0)] }), void 0), _jsxs(BottomBar, __assign({ id: "bottom", className: "fixed bottom-0", copyright: "\u00A9 " + new Date().getFullYear() + " R3. All rights reserved." }, { children: [_jsx("a", __assign({ rel: "noopener noreferrer", href: "/#", title: "Terms and Conditions" }, { children: "Terms and Conditions" }), void 0), _jsx("a", __assign({ rel: "noopener noreferrer", href: "/#", title: "Privacy Policy" }, { children: "Privacy Policy" }), void 0)] }), void 0)] }), void 0));
};
export default DasboardExample;
//# sourceMappingURL=DashboardExample.js.map