extend("fiskheroes:hero_basic");
loadTextures({
    "layer1": "amazingheroes:human_torch_comics_layer1",
    "layer2": "amazingheroes:human_torch_comics_layer2",
	"flame_on": "amazingheroes:human_torch_comics_flame_on"
});

var utils = implement("fiskheroes:external/utils");
var flames = implement("fiskheroes:external/flames");

var hand_flames;
var head_flames;

var overlay;

function init(renderer) {
    parent.init(renderer);
	
	renderer.setLights((entity, renderLayer) => renderLayer && entity.getData("fiskheroes:flying") ? "flame_on" : null);
	
	renderer.showModel("CHESTPLATE", "head", "headwear", "body", "rightArm", "leftArm", "rightLeg", "leftLeg");
    renderer.fixHatLayer("CHESTPLATE");
}

function initEffects(renderer) {
    var fire = renderer.createResource("ICON", "fiskheroes:fire_layer_%s");
    hand_flames = flames.createHands(renderer, fire, true);
    head_flames = flames.createHead(renderer, fire);

    utils.addCameraShake(renderer, 0.015, 1.5, "fiskheroes:flight_boost_timer");
    utils.bindParticles(renderer, "fiskheroes:firestorm").setCondition(entity => entity.getData("fiskheroes:flying"));
	
	overlay = renderer.createEffect("fiskheroes:overlay");
    overlay.texture.set("flame_on");
}

function initAnimations(renderer) {
    parent.initAnimations(renderer);
    utils.addFlightAnimation(renderer, "human_torch.FLIGHT", "fiskheroes:flight/propelled_hands.anim.json");
    utils.addHoverAnimation(renderer, "human_torch.HOVER", "fiskheroes:flight/idle/propelled_hands");
}

function render(entity, renderLayer, isFirstPersonArm) {
    if (renderLayer == "CHESTPLATE" && !entity.isDisplayStand() && entity.isWearingFullSuit()) {
        hand_flames.render(entity.getInterpolatedData("fiskheroes:flight_timer"));
		overlay.opacity = entity.getInterpolatedData("fiskheroes:flight_timer");
        overlay.render();

    if (!isFirstPersonArm) {
        head_flames.render(entity.getInterpolatedData("fiskheroes:flight_timer"));
    }
  }
}
