"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.options = void 0;
exports.options = {
    definition: {
        openapi: "3.0.1",
        info: {
            title: "Node MongoDN SongDB",
            version: "1.0.0",
            description: "Uso de swagger"
        },
        servers: [
            {
                url: "http://localhost:3000"
            }
        ]
    },
    apis: ["./src/*.ts"]
};
