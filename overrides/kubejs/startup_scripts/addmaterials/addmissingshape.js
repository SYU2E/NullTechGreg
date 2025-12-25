    const $IngotProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.IngotProperty');
    const $DustProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.DustProperty');
    const $BlastProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.BlastProperty');
    const $FluidProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidProperty');
    const $FluidBuilder = Java.loadClass('com.gregtechceu.gtceu.api.fluids.FluidBuilder');
    const $FluidStorageKeys = Java.loadClass('com.gregtechceu.gtceu.api.fluids.store.FluidStorageKeys');


    GTCEuStartupEvents.registry('gtceu:material', event => {

        // Ingot
        GTMaterials.ManganesePhosphide.addFlags(GTMaterialFlags.GENERATE_PLATE)
        GTMaterials.MagnesiumDiboride.addFlags(GTMaterialFlags.GENERATE_PLATE)
        GTMaterials.MercuryBariumCalciumCuprate.addFlags(GTMaterialFlags.GENERATE_PLATE)
        GTMaterials.UraniumTriplatinum.addFlags(GTMaterialFlags.GENERATE_PLATE)
        GTMaterials.SamariumIronArsenicOxide.addFlags(GTMaterialFlags.GENERATE_PLATE)
        GTMaterials.Monazite.addFlags(GTMaterialFlags.GENERATE_LENS)
        GTMaterials.NaquadahEnriched.addFlags(GTMaterialFlags.GENERATE_FRAME)
        GTMaterials.Osmiridium.addFlags(GTMaterialFlags.GENERATE_DENSE)
        GTMaterials.Netherite.addFlags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_DENSE)
        GTMaterials.RhodiumPlatedPalladium.addFlags(GTMaterialFlags.GENERATE_FRAME)
        GTMaterials.Polytetrafluoroethylene.addFlags(GTMaterialFlags.GENERATE_RING)
        GTMaterials.Polybenzimidazole.addFlags(GTMaterialFlags.GENERATE_RING)
        GTMaterials.NaquadahAlloy.addFlags(GTMaterialFlags.GENERATE_ROUND)

        GTMaterials.Tellurium.setProperty(PropertyKey.DUST, new $DustProperty());
        GTMaterials.Scandium.setProperty(PropertyKey.DUST, new $DustProperty());
        GTMaterials.Selenium.setProperty(PropertyKey.DUST, new $DustProperty());
        GTMaterials.Technetium.setProperty(PropertyKey.DUST, new $DustProperty());
        GTMaterials.Thallium.setProperty(PropertyKey.DUST, new $DustProperty());
        GTMaterials.Germanium.setProperty(PropertyKey.DUST, new $DustProperty());
        GTMaterials.Polonium.setProperty(PropertyKey.DUST, new $DustProperty());
    });

GTCEuStartupEvents.registry('gtceu:material', event => {
    addFluid(GTMaterials.Oganesson, $FluidStorageKeys.GAS);
    addFluid(GTMaterials.Tellurium, $FluidStorageKeys.LIQUID);
    addFluid(GTMaterials.Selenium, $FluidStorageKeys.LIQUID);
    addFluid(GTMaterials.Radium, $FluidStorageKeys.LIQUID);
}
)

let addFluid = (mat, key) => {
    let prop = new $FluidProperty();
    prop.getStorage().enqueueRegistration(key, new $FluidBuilder());
    mat.setProperty(PropertyKey.FLUID, prop);
}  
