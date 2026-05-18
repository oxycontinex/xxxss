extend("fiskheroes:hero_basic");
loadTextures({
    "full": "amazingheroes:green_lantern_comics",
    "suit": "amazingheroes:green_lantern_comics_suit.tx.json",
    "ring": "amazingheroes:green_lantern_comics_ring",
	"baseball": "amazingheroes:green_lantern_comics_baseball"
});

var utils = implement("fiskheroes:external/utils");

var baseball;

function init(renderer) {
    parent.init(renderer);
    renderer.setTexture((entity, renderLayer) => {
        if (entity.getData("fiskheroes:mask_open_timer2") > 0) {
            return "ring";
        }
        else if (!entity.isDisplayStand()) {
            var timer = entity.getInterpolatedData("amazingheroes:dyn/lantern_timer");
            return timer == 0 ? "ring" : timer < 1 ? "suit" : "full";
        }
        return "full";
    });
	
	renderer.showModel("CHESTPLATE", "head", "headwear", "body", "rightArm", "leftArm", "rightLeg", "leftLeg");
    renderer.fixHatLayer("CHESTPLATE");
}

function initEffects(renderer) {
	// Shield
    var forcefield = renderer.bindProperty("fiskheroes:forcefield");
    forcefield.color.set(0x00FF00);
    forcefield.setShape(36, 18).setOffset(0.0, 6.0, 0.0).setScale(1.25);
    forcefield.setCondition(entity => {
        forcefield.opacity = entity.getInterpolatedData("fiskheroes:shield_blocking_timer") * 0.15;
        return true;
    });
	
	//Baseball Projection
	var model = renderer.createResource("MODEL", "amazingheroes:baseball");
    model.texture.set("baseball");
    baseball = renderer.createEffect("fiskheroes:model").setModel(model);
    baseball.anchor.set("rightArm");
    baseball.setRotation(90, 0, 0); 
    baseball.setOffset(0.6, 9, -13.0)
	baseball.setScale(0.75);
	
    // Energy Projection
    utils.bindBeam(renderer, "fiskheroes:energy_projection", "amazingheroes:green_lantern_energy_projection", "rightArm", 0x00FF00, [
        { "firstPerson": [-5.5, 4.75, -10.0], "offset": [-0.5, 9.0, 0.0], "size": [6.0, 6.0, -6.0] }
    ]).setParticles(renderer.createResource("PARTICLE_EMITTER", "fiskheroes:impact_energy_projection"));
}

function initAnimations(renderer) {
    parent.initAnimations(renderer);

    addAnimationWithData(renderer, "basic.ENERGY_PROJ", "fiskheroes:aiming", "fiskheroes:energy_projection_timer");

    utils.addFlightAnimation(renderer, "green_lantern.FLIGHT", "fiskheroes:flight/default.anim.json");
    utils.addHoverAnimation(renderer, "green_lantern.HOVER", "fiskheroes:flight/idle/neutral");

    renderer.reprioritizeDefaultAnimation("PUNCH", -9);
    renderer.reprioritizeDefaultAnimation("AIM_BOW", -9);
}

function render(entity, renderLayer, isFirstPersonArm) {
    if (renderLayer == "CHESTPLATE") {
        if (entity.getData("fiskheroes:blade_timer") > 0) {
        baseball.render();
    }
  }
}


