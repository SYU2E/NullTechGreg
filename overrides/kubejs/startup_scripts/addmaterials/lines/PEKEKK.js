GTCEuStartupEvents.registry('gtceu:material', event => {

    event.create('polyetherketonetherketoneketone')
        .polymer()
        .liquid()
        .color(0x111111)
        .components('19x carbon', '12x hydrogen', '3x oxygen')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_FOIL, GTMaterialFlags.STICKY)

    event.create("i_iv_bis_i_iv_fluorobenzoyl_benzene")
        .fluid()
        .components('20x carbon', '12x hydrogen', '2x fluorine', '2x oxygen')
        .color(0x0C957F)

    event.create("terephthaloyl_chloride")
        .fluid()
        .components('8x carbon', '4x hydrogen', '2x chlorine', '2x oxygen')
        .color(0x00C614)

    event.create("aluminium_chloride")
        .dust()
        .components('1x aluminium', '3x chlorine')
        .color(0x246F56)

    event.create("fluorobenzene")
        .fluid()
        .components('6x carbon', '5x hydrogen', '1x fluorine')
        .color(0x185F5F)

    event.create("benzenediazonium_tetrafluoroborate")
        .fluid()
        .components('6x carbon', '5x hydrogen', '1x boron', '4x fluorine', '2x nitrogen')
        .color(0x97D1D1)

    event.create("hot_benzenediazonium_tetrafluoroborate")
        .fluid()
        .components('benzenediazonium_tetrafluoroborate')
        .color(0x1F9595)

    event.create("aniline")
        .fluid()
        .components('6x carbon', '7x hydrogen', '1x nitrogen')
        .color(0xD7C169)

    event.create("fluoroboric_acid")
        .fluid()
        .components('1x hydrogen', '1x boron', '4x fluorine')
        .color(0x76939F)

    event.create("boric_acid")
        .dust()
        .components('1x boron', '3x hydrogen', '3x oxygen')
        .color(0xA0AFA3)

    event.create("benzenediazonium_chloride")
        .fluid()
        .components('6x carbon', '5x hydrogen', '1x chlorine', '2x nitrogen')
        .color(0xD2E5D6)

    event.create("nitrous_acid")
        .fluid()
        .components('1x hydrogen', '1x nitrogen', '2x oxygen')
        .color(0x9F9C3F)

    event.create("i_iv_bis_trichloromethyl_benzene")
        .fluid()
        .components('8x carbon', '4x hydrogen', '6x chlorine')
        .color(0x485735)

    event.create("terephthalic_acid")
        .fluid()
        .components('8x carbon', '6x hydrogen', '4x oxygen')
        .color(0x056833)

    event.create("cobalt_manganese_bromide")
        .dust()
        .components('1x cobalt', '1x manganese', '4x bromine')
        .color(0x841FAF)

    event.create("hydrobromic_acid")
        .fluid()
        .components('1x hydrogen', '1x bromine')
        .color(0x454149)

    event.create("iv_ivd_dihydroxybenzophenone")
        .fluid()
        .components('13x carbon', '10x hydrogen', '3x oxygen')
        .color(0x987E6C)

    event.create("iv_hydroxybenzoic_acid")
        .fluid()
        .components('7x carbon', '6x hydrogen', '3x oxygen')
        .color(0x6C9598)

    event.create("potassium_phenoxide")
        .dust()
        .components('7x carbon', '4x hydrogen', '3x oxygen', '2x potassium')
        .color(0x4DBFC7)

})