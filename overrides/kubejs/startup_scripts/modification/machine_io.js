GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    GTRecipeTypes.ASSEMBLER_RECIPES.setMaxIOSize(12,1,1,0);
    GTRecipeTypes.CENTRIFUGE_RECIPES.setMaxIOSize(2,6,2,6);
    GTRecipeTypes.ELECTROLYZER_RECIPES.setMaxIOSize(2,6,2,6);
    GTRecipeTypes.VACUUM_RECIPES.setMaxIOSize(1,1,2,2);

});