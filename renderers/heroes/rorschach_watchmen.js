extend("fiskheroes:hero_basic");
loadTextures({
    "layer1": "amazingheroes:rorschach_watchmen_layer1",
    "layer2": "amazingheroes:rorschach_watchmen_pants",
    "pants_trenchcoat": "amazingheroes:rorschach_watchmen_pants_trenchcoat",
    "boots": "amazingheroes:rorschach_watchmen_boots",
	"mask": "amazingheroes:rorschach_watchmen_mask",
    "boots_trenchcoat": "amazingheroes:rorschach_watchmen_boots_trenchcoat"
});

var utils = implement("fiskheroes:external/utils");

function init(renderer) {
    parent.init(renderer);
    renderer.setTexture((entity, renderLayer) => {
		if (renderLayer == "HELMET") {
            return entity.getWornChestplate().suitType() == $SUIT_NAME ? "layer2" : "mask";
        }
        if (renderLayer == "LEGGINGS") {
            return entity.getWornChestplate().suitType() == $SUIT_NAME ? "pants_trenchcoat" : "layer2";
        }
        else if (renderLayer == "BOOTS") {
            return entity.getWornChestplate().suitType() == $SUIT_NAME ? "boots_trenchcoat" : "boots";
        }
        return "layer1";
    });

    renderer.showModel("CHESTPLATE", "head", "headwear", "body", "rightArm", "leftArm", "rightLeg", "leftLeg");
    renderer.fixHatLayer("HELMET", "CHESTPLATE");
}

