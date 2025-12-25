StartupEvents.registry('block', event => {

    event.create('fusion_casing_mk4')
        .displayName('Fusion Casing MK IV')
        .hardness(5)
        .resistance(1)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/fusion_casing_mk4');

    event.create('fusion_coil_mk2')
        .displayName('Fusion Coil MK II')
        .hardness(5)
        .resistance(1)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/fusion_coil_mk2');

        event.create('fusion_glass_mk2')
        .displayName('Fusion Glass MK II')
        .hardness(5)
        .resistance(1)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/fusion_glass_mk2');
})