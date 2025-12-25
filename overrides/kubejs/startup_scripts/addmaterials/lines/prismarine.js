GTCEuStartupEvents.registry("gtceu:material", event => {
    event.create('sea_water_solution')
        .liquid(293)
        .color(0x2F6B81)

    event.create('hot_sea_water_solution')
        .liquid(363)
        .color(0x729EAE)

    event.create('acidic_sea_water_solution')
        .liquid(343)
        .color(0xB1C8D1)

    event.create('crystaline_sea_water_solution')
        .liquid(323)
        .color(0x6EADDC)

    event.create('crystaline_sea_water')
        .liquid(313)
        .color(0x1E92EB)

    event.create('iodine_crystaline_sea_water')
        .liquid(303)
        .color(0x136AAC) 
        
    event.create('material_crystaline_sea_water')
        .liquid(303)
        .color(0x061239) 

    event.create('material_waste')
        .liquid(293)
        .color(0x6C5317) 

    event.create('aquatic_acid')
        .liquid(283)
        .color(0xB5B5EE) 

    event.create('coral_aquatic_solution')
        .liquid(283)
        .color(0x8282CA) 

    event.create('cooled_coral_aquatic_solution')
        .liquid(203)
        .color(0x6679C6)

    event.create('raw_aquatic_liquid')
        .liquid(203)
        .color(0x3E55B0)

    event.create('cracked_aquatic_liquid')
        .liquid(293)
        .color(0x7882AB)

    event.create('aqua_gas')
        .gas(293)
        .color(0xAFBFFF)

    event.create('cobalt_aquate_trichloride')
        .dust()
        .color(0x4055AB)   

    event.create('cobalt_arsenide')
        .dust()
        .components('1x cobalt', '1x arsenic')
        .color(0x3A475F)

    event.create('aquate_trichloride')
        .dust()
        .color(0x8AD7CD)

    event.create('aquate_hydroxide')
        .dust()
        .color(0x8AA9D7)

    event.create('aquate')
        .ingot()
        .fluid()
        .color(0x00DECF)
        .element(GTElements.get("aquate"))
        .blastTemp(4350, 'mid', GTValues.VA[GTValues.IV], 1910)

    event.create('aquate_alloy')
        .ingot()
        .fluid()
        .color(0x10A89E)
        .components('12x aquate', '3x tungsten_steel', '2x cerium', '1x thorium')
        .blastTemp(5550, 'mid', GTValues.VA[GTValues.LuV], 2190)
        .flags(GTMaterialFlags.GENERATE_ROTOR, GTMaterialFlags.GENERATE_GEAR)

    event.create('low_quality_prismarine')
        .dust()
        .color(0x68BAC7)

    event.create('filtered_prismarine')
        .dust()
        .color(0x9ACCD4)

    event.create('loosened_prismarine')
        .dust()
        .color(0x8BB1B7)

    event.create('prismarine_trisulfate')
        .dust()
        .color(0xAD93DA)//seabST

    event.create('prismarine_trioxide')
        .dust()
        .color(0xA2A2DB)

    event.create('dirty_prismarine')
        .gem()
        .color(0x517F84)

    event.create('prismarine')
        .ingot()
        .color(0x4EF6F0)
        .element(GTElements.get("prismarine"))
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_FRAME)
        .ignoredTagPrefixes([
            TagPrefix.dustSmall,
            TagPrefix.dustTiny
        ])
    }
)
GTCEuStartupEvents.materialModification(event => {
    TagPrefix.dust.setIgnored(GTMaterialRegistry.getMaterial("prismarine"))
    GTMaterials.TungstenSteel.setComponents("1x tungsten", "1x steel", "1x prismarine")
    GTMaterials.TungstenSteel.setFormula("FeW⊲", true)
    GTMaterials.HSSG.setFormula("(FeW⊲)5CrMo2V", true)
    GTMaterials.HSSE.setFormula("((FeW⊲)5CrMo2V)6CoMnSi", true)
    GTMaterials.HSSS.setFormula("((FeW⊲)5CrMo2V)6Ir2Os", true)
})