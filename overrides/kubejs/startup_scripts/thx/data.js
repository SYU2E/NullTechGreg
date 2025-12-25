const $ComponentItem = Java.loadClass("com.gregtechceu.gtceu.api.item.ComponentItem");
const $DataItemBehavior = Java.loadClass("com.gregtechceu.gtceu.common.item.DataItemBehavior");
const $ItemProperties = Java.loadClass("net.minecraft.world.item.Item$Properties");

StartupEvents.registry("item", event => {
    event
        .createCustom("kubejs:data_module_t2", () => {
            const props = new $ItemProperties();
            const item = $ComponentItem.create(props);
            // requireDataBank, capacity(よくわからないのでDataModuleの4倍にした)
            item.item.attachComponents(new $DataItemBehavior(true, 1024));
            return item;
        })
        .displayName("Ultimate Data Module");
});

/*
    event.recipes.kubejs
        .shapeless("kubejs:data_module_t2", ["kubejs:data_module_t2"])
        .id("kjs:shapeless/data_module_t2_nbt");

    event.recipes.gtceu
        .assembly_line("example")
        .itemInputs("#minecraft:dirt")
        .itemOutputs("minecraft:grass_block")
        .duration(100)
        .EUt(GTValues.VA[GTValues.UHV])
        .stationResearch(b =>
            b
                .researchStack("minecraft:dirt")
                .CWUt(384, 1536000)
                .EUt(GTValues.VA[GTValues.UV])
                .dataStack(Item.of("kubejs:data_module_t2"))
        );
*/