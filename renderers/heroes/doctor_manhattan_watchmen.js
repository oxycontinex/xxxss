extend("fiskheroes:hero_basic");
loadTextures({
    "layer1": "amazingheroes:doctor_manhattan_watchmen_layer1",
    "layer2": "amazingheroes:doctor_manhattan_watchmen_layer2",
    "lights": "amazingheroes:doctor_manhattan_watchmen_lights"
});

var utils = implement("fiskheroes:external/utils");

function init(renderer) {  
    parent.init(renderer); 
    renderer.setLights((entity, renderLayer) => renderLayer == "HELMET" ? "lights" : null);
}

function initEffects(renderer) {
	//Teleportation Breach
    utils.bindCloud(renderer, "fiskheroes:teleportation", "fiskheroes:breach");
}

function initAnimations(renderer) {
    parent.initAnimations(renderer);
    utils.addHoverAnimation(renderer, "manhattan.HOVER", "fiskheroes:flight/idle/neutral");
    utils.addFlightAnimation(renderer, "manhattan.FLIGHT", "fiskheroes:flight/levitate.anim.json", (entity, data) => {
        data.load(entity.getInterpolatedData("fiskheroes:flight_timer"));
    });
}
