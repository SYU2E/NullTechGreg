/*const $PropertyKey = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.PropertyKey")
const $OreProperty = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.OreProperty")

GTCEuStartupEvents.registry("gtceu:material", event => {
    let iron_ore_prop = new $OreProperty(2 ,1)
    // oreMultiplier: 粉砕で何倍になるか (デフォルトは1) (基本粉砕で2なのでそれ以上にしたい場合に使用?)
    // byProductMultiplier: 副産物の倍率? (デフォルトでは1) (粉砕で副産物が一度にいくつ出てくるか?)
    // ()内は省略可。後者だけ変更したい場合は前者を1に。
    iron_ore_prop.setOreByProducts(GTMaterials.Nickel, GTMaterials.Nickel, GTMaterials.Tin, GTMaterials.Magnetite)
    // GTMaterials.A: ore -> crushed, crushed -> impure, impure -> dust
    // GTMaterials.B: crushed -> Centrifuged, Purified -> pure, pure -> dust
    // GTMaterials.C: cruched -> Purified, Centrifuged -> dust
    // GTMaterials.D: crushed -> Purified (ChemicalBath)
    // GTMaterials.B以降は省略可。省略した場合は最後に設定したものが省略したものに反映
    // GTMaterials.Dを設定する場合、以下も
    iron_ore_prop.setWashedIn(GTMaterials.SodiumPersulfate);
    // GTMaterials.E: ChemicalBathで洗浄に使うMaterial
    GTMaterials.Iron.setProperty($PropertyKey.ORE, iron_ore_prop)
    // ===ここまでが1セット===
})*/