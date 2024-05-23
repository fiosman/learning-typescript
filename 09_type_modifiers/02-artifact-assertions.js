"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getArtifactType = void 0;
const artifacts = {
    "Black Garnet": {
        type: "magic",
    },
    "Castle TypeScript": {
        type: "fortress",
    },
    "Cosmic Key": {
        type: "device",
    },
    "Power Sword": {
        type: "sword",
    },
    Starseed: {
        type: "magic",
    },
    "Sword of the Ancients": {
        type: "sword",
    },
};
function getArtifactType(name) {
    return artifacts[name].type;
}
exports.getArtifactType = getArtifactType;
