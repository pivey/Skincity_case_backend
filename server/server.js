"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var images_1 = require("../images");
var skinTypes = [
    {
        id: '9238482349',
        name: 'Normal',
        image: images_1.normal
    },
    {
        id: '9238482347',
        name: 'Dry',
        image: images_1.dry
    },
    {
        id: '9238482348',
        name: 'Oily',
        image: images_1.oily
    },
    {
        id: '9238482350',
        name: 'Combination (Oily and Dry)',
        image: images_1.combination
    },
    {
        id: '9238482351',
        name: 'Mature',
        image: images_1.mature
    },
    {
        id: '9238482352',
        name: 'Sensitive',
        image: images_1.sensitive
    }
];
var bodyParser = require('body-parser');
var cors = require('cors');
require('dotenv').config();
var PORT = process.env.PORT || '3001';
var app = express_1.default();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.get('/skinTypes', function (req, res) {
    res.send(skinTypes);
});
var startServer = function () {
    try {
        app.listen(PORT || 3005, function () {
            console.log("server started listening at http://localhost:" + PORT);
        });
    }
    catch (error) {
        console.error(error.message);
    }
};
startServer();
