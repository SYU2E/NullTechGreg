const GTNNRecipes = Java.loadClass("dev.arbor.gtnn.data.GTNNRecipes")

ServerEvents.recipes(event => {
    event.replaceInput({ id: /extendedcrafting/ }, "extendedcrafting:black_iron_ingot", "gtceu:black_steel_plate")
    event.replaceInput({ id: /extendedcrafting/ }, "minecraft:iron_ingot", "gtceu:stainless_steel_plate")
    event.replaceInput({ id: /extendedcrafting/ }, "minecraft:iron_block", "gtceu:stainless_steel_block")
    event.replaceInput({ id: /extendedcrafting/ }, "minecraft:gold_ingot", "gtceu:luminessence_molybdenum_disilicide_plate")
    event.replaceInput({ id: /extendedcrafting/ }, "minecraft:gold_block", "gtceu:luminessence_molybdenum_disilicide_block")

    event.remove({ id: 'extendedcrafting:luminessence' })

    event.recipes.gtceu.chemical_plant(('luminessence'))
        .itemInputs('2x minecraft:glowstone_dust', 'minecraft:redstone', 'minecraft:blaze_powder', '2x gtceu:black_steel_dust')
        .itemOutputs('2x extendedcrafting:luminessence')
        .inputFluids('gtceu:phosphoric_acid 2000')
        .duration(120)
        .addCondition(GTNNRecipes.setPlantCasing(3))
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.mixer(('luminessence_molybdenum_disilicide_dust'))
        .itemInputs('2x extendedcrafting:luminessence', '3x gtceu:molybdenum_disilicide_dust')
        .itemOutputs('5x gtceu:luminessence_molybdenum_disilicide_dust')
        .duration(200)
        .EUt(GTValues.VA[GTValues.HV])



    /*event.shaped('extendedcrafting:advanced_component', [
        "BL ",
        "PP ",
        "   "
    ], {
        B: 'extendedcrafting:black_iron_slate',
        L: 'extendedcrafting:luminessence',
        P: 'gtceu:luminessence_molybdenum_disilicide_plate',
    }).id('extendedcrafting:advanced_component')*/

}
)