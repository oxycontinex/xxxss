function init(hero) {
    hero.setName("Green Lantern");
	hero.setVersion("Comics");
    hero.setTier(8);
    
    hero.setChestplate("Ring");

    hero.addPowers("amazingheroes:will_power");
    hero.addAttribute("FALL_RESISTANCE", 1.0, 1);
    hero.addAttribute("JUMP_HEIGHT", 2.0, 0);
    hero.addAttribute("PUNCH_DAMAGE", 12.0, 0);
    hero.addAttribute("SPRINT_SPEED", 0.55, 1);

	hero.addKeyBind("ENERGY_PROJECTION", "Energy Projection", 1);
	hero.addKeyBind("SHIELD", "key.forcefield", 2);
	hero.addKeyBind("BLADE", "Energy Construct", 3);
    hero.addKeyBind("RING", "Summon the suit", 5);

    hero.setAttributeProfile(getProfile);
    hero.setTierOverride(getTierOverride);
    hero.setKeyBindEnabled(isKeyBindEnabled);
    hero.setModifierEnabled(isModifierEnabled);
	hero.addAttributeProfile("BLADE", bladeProfile);
    hero.addAttributeProfile("INACTIVE", inactiveProfile);
}

function inactiveProfile(profile) {
    profile.revokeAugments();
}

function getProfile(entity) {
    if (!entity.getData("amazingheroes:dyn/lantern")) {
        return "INACTIVE";
    }
	if (entity.getData("fiskheroes:blade")) {
        return "BLADE";
    }
}

function isModifierEnabled(entity, modifier) {
    if (modifier.name() != "fiskheroes:transformation" && modifier.name() != "fiskheroes:cooldown" && (!entity.getData("amazingheroes:dyn/lantern"))) {
        return false;
    }
  
    switch (modifier.name()) {
    default:
        return true;
    }
}

function isKeyBindEnabled(entity, keyBind) {
    if (keyBind == "RING") {
        return entity.getData("fiskheroes:mask_open_timer") == 0;
    }
    else if (!entity.getData("amazingheroes:dyn/lantern")) {
        return false;
    }
    
    switch (keyBind) {
    case "ENERGY_PROJECTION":
        return entity.getData("amazingheroes:dyn/lantern");
    case "SHIELD":
        return !entity.isSneaking() && entity.getData("amazingheroes:dyn/lantern");
    default:
        return true;
    }
}

function getTierOverride(entity) {
    return entity.getData("amazingheroes:dyn/lantern") ? 8 : 0;
}

function bladeProfile(profile) {
	profile.inheritDefaults()
    profile.addAttribute("PUNCH_DAMAGE", 14.0, 0);
}