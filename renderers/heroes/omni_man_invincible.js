extend("fiskheroes:hero_basic");
loadTextures({
    "layer1": "amazingheroes:omni_man_invincible_layer1",
    "layer2": "amazingheroes:omni_man_invincible_layer2",
    "cape": "amazingheroes:omni_man_invincible_cape"
});

var utils = implement("fiskheroes:external/utils");
var capes = implement("fiskheroes:external/capes");

var cape;

function initEffects(renderer) {
    var physics = renderer.createResource("CAPE_PHYSICS", null);
    physics.maxFlare = 0.2;
    cape = capes.createDefault(renderer, 24, "fiskheroes:cape_default.mesh.json", physics);
    cape.effect.texture.set("cape");
}

function initAnimations(renderer) {
    parent.initAnimations(renderer);
    utils.addFlightAnimation(renderer, "black_adam.FLIGHT", "amazingheroes:black_adam.anim.json");
	utils.addHoverAnimation(renderer, "black_adam.HOVER", "fiskheroes:flight/idle/default");
}

function render(entity, renderLayer, isFirstPersonArm) {
    if (!isFirstPersonArm && renderLayer == "CHESTPLATE") {
        cape.render(entity);
    }
}
