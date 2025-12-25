GTCEuStartupEvents.registry("gtceu:material", event => {

    event.create('applidium')
        .ingot()
        .liquid()
        .blastTemp(2650, 'low', GTValues.VA[GTValues.HV], 2220)
        .components('4x ender_pearl', '3x lead', '1x niobium', '2x mercury')
        .color(0xD02CF0)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_FOIL)

    event.create('red_alloy_manganese_phosphide_magnesium_diboride_mercury_barium_calcium_cuprate_uranium_triplatinum_samarium_iron_arsenic_oxide_lower_superconducting_alloy')
        .ingot()
        .cableProperties(GTValues.V[GTValues.IV], 32, 0, true)
        .blastTemp(5001, 'higher', GTValues.VA[GTValues.IV], 9001)
        .components('1x red_alloy', '2x manganese_phosphide', '2x magnesium_diboride', '2x mercury_barium_calcium_cuprate', '2x uranium_triplatinum', '2x samarium_iron_arsenic_oxide')
        .color(0xF5EBFF)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.GENERATE_DENSE, GTMaterialFlags.DISABLE_ALLOY_BLAST)
        }
)

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('germanium_solder')
      .fluid()
      .color(0xB6BFBD)

    event.create('bio_solder')
      .fluid()
      .color(0xBE3AFF)
})