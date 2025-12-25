GTCEuStartupEvents.registry("gtceu:material", event => {


    event.create('low_quality_ender_pearl')
        .dust()
        .color(0x333A33)


    event.create('beryllium_chloride')
        .dust()
        .color(0x6CFC92)
        .components('1x beryllium', '2x chlorine')

    event.create('trimethylchlorosilane')
        .liquid()
        .color(0x58153D)
        .components('3x carbon', '9x hydrogen', '1x silicon', '1x chlorine')

    event.create('methyltrichlorosilane')
        .liquid()
        .color(0x58153D)
        .components('1x carbon', '3x hydrogen', '1x silicon', '3x chlorine')

    event.create('trimethylsilyl_azide')
        .liquid()
        .color(0x2B1558)
        .components('3x carbon', '9x hydrogen', '1x silicon', '3x nitrogen')

    event.create('sodium_azide')
        .dust()
        .color(0x074858)
        .components('1x sodium', '3x nitrogen')

    event.create('beryllium_azide')
        .dust()
        .color(0x075838)
        .components('1x beryllium', '6x nitrogen')

    }
)

GTCEuStartupEvents.materialModification(() => {
    GTMaterials.get('trimethylchlorosilane').setFormula('(CH3)3SiCl')
    GTMaterials.get('trimethylsilyl_azide').setFormula('(CH3)3SiN3')
    GTMaterials.get('methyltrichlorosilane').setFormula('(CH3)SiCl3')
    GTMaterials.get('beryllium_azide').setFormula('Be(N3)2')
    GTMaterials.get('low_quality_ender_pearl').setFormula('(BeK4N5)(HCl)?')
    }
)

StartupEvents.registry("item", event => {
  event.create("ender_pearl_case")
})