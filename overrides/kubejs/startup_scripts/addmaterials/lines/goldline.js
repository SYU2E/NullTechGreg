const $PropertyKey = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.PropertyKey")
const $OreProperty = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.OreProperty")

GTCEuStartupEvents.registry("gtceu:material", event => {
    event.create('gold_metal_mixture')
        .dust()
        .color(0xACAC00)
        .ore()
    event.create('copper_gold_mixture')
        .ingot()
        .color(0xBC8A00)
    event.create('gold_leach')
        .dust()
        .color(0xA67A00)
    event.create('chloroauric_acid')
        .liquid(293)
        .color(0xD0C020)
    event.create('leached_copper')
        .dust()
        .color(0x907020)
        
});
GTCEuStartupEvents.materialModification(event => {
    if (GTMaterials.get('gold_metal_mixture').hasProperty(PropertyKey.ORE)) 
        {
        GTMaterials.get('gold_metal_mixture').removeProperty(PropertyKey.ORE)
    }

    let gold_metal_mixture_ore_prop = new $OreProperty()
    gold_metal_mixture_ore_prop.setOreByProducts("magnetite", "magnetite", "gold_metal_mixture")
    GTMaterials.get('gold_metal_mixture').setProperty($PropertyKey.ORE, gold_metal_mixture_ore_prop)
})
GTCEuStartupEvents.materialModification(() => {
    GTMaterials.get('gold_metal_mixture').setFormula('Au?')
    GTMaterials.get('copper_gold_mixture').setFormula('Cu3Au?')
    GTMaterials.get('gold_leach').setFormula('HCu3Au?')
    GTMaterials.get('chloroauric_acid').setFormula('H2AuCl?')
    GTMaterials.get('leached_copper').setFormula('Cu3?')
    }
)