function init(hero) {
    hero.setName("Ghost Rider");
    hero.setTier(7);
    
    hero.setChestplate("Jacket");
    hero.setLeggings("Pants");
    hero.setBoots("Shoes");

    hero.addPowers("amazingheroes:mephisto_spirit");
    hero.addAttribute("FALL_RESISTANCE", 1.0, 1);
    hero.addAttribute("JUMP_HEIGHT", 1.0, 0);
    hero.addAttribute("PUNCH_DAMAGE", 12.0, 0);
    hero.addAttribute("SPRINT_SPEED", 0.55, 1);

    hero.addKeyBind("AIM", "key.shoot", 1);
	hero.addKeyBind("SPELL_MENU", "Chain Whip", 2);
    hero.addKeyBind("MEPHISTO_SPIRIT", "Summon the spirit", 5);

    hero.addAttributeProfile("INACTIVE", inactiveProfile);
    hero.setAttributeProfile(getProfile);
	hero.setModifierEnabled(isModifierEnabled);
	hero.setKeyBindEnabled(isKeyBindEnabled);
    hero.setTierOverride(getTierOverride);
	
    hero.supplyFunction("canAim", canAim);
    
    hero.setDamageProfile(entity => entity.getHeldItem().isEmpty() ? "FLAME_PUNCH" : null);
    hero.addDamageProfile("FLAME_PUNCH", {
        "types": {
            "BLUNT": 1.0,
            "FIRE": 0.4
        },
        "properties": {
            "HEAT_TRANSFER": 40,
            "IGNITE": 2
        }
    });
}

function inactiveProfile(profile) {
    profile.revokeAugments();
}

function getProfile(entity) {
    if (!entity.getData("amazingheroes:dyn/mephisto_spirit")) {
        return "INACTIVE";
    }
}

function isModifierEnabled(entity, modifier) {
    switch (modifier.name()) {
        case "fiskheroes:fireball":
            return entity.getData("amazingheroes:dyn/mephisto_spirit");
        case "fiskheroes:flame_blast":
            return entity.getData("amazingheroes:dyn/mephisto_spirit");
        default:
            return true;
    }
}

function isKeyBindEnabled(entity, keyBind) {
    if (keyBind == "MEPHISTO_SPIRIT") {
        return entity.getData("fiskheroes:mask_open_timer") == 0;
    }
    else if (!entity.getData("amazingheroes:dyn/mephisto_spirit")) {
        return false;
    }
    
    switch (keyBind) {
    case "AIM":
        return entity.getData("amazingheroes:dyn/mephisto_spirit");
    case "SPELL_MENU":
        return entity.getData("amazingheroes:dyn/mephisto_spirit");
    default:
        return true;
    }
}

function getTierOverride(entity) {
    return entity.getData("amazingheroes:dyn/mephisto_spirit") ? 7 : 1;
}

function canAim(entity) {
    return entity.getHeldItem().isEmpty();
}