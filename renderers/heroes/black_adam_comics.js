extend("fiskheroes:hero_basic");
loadTextures({
    "layer1": "amazingheroes:black_adam_comics_layer1",
    "layer2": "amazingheroes:black_adam_comics_layer2",
    "lights": "amazingheroes:black_adam_comics_lights"
});

var utils = implement("fiskheroes:external/utils");

function init(renderer) {
    parent.init(renderer);
    renderer.setLights((entity, renderLayer) => renderLayer == "CHESTPLATE" ? "lights" : null);
}

function initEffects(renderer) {
	//Lightning Cast
    utils.bindBeam(renderer, "fiskheroes:lightning_cast", "fiskheroes:lightning_cast", "rightArm", 0xD9FFFF, [
        { "firstPerson": [-8.0, 4.5, -10.0], "offset": [-0.5, 9.0, 0.0], "size": [0.75, 0.75] }
    ]);
	// Energy Projection
	utils.bindBeam(renderer, "fiskheroes:energy_projection", "amazingheroes:black_adam_lightning_beam", "rightArm", 0xFFFFFF, [
        { "firstPerson": [-5.5, 4.75, -10.0], "offset": [-0.5, 9.0, 0.0], "size": [6.0, 6.0, -6.0] },
		{ "firstPerson": [5.5, 4.75, -10.0], "offset": [0.5, 9.0, 0.0], "size": [6.0, 6.0, -6.0], "anchor": "leftArm" }
    ]).setParticles(renderer.createResource("PARTICLE_EMITTER", "fiskheroes:impact_energy_projection"));
}

function initAnimations(renderer) {
    parent.initAnimations(renderer);
	
    addAnimationWithData(renderer, "basic.ENERGY_PROJ", "fiskheroes:dual_aiming", "fiskheroes:energy_projection_timer");

    utils.addFlightAnimation(renderer, "black_adam.FLIGHT", "amazingheroes:black_adam.anim.json");
	utils.addHoverAnimation(renderer, "black_adam.HOVER", "fiskheroes:flight/idle/default");
    
    renderer.reprioritizeDefaultAnimation("PUNCH", -9);
    renderer.reprioritizeDefaultAnimation("AIM_BOW", -9);
}

