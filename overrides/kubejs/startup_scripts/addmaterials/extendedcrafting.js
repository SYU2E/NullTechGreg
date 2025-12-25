GTCEuStartupEvents.registry("gtceu:material", event => {
    event.create('luminessence_molybdenum_disilicide')
        .ingot()
        .color(0xF6E440)
        .flags(GTMaterialFlags.GENERATE_PLATE)
        .blastTemp(2650, 'low', GTValues.VA[GTValues.HV], 410)
    }
)

GTCEuStartupEvents.materialModification(() => {
    GTMaterials.get('luminessence_molybdenum_disilicide').setFormula('(((Si(FeS2)5(CrAl2O3)Hg3)Au)(Si(FeS2)5(CrAl2O3)Hg3)CS(Ni(AuAgCu3)Fe3)(H3PO4)2)MoSi2')
    }
)