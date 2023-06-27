"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerApiRoutes = exports.registerWebRoutes = void 0;
const ItemsController_1 = __importDefault(require("../app/controllers/ItemsController"));
const ItemsController_2 = __importDefault(require("../app/controllers/api/v1/ItemsController"));
function registerWebRoutes(app) {
    app.get('/items', ItemsController_1.default.index);
}
exports.registerWebRoutes = registerWebRoutes;
function registerApiRoutes(app) {
    app.get('/api/v1/items', ItemsController_2.default.index);
}
exports.registerApiRoutes = registerApiRoutes;
//# sourceMappingURL=index.js.map