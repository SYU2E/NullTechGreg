ServerEvents.recipes(event => {
    event.recipes.gtceu.fusion_reactor(('tellurium'))
        .inputFluids('gtceu:tin 16', 'gtceu:helium 16')
        .outputFluids('gtceu:tellurium 16')
        .duration(56)
        .EUt(GTValues.VA[GTValues.IV])
        .fusionStartEU(70000000);  
        }
)

ServerEvents.recipes(event => {
    event.shaped('4x gtceu:industrial_steam_casing', [
        "BEB",
        "RCR",
        "BPB"
    ], {
        B: 'gtceu:bronze_plate',
        E: 'kubejs:electrum_coil_block',
        C: 'gtceu:bronze_machine_casing',
        R: 'gtceu:rubber_plate',
        P: 'ulvcovm:ulv_electric_pump'
    }).id('gtceu:industrial_steam_casing')

    event.shaped('gtceu:steam_fusion_reactor', [
        "BPB",
        "LCL",
        "BPB"
    ], {
        B: 'gtceu:steam_bucket',
        C: 'gtceu:industrial_steam_casing',
        L: '#gtceu:circuits/lv',
        P: 'gtceu:cupronickel_coil_block'
    }).id('gtceu:steam_fusion_reactor')


    event.recipes.gtceu.steam_fusion_reactor(('critical_steam'))
        .inputFluids('gtceu:steam 4000', 'minecraft:lava 16')
        .outputFluids('gtceu:critical_steam 8000')
        .duration(100)
        .EUt(32)
    }
)