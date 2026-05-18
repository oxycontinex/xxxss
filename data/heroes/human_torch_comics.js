var human_torch = implement("amazingheroes:external/human_torch_base");

function init(hero) {
    hero.setName("Human-Torch");
	hero.setVersion("Comics");
    hero.setTier(2);
    
    hero.setChestplate("item.superhero_armor.piece.chestpiece");
    hero.setLeggings("item.superhero_armor.piece.pants");
    hero.setBoots("item.superhero_armor.piece.boots");
    
    hero.addPowers("amazingheroes:cosmic_ray_human_torch");
    hero.addAttribute("PUNCH_DAMAGE", 4.0, 0);
    hero.addAttribute("JUMP_HEIGHT", 0.8, 0);
    hero.addAttribute("FALL_RESISTANCE", 10.0, 0);
    
    human_torch.init(hero);
}
