extend("fiskheroes:hero_basic");
loadTextures({
	"layer1": "amazingheroes:ghost_rider_layer1",
    "layer2": "amazingheroes:ghost_rider_layer2",
	"skull": "amazingheroes:ghost_rider_skull",
	"skull_lights": "amazingheroes:ghost_rider_skull_lights"
});

var utils = implement("fiskheroes:external/utils");
var flames = implement("fiskheroes:external/flames");

var head_flames;

function init(renderer) {
    parent.init(renderer);
    
	renderer.setLights((entity, renderLayer) => renderLayer && entity.getData("amazingheroes:dyn/mephisto_spirit_timer") ? "skull_lights" : null);
	
    renderer.showModel("CHESTPLATE", "head", "headwear", "body", "rightArm", "leftArm");
    renderer.fixHatLayer("CHESTPLATE");
}


function initEffects(renderer) {
	var fire = renderer.createResource("ICON", "fiskheroes:fire_layer_%s");
    head_flames = flames.createHead(renderer, fire);
	
    overlay = renderer.createEffect("fiskheroes:overlay");
    overlay.texture.set("skull");
	
	var color = 0xFF4800;
	var magic = renderer.bindProperty("fiskheroes:spellcasting");
    magic.colorWhip.set(color);
}

function render(entity, renderLayer, isFirstPersonArm) {
    if (renderLayer == "CHESTPLATE" && entity.getData("amazingheroes:dyn/mephisto_spirit_timer") > 0 && entity.isWearingFullSuit()) {
        overlay.opacity = entity.getInterpolatedData("amazingheroes:dyn/mephisto_spirit_timer");
        overlay.render();
        head_flames.render(entity.getInterpolatedData("amazingheroes:dyn/mephisto_spirit_timer"));
    if (!isFirstPersonArm) {
        head_flames.render(entity.getInterpolatedData("amazingheroes:dyn/mephisto_spirit_timer"));
    }
  }
}
