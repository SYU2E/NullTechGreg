ServerEvents.recipes(event => {


    event.shaped('kubejs:universal_inscriber_press', [
        " C ",
        "LGE",
        " S "
    ], {
        C: 'ae2:calculation_processor_press',
        E: 'ae2:engineering_processor_press',
        S: 'ae2:silicon_press',
        L: 'ae2:logic_processor_press',
        G: 'gtceu:good_electronic_circuit'
    }).id('kubejs:universal_inscriber_press')

    event.recipes.gtceu.forming_press(('printed_calculation_processor'))
        .notConsumable('kubejs:universal_inscriber_press')
        .itemInputs('gtceu:certus_quartz_plate')
        .itemOutputs('ae2:printed_calculation_processor')
        .duration(300)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.forming_press(('printed_engineering_processor'))
        .notConsumable('kubejs:universal_inscriber_press')
        .itemInputs('gtceu:diamond_plate')
        .itemOutputs('ae2:printed_engineering_processor')
        .duration(300)
        .EUt(GTValues.VA[GTValues.MV])

        event.recipes.gtceu.forming_press(('printed_logic_processor'))
        .notConsumable('kubejs:universal_inscriber_press')
        .itemInputs('gtceu:gold_plate')
        .itemOutputs('ae2:printed_logic_processor')
        .duration(300)
        .EUt(GTValues.VA[GTValues.MV])

        event.recipes.gtceu.forming_press(('printed_silicon'))
        .notConsumable('kubejs:universal_inscriber_press')
        .itemInputs('gtceu:silicon_plate')
        .itemOutputs('ae2:printed_silicon')
        .duration(300)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.component_assembler(('calculation_processor'))
        .itemInputs('#gtceu:circuits/lv', 'ae2:printed_silicon', 'ae2:printed_calculation_processor')
        .itemOutputs('ae2:calculation_processor')
        .duration(640)
        .EUt(GTValues.VA[GTValues.LV])
        .inputFluids('gtceu:redstone 144', 'gtceu:polyethylene 288')

        event.recipes.gtceu.component_assembler(('engineering_processor'))
        .itemInputs('#gtceu:circuits/lv', 'ae2:printed_silicon', 'ae2:printed_engineering_processor')
        .itemOutputs('ae2:engineering_processor')
        .duration(640)
        .EUt(GTValues.VA[GTValues.LV])
        .inputFluids('gtceu:redstone 144', 'gtceu:polyethylene 288')

        event.recipes.gtceu.component_assembler(('logic_processor'))
        .itemInputs('#gtceu:circuits/lv', 'ae2:printed_silicon', 'ae2:printed_logic_processor')
        .itemOutputs('ae2:logic_processor')
        .duration(640)
        .EUt(GTValues.VA[GTValues.LV])
        .inputFluids('gtceu:redstone 144', 'gtceu:polyethylene 288')
        
    }
)