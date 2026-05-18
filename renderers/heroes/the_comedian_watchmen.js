extend("fiskheroes:hero_basic");
loadTextures({
    "layer1": "amazingheroes:the_comedian_watchmen_layer1",
    "layer2": "amazingheroes:the_comedian_watchmen_layer2",
	"gun": "amazingheroes:the_comedian_watchmen_gun"
});

var utils = implement("fiskheroes:external/utils");

function initEffects(renderer) {
	utils.addLivery(renderer, "DESERT_EAGLE", "gun");
	
	renderer.bindProperty("fiskheroes:equipped_item").setItems([
        { "anchor": "rightLeg", "scale": 0.7, "offset": [-1.8, 0.5, 1.25], "rotation": [90.0, 0.0, 0.0] },
        { "anchor": "leftLeg", "scale": 0.7, "offset": [1.8, 0.5, 1.25], "rotation": [90.0, 0.0, 0.0] }
    ]).slotIndex = 0;
}
