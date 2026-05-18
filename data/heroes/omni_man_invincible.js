function init(hero) {
    hero.setName("Omni-Man");
	hero.setVersion("Invincible");
    hero.setTier(9);
    
    hero.setChestplate("item.superhero_armor.piece.chestpiece");
    hero.setLeggings("item.superhero_armor.piece.pants");
    hero.setBoots("item.superhero_armor.piece.boots");
    
    hero.addPowers("amazingheroes:viltrumite_physiology");
    hero.addAttribute("PUNCH_DAMAGE", 13.0, 0);
    hero.addAttribute("WEAPON_DAMAGE", 1.5, 0);
    hero.addAttribute("SPRINT_SPEED", 0.7, 1);
    hero.addAttribute("BASE_SPEED_LEVELS", 2.0, 0);
    hero.addAttribute("FALL_RESISTANCE", 1.0, 1);
    
    hero.addKeyBind("SUPER_SPEED", "key.superSpeed", 1);
	hero.addKeyBind("GROUND_SMASH", "key.groundSmash", 4);
    
    hero.setDefaultScale(1.1);
	hero.addAttributeProfile("FLY", flyProfile);
    hero.setAttributeProfile(getAttributeProfile);
    hero.setModifierEnabled(isModifierEnabled);
    hero.setKeyBindEnabled(isKeyBindEnabled);
	
    hero.setHasProperty((entity, modifier) => {
      return modifier == "BREATHE_SPACE";
    });
}

function flyProfile(profile) {
  profile.addAttribute("SPRINT_SPEED", 0.6, 1);
}

function getAttributeProfile(entity) {
  return entity.isSprinting() && entity.getData("fiskheroes:flying") ? "FLY" : null;
}

function isModifierEnabled(entity, modifier) {
    switch (modifier.name()) {
	case "fiskheroes:super_speed":
        return !entity.getData("fiskheroes:flying");
	case "fiskheroes:ground_smash":
        return !entity.getData("fiskheroes:flying");
    default:
        return true;
    }
}

function isKeyBindEnabled(entity, keyBind) {
    switch (keyBind) {
    case "SUPER_SPEED":
        return !entity.getData("fiskheroes:flying");
	case "GROUND_SMASH":
        return !entity.getData("fiskheroes:flying");
    default:
        return true;
    }
}
