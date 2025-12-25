GTCEuStartupEvents.registry("gtceu:material", event => {


    event.create('raw_curly_rubber_mixture')
        .dust()
        .color(0xCECECE)

    event.create('rubber_mixture')
        .components('1x silicone_rubber', '1x styrene_butadiene_rubber')
        .dust()
        .color(0xA1A1A1)

    event.create('tellurium_vulcanized_rubber')
        .polymer()
        .liquid()
        .flags(GTMaterialFlags.GENERATE_RING, GTMaterialFlags.GENERATE_FOIL)
        .color(0x95D030)

    event.create('tellurium_diethyldithiocarbamate')
        .components('1x tellurium', '8x sulfur', '4x nitrogen', '40x hydrogen', '20x carbon')
        .dust()
        .color(0x89D4B8)

    event.create('carbon_disulfide')
        .components('1x carbon', '2x sulfur')
        .gas()
        .color(0xBDA965)

    event.create('diethylamine')
        .components('4x carbon', '11x hydrogen', '1x nitrogen')
        .liquid()
        .color(0xB9B1BD)

    event.create('tellurium_dioxide')
        .components('1x tellurium', '2x oxygen')
        .dust()
        .color(0xC3E190)

    event.create('orthotelluric_acid')
        .components('1x tellurium', '6x hydrogen', '6x oxygen')
        .liquid()
        .color(0x56D528)

    event.create('tellurium_hydroxide')
        .components('1x tellurium', '1x oxygen', '1x hydrogen')
        .dust()
        .color(0xC4E886)
    }
)

GTCEuStartupEvents.materialModification(() => {
    GTMaterials.get('orthotelluric_acid').setFormula('Te(OH)6')
    GTMaterials.get('tellurium_hydroxide').setFormula('TeOH?')
    GTMaterials.get('diethylamine').setFormula('(CH3CH2)2NH')
    GTMaterials.get('tellurium_diethyldithiocarbamate').setFormula('((CH3CH2)2NCS2)4Te?')
    GTMaterials.get('tellurium_vulcanized_rubber').setFormula('(C5H8?)Te?')
    }
)