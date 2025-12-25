ServerEvents.recipes(event => {
    event.recipes.gtceu.steam_turbine(('critical_steam'))
        .inputFluids('gtceu:critical_steam 640')
        .outputFluids('gtceu:distilled_water 8')
        .duration(10)
        .EUt(-128)
    }
)