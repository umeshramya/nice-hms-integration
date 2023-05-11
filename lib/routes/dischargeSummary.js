"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dischareSummary = void 0;
const axios_1 = __importDefault(require("axios"));
/**
 * You send data by using abhaAddress or patientId of Nice HMS
 * try sending discharge summary in html format so pdf geneated at our end is nicely formated
 * keep HTML format as simple as possible, complaex HTML may not genrate good PDF
 * @param options
 * @param token
 * @param baseUrl
 * @returns
 */
const dischareSummary = (options, token, baseUrl) => __awaiter(void 0, void 0, void 0, function* () {
    const url = `${baseUrl}discharge_summary`;
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    const res = yield axios_1.default
        .post(url, options, config)
        .then((res) => res.data);
    return res;
});
exports.dischareSummary = dischareSummary;
//# sourceMappingURL=dischargeSummary.js.map