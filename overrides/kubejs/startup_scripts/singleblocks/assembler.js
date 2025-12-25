GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('component_assembler')
        .category('assembler')
        .setEUIO('in')
        .setMaxIOSize(6, 1, 3, 0)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ASSEMBLER)
})
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('component_assembler', 'simple') 
        .tiers(GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV)
        .definition((tier, builder) =>
            builder
        .langValue(GTValues.VLVH[tier] + " Component Assembler")
        .recipeType('component_assembler')
        .workableTieredHullModel('gtceu:block/machines/assembler')
        )
})