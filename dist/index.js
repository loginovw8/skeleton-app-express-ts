"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const index_1 = require("./routes/index");
require('dotenv').config();
const app = (0, express_1.default)();
/**
 * Use EJS as Template Engine.
 */
app.set('view engine', 'ejs');
/**
 * Define root views directory.
 */
app.set('views', path_1.default.join(__dirname, '../resources/views'));
/**
 * Middleware for serving static files. The root argument specifies the root
 * directory from which to serve static assets.
 */
app.use(express_1.default.static('public'));
/**
 * Middleware for parsing incoming requests with JSON payloads.
 */
app.use(express_1.default.json());
/**
 * Middleware for POST and PUT requests.
 */
app.use(express_1.default.urlencoded({ extended: true }));
app.listen(process.env.PORT, () => {
    console.log(`App listening on port ${process.env.PORT}`);
});
(0, index_1.registerWebRoutes)(app);
(0, index_1.registerApiRoutes)(app);
//# sourceMappingURL=index.js.map