function init(hero) {
    hero.setName("Doctor Manhattan");
    hero.setVersion("Watchmen");
    hero.setTier(10);
    
	hero.setHelmet("Head");
    hero.setChestplate("item.superhero_armor.piece.chestplate");
    hero.setLeggings("item.superhero_armor.piece.legs");
    hero.setBoots("Feet");
    
    hero.addPowers("amazingheroes:cosmic_physiology", "amazingheroes:fly");
    hero.addAttribute("PUNCH_DAMAGE", 13.0, 0);
    hero.addAttribute("WEAPON_DAMAGE", -2.0, 0);
    hero.addAttribute("JUMP_HEIGHT", 1.5, 0);
    hero.addAttribute("FALL_RESISTANCE", 2.0, 1);
    
    hero.addKeyBind("TELEKINESIS", "key.telekinesis", 1);
    hero.addKeyBind("TELEPORT", "key.teleport", 2);
	hero.addKeyBind("SIZE_MANIPULATION", "key.sizeManipulation", 3);
    hero.addKeyBind("INTANGIBILITY", "key.intangibility", 4);
    
    hero.setDefaultScale(1.1);
    hero.setModifierEnabled(isModifierEnabled);
    hero.setKeyBindEnabled(isKeyBindEnabled);
    hero.setHasProperty(hasProperty);

    hero.addSoundEvent("STEP", "fiskheroes:anti_walk");
}

function isModifierEnabled(entity, modifier) {
    return modifier.name() != "fiskheroes:arrow_catching" && modifier.name() != "fiskheroes:energy_projection" && modifier.name() != "fiskheroes:teleportation" || !entity.getData("fiskheroes:telekinesis");
}

function isKeyBindEnabled(entity, keyBind) {
    return keyBind != "ENERGY_PROJECTION" && keyBind != "TELEPORT" || !entity.getData("fiskheroes:telekinesis");
}

function hasProperty(entity, property) {
    return property == "BREATHE_SPACE";
}
