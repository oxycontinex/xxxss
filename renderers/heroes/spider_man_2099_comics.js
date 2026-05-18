extend("fiskheroes:spider_man_base");
loadTextures({
    "layer1": "amazingheroes:spider_man_2099_comics_layer1",
    "layer2": "amazingheroes:spider_man_2099_comics_layer2",
    "spikes": "amazingheroes:spider_man_2099_comics_spikes"
});

var left_spikes;
var right_spikes;

function initEffects(renderer) {
    renderer.bindProperty("fiskheroes:equipment_wheel").color.set(0x00DAFF);
}

function initAnimations(renderer) {
    parent.initAnimations(renderer);
    utils.addAnimationEvent(renderer, "WEBSWING_TRICK_RIGHT", [
        "fiskheroes:swing_rotate_right", "fiskheroes:swing_rotate_right1"
    ]);
    utils.addAnimationEvent(renderer, "WEBSWING_TRICK_LEFT", [
        "fiskheroes:swing_rotate_left", "fiskheroes:swing_rotate_left1"
    ]);
}

function initEffects(renderer) {
    right_spikes = renderer.createEffect("fiskheroes:shield");
    right_spikes.texture.set("spikes");
    right_spikes.anchor.set("rightArm");
    right_spikes.setOffset(3.5, 2.5, 0.0);
	right_spikes.setRotation(0.0, -50.0, 0.0);
	
    left_spikes = renderer.createEffect("fiskheroes:shield");
    left_spikes.texture.set("spikes");
    left_spikes.anchor.set("leftArm");
    left_spikes.setOffset(-3.5, 2.5, 0.0);
	left_spikes.setRotation(0.0, 50.0, 0.0);
}

function render(entity, renderLayer, isFirstPersonArm) {
    if (renderLayer == "CHESTPLATE") {
		left_spikes.render();
		right_spikes.render();
    }
}
