GTCEuStartupEvents.registry("gtceu:material", event => {

    event.create('netherrack_slurry')
        .liquid()
        .color(0x723D4B)

    event.create('shine_netherrack_slurry')
        .liquid()
        .color(0xAE6D7E)

    event.create('heavy_netherrack_slurry')
        .liquid()
        .color(0x5A323C)//netherite, helllium, crying obsidian, enriched nether quartz

    event.create('light_netherrack_slurry')
        .liquid()
        .color(0xD78198)//ignis gas, inferxis, crimsta, nether wart, poor metal

    event.create('metallic_heavy_netherrack_slurry')
        .liquid()
        .color(0x866C72)//from rhodium fusion

    event.create('heavy_netherrack_metal_mixture')
        .dust()
        .color(0x570B1C)

    event.create('mysterious_netherrack_mixture')
        .dust()
        .color(0x86192B)

    event.create('netherrack_waste')
        .liquid()
        .color(0x471C26)

    event.create('dry_mysterious_netherrack_mixture')
        .dust()
        .color(0xB0364A)

    event.create('enriched_naquadic_mysterious_netherrack_mixture')
        .liquid()
        .color(0x25050A)

    event.create('enriched_mysterious_netherrack_mixture')
        .liquid()
        .color(0x3F292D)

    event.create('enriched_netherrack_crystal_slurry')
        .liquid()
        .color(0x9B7F83)

    event.create('enriched_nether_quartz')
        .gem()
        .color(0xFFBCC7).iconSet(GTMaterialIconSet.QUARTZ)

    event.create('diluted_netherrack_slurry')
        .liquid()
        .color(0x765B62)

    event.create('wriggle_netherrack')
        .liquid()
        .color(0x6B1291)

    event.create('salty_wriggle_netherrack')
        .liquid()
        .color(0x61518B) 

    event.create('soul_netherrack_tear_mixture')
        .liquid()
        .color(0x4B2913)

    event.create('lava_oozed_soul_netherrack_tear_mixture')
        .liquid()
        .color(0x8D3A1C)//crying obsidian

    event.create('magnetic_separated_heavy_netherrack_metal_mixture')
        .dust()
        .color(0x891129)

    event.create('low_quality_netheritic_slurry')
        .liquid()
        .color(0xA28087)

    event.create('time_residue')
        .liquid()
        .color(0xB6A0B7)

    event.create('thousand_year_fuel')
        .liquid()
        .color(0x001000)

    event.create('irradiated_heavy_netherrack_metal_mixture')//radium?
        .dust()
        .color(0x776423)

    event.create('radioactive_helllium_rare_earth_compound')
        .dust()
        .color(0x546B17)

    event.create('helllium_plutonium_lead_scandium_boron_carbon_sulfur_radon_mixture')
        .dust()
        .color(0x662600)

    event.create('boron_trioxide')
        .components('2x boron', '3x oxygen')
        .dust()
        .color(0xC9D4CC)

    event.create('helllium_plutonium_lead_scandium_radon_oxygen_mixture')
        .dust()
        .color(0x9E1919)

    event.create('plutonium_iodide')
        .components('1x plutonium', '3x iodine')
        .dust()
        .color(0x7F167B)

    event.create('lead_iodide')
    .components('1x lead', '2x iodine')
        .dust()
        .color(0x47167F)

    event.create('helllium_scandium_radon_oxygen_iodine_mixture')
        .dust()
        .color(0xD73EAE)

    event.create('scandium_bromide')
        .dust()
        .color(0xAB924D)

    event.create('scandium_chloride')
        .dust()
        .color(0x358A84)

    event.create('scandium_hydroxide')
        .dust()
        .color(0xB9D1C2)

    event.create('helllium_radon_oxygen_bromine_iodine_mixture')
        .dust()
        .color(0xA9532E)

    event.create('helllium_oxygen_bromic_iodide')
        .dust()
        .color(0xC18B73)

    event.create('helllium_trifluoride')
        .dust()
        .color(0xC17398)

    event.create('helllium_tetrafluoride')
        .dust()
        .color(0xC173BC)

    event.create('oxygen_difluoride')
    .components('1x oxygen', '2x fluorine')
        .gas()
        .color(0x72DFFF)

    event.create('dioxygenyl_hexafluoroplatinate')
    .components('2x oxygen', '1x platinum', '6x fluorine')
        .dust()
        .color(0x8CA484)

    event.create('potassium_fluoride')
    .components('1x potassium', '1x fluorine')
        .dust()
        .color(0x53BBDB)

    event.create('potassium_hexafluoroplatinate')
    .components('1x potassium', '1x platinum', '6x fluorine')
        .dust()
        .color(0x849F4C)

    event.create('helllium')
        .ingot()
        .liquid()
        .color(0xDB2336)
        .element(GTElements.get("helllium"))
        .blastTemp(6666, 'high', GTValues.VA[GTValues.LuV], 1332)

    event.create('helllium_heptafluoride')
        .components('1x helllium', '7x fluorine')
        .dust()
        .color(0xC95E68)

    event.create('bromyl_fluoride')
        .liquid()
        .color(0x0F455C)

    event.create('bromine_trifluoride')
        .liquid()
        .color(0x29789A)

    event.create('iodyl_fluoride')
        .dust()
        .color(0x494172)

    event.create('iodine_pentafluoride')
        .components('1x iodine', '5x fluorine')
        .dust()
        .color(0x154494)

    event.create('selenium_tetrafluoride')
    .components('1x selenium', '4x fluorine')
        .dust()
        .color(0x1DA163)

    event.create('seleninyl_fluoride')
    .components('1x selenium', '1x oxygen', '2x fluorine')
        .dust()
        .color(0x6EC9B9)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create('ignis_gas')
        .gas()
        .color(0xE23E3E)

    event.create('exchanged_light_netherrack_slurry')
        .liquid()
        .color(0xD781C3)

    event.create('poor_metal_mixture')
        .dust()
        .color(0x908A34)

    event.create('zincite_poor_metal_mixture')
    .components('1x zinc', '1x oxygen')
        .dust()
        .color(0xBABABA)

    event.create('zinc_exhaust')
        .gas()
        .color(0xC6DBD7)

    event.create('zinc_residue')
        .dust()
        .color(0xD9D9D9)

    event.create('zinc_cadmium_sulfate')
        .dust()
        .color(0x4C4D4D)

    event.create('zinc_amalgam')
    .components('1x zinc', '2x mercury')
        .liquid()
        .color(0xD1B596)

    event.create('cadmium_thallium_sulfate_solution')
        .liquid()
        .color(0x4B5A5C)

    event.create('cadmium_sulfate_solution')
        .liquid()
        .color(0x5C5B4B)

    event.create('thallium_residue')
        .dust()
        .color(0x234352)

    event.create('thallium_sulfate_solution')
        .liquid()
        .color(0x524B23)

    event.create('thallium_chloride')
        .dust()
        .color(0x1F6F83)

    event.create('zinc_chloride')
    .components('1x zinc', '2x chlorine')
        .dust()
        .color(0x9AC1C0)

    event.create('germanium_residue')
        .dust()
        .color(0x0C1818)

    event.create('germanium_acid_solution')
        .liquid()
        .color(0x8D8D9F)

    event.create('germanium_chloride')
        .dust()
        .color(0x23817B)

    event.create('germanium_oxide')
        .dust()
        .color(0x055853)
    
        //polonium


    event.create('aluminium_scandium')
    .ingot()
        .color(0xD2D7C7)
        .components('3x aluminium', '1x scandium')
        .flags(GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_LONG_ROD)
        .blastTemp(5000, 'high', GTValues.VA[GTValues.LuV], 1020)

    event.create('tpv_alloy')
    .ingot()
    .fluid()
        .color(0xFF3FE6)
        .components('1x thallium', '1x prismarine', '1x vanadium')
        .blastTemp(3200, 'mid', GTValues.VA[GTValues.IV], 3125)
        .flags(GTMaterialFlags.GENERATE_ROTOR, GTMaterialFlags.GENERATE_GEAR)
        .cableProperties(GTValues.V[GTValues.ZPM], 4, 2, false)
    }
)

GTCEuStartupEvents.materialModification(() => {
    GTMaterials.NaquadahAlloy.setComponents("2x naquadah", "1x osmiridium", "2x trinium", "2x netherite")
    GTMaterials.NaquadahAlloy.setFormula("Nq2(Ir3Os)Ke2Nr2", true)
    /*GTMaterials.get('netherrack_slurry').setFormula('????Nr???')
    GTMaterials.get('shine_netherrack_slurry').setFormula('????Nr???')
    GTMaterials.get('heavy_netherrack_slurry').setFormula('Nr???')
    GTMaterials.get('light_netherrack_slurry').setFormula('????')
    //WIP, sorry
    */
    GTMaterials.get('zincite_poor_metal_mixture').setFormula('ZnO?')
    GTMaterials.get('zinc_exhaust').setFormula('Zn?')
    GTMaterials.get('zinc_residue').setFormula('Zn?')
    GTMaterials.get('zinc_cadmium_sulfate').setFormula('(H2SO4)(CdZn?)')
    GTMaterials.get('cadmium_thallium_sulfate_solution').setFormula('(H2SO4)(CdTl)')
    GTMaterials.get('cadmium_sulfate_solution').setFormula('CdH2SO4')
    GTMaterials.get('zinc_cadmium_sulfate').setFormula('(H2SO4)(CdZn?)')
    GTMaterials.get('thallium_residue').setFormula('Tl?')
    GTMaterials.get('thallium_sulfate_solution').setFormula('TlH2SO4')
    GTMaterials.get('thallium_chloride').setFormula('TlCl')
    GTMaterials.get('germanium_residue').setFormula('Ge?')
    GTMaterials.get('germanium_acid_solution').setFormula('GeOH?')
    GTMaterials.get('germanium_chloride').setFormula('GeCl4')
    GTMaterials.get('germanium_oxide').setFormula('GeO2')
    }
)

StartupEvents.registry("item", event => {
  event.create("salty_wriggle_netherrack_doped_tear")
})