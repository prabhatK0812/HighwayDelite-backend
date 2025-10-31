"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = require("./config/db");
const experienceRoutes_1 = __importDefault(require("./routes/experienceRoutes"));
const promoRoutes_1 = __importDefault(require("./routes/promoRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
// Middlewares
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Routes
app.use("/api/experiences", experienceRoutes_1.default);
app.use("/api/promo", promoRoutes_1.default);
const PORT = process.env.PORT || 5000;
// Connect DB and start server
(0, db_1.connectDB)().then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
