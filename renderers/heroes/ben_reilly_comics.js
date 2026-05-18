extend("fiskheroes:spider_man_base");
loadTextures({
    "layer1": "amazingheroes:ben_reilly_comics_layer1",
    "layer2": "amazingheroes:ben_reilly_comics_layer2",
	"mask": "amazingheroes:ben_reilly_comics_mask"
});


function init(renderer) {
    parent.init(renderer);
    renderer.setTexture((entity, renderLayer) => {
        if (renderLayer == "HELMET") {
            return entity.getWornChestplate().suitType() == $SUIT_NAME ? "layer2" : "mask";
        }
        return renderLayer == "LEGGINGS" ? "layer2" : "layer1";
    });

    renderer.showModel("CHESTPLATE", "head", "headwear", "body", "rightArm", "leftArm");
    renderer.fixHatLayer("HELMET", "CHESTPLATE");
}

function initEffects(renderer) {
    renderer.bindProperty("fiskheroes:equipment_wheel").color.set(0x00DAFF);
}

