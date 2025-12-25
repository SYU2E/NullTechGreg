ServerEvents.recipes(event => {
    event.recipes.gtceu.assembler(('electrum_coil_block'))
        .itemInputs('8x gtceu:electrum_double_wire', '4x gtceu:silver_foil')
        .inputFluids('gtceu:wrought_iron 144')
        .itemOutputs('kubejs:electrum_coil_block')
        .duration(100)
        .EUt(GTValues.VA[GTValues.ULV])
    }
)