GTCEuStartupEvents.registry("gtceu:material", event => {
    event.create('lead_nitrate')
        .dust()
        .color(0x675780)
        .components('1x lead', '2x nitrogen', '6x oxygen')

    event.create('thiocyanic_acid')
        .liquid()
        .color(0xBCBB97)
        .components('1x hydrogen', '1x sulfur', '1x carbon', '1x nitrogen')

    event.create('low_quality_blaze')
        .dust()
        .color(0x8E6D4C)

    event.create('low_quality_blaze_powder_mixture')
        .liquid()
        .color(0xC1A779)
    }
)

GTCEuStartupEvents.materialModification(() => {
    GTMaterials.get('lead_nitrate').setFormula('Pb(NO3)2')
    GTMaterials.get('low_quality_blaze').setFormula('CS?')
    GTMaterials.get('low_quality_blaze_powder_mixture').setFormula('CS?')
    }
)