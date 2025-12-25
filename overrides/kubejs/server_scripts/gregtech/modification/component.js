ServerEvents.recipes(event => {

    const tier = [
        ['lv', 'mv', 'tin', GTValues.VA[GTValues.LV], 'manganese_phosphide'],
        ['mv', 'hv', 'copper', GTValues.VA[GTValues.MV], 'magnesium_diboride'],
        ['hv', 'ev', 'gold', GTValues.VA[GTValues.HV], 'mercury_barium_calcium_cuprate'],
        ['ev', 'iv', 'aluminium', GTValues.VA[GTValues.EV], 'uranium_triplatinum'],
        ['iv', 'luv', 'platinum', GTValues.VA[GTValues.IV], 'samarium_iron_arsenic_oxide'],
    ]

    tier.forEach(([tier, tier2, cable, volt, supercon]) => {
    event.shaped(`gtceu:${tier}_component_assembler`, [
        "RCR",
        "CHC",
        "WFW"
    ], {
        W: `gtceu:${cable}_single_cable`,
        C: `#gtceu:circuits/${tier}`,
        H: `gtceu:${tier}_machine_hull`,
        R: `gtceu:${tier}_robot_arm`,
        F: `kubejs:${tier}_certificate`
    }).id(`gtceu:${tier}_component_assembler`)

    event.recipes.gtceu.assembler(`${tier}_certificate`)
    .itemInputs(`4x gtceu:${tier}_electric_motor`, `4x gtceu:${tier}_electric_pump`, `4x gtceu:${tier}_electric_piston`, `2x gtceu:${tier}_conveyor_module`, `2x gtceu:${tier}_robot_arm`, `2x gtceu:${tier}_emitter`, `2x gtceu:${tier}_sensor`, `2x gtceu:${tier}_field_generator`, `64x gtceu:${supercon}_single_wire`, `4x #gtceu:circuits/${tier}`)
    .itemOutputs(`kubejs:${tier}_certificate`)
    .duration(2000)
    .EUt(volt) 
    
    })

    const rubber = [
        ['rubber'],
        ['silicone_rubber'],
        ['styrene_butadiene_rubber'],
    ]

    rubber.forEach(([rubber]) => {
    event.recipes.gtceu.component_assembler(`lv_electric_pump_${rubber}`)
    .itemInputs('2x gtceu:tin_single_cable', 'gtceu:bronze_normal_fluid_pipe', '4x gtceu:tin_screw', 'gtceu:tin_rotor', `4x gtceu:${rubber}_ring`, 'gtceu:lv_electric_motor')
    .itemOutputs('gtceu:lv_electric_pump')
    .duration(200)
    .EUt(GTValues.VA[GTValues.LV])   
    })
    const addcomponent = [
        ['ev', 'iv', 'luv', 'niobium_titanium', GTValues.VA[GTValues.IV], GTValues.VA[GTValues.LuV], 'indium_tin_barium_titanium_cuprate', 'hsss', 'rhodium_plated_palladium', 'aquate_alloy', 'ruridit', 'palladium', 'magnetic_samarium', 'gtceu:laminated_glass', 'gtceu:quantum_star', 'polytetrafluoroethylene', 'germanium_solder', 'naquadah', 'tellurium_vulcanized_rubber', 'niobium_titanium', 'pcb_coolant', 'lubricant', 1, 1, 4],
        ['iv', 'luv', 'zpm', 'vanadium_gallium', GTValues.VA[GTValues.LuV], GTValues.VA[GTValues.ZPM], 'uranium_rhodium_dinaquadide', 'naquadah_alloy', 'aluminium_scandium', 'tpv_alloy', 'europium', 'trinium', 'magnetic_samarium', 'gtceu:fusion_glass', 'gtceu:quantum_star', 'polybenzimidazole', 'germanium_solder', 'enriched_naquadah', 'tellurium_vulcanized_rubber', 'naquadah', 'pcb_coolant', 'helllium', 1, 2, 6],
    ]
    addcomponent.forEach(([tier2, tier1, tier, cable, volt1, volt, supercon, basematerial, submaterial1, submaterial2, wirematerial, foilmaterial, magnetmaterial, glass, core, polymer, solder, liquidmaterial, rubbermaterial, pipematerial, coolant, lubricant, magnifi1, magnifi2, magnifi3]) => {
    event.recipes.gtceu.component_assembler(`${tier}_magnetic_core`)
    .itemInputs(`${magnifi1}x gtceu:long_${magnetmaterial}_rod`, `${magnifi3}x gtceu:long_${basematerial}_rod`, 4*magnifi1+`x gtceu:${basematerial}_ring`, 4*magnifi1+`x gtceu:${rubbermaterial}_ring`, `6x gtceu:${pipematerial}_tiny_fluid_pipe`)
    .inputFluids(`gtceu:${solder} `+288*magnifi2, `gtceu:${coolant} `+1000*magnifi3)
    .itemOutputs(`kubejs:${tier}_magnetic_core`)
    .duration(magnifi2*300)
    .EUt(volt1)

    event.recipes.gtceu.component_assembler(`${tier}_coil_cover`)
    .itemInputs(magnifi1+`x gtceu:${submaterial1}_frame`, 4*magnifi3+`x gtceu:fine_${wirematerial}_wire`, magnifi1+`x gtceu:${basematerial}_plate`, 4*magnifi1+`x gtceu:${polymer}_ring`, 4*magnifi1+`x gtceu:${rubbermaterial}_foil`)
    .inputFluids(`gtceu:${solder} `+144*magnifi2, `gtceu:${lubricant} `+500*magnifi2)
    .itemOutputs(`kubejs:${tier}_coil_cover`)
    .duration(magnifi2*200)
    .EUt(volt1)

    event.recipes.gtceu.component_assembler(`${tier}_regulation_part`)
    .itemInputs(2*magnifi1+`x gtceu:${basematerial}_frame`, magnifi1+`x #gtceu:circuits/${tier}`, magnifi1+`x gtceu:${basematerial}_gear`, magnifi1*3+`x gtceu:small_${basematerial}_gear`, 8*magnifi1+`x gtceu:${basematerial}_round`, 4*magnifi1+`x gtceu:${submaterial2}_screw`)
    .inputFluids(`gtceu:${solder} `+144*magnifi2, `gtceu:${lubricant} `+500*magnifi2)
    .itemOutputs(`kubejs:${tier}_regulation_part`)
    .duration(magnifi2*300)
    .EUt(volt1)

    event.recipes.gtceu.component_assembler(`${tier}_calculation_frame`)
    .itemInputs(2*magnifi1+`x gtceu:${basematerial}_frame`, 4*magnifi1+`x ${glass}`, 2+`x #gtceu:circuits/${tier}`, 4+`x #gtceu:circuits/${tier1}`, 6+`x #gtceu:circuits/${tier2}`, 8*magnifi2+`x gtceu:${cable}_single_wire`)
    .inputFluids(`gtceu:${solder} `+288*magnifi2, `gtceu:${rubbermaterial} `+288*magnifi2, `gtceu:${liquidmaterial} `+576*magnifi2)
    .itemOutputs(`kubejs:${tier}_calculation_frame`)
    .duration(magnifi2*400)
    .EUt(volt1)

    event.recipes.gtceu.component_assembler(`${tier}_containment_forge_panel`)
    .itemInputs(3*magnifi1+`x gtceu:double_${basematerial}_plate`, 4*magnifi1+`x gtceu:${submaterial1}_plate`, `gtceu:${pipematerial}_small_fluid_pipe`, 8*magnifi2+`x gtceu:${submaterial2}_bolt`)
    .inputFluids(`gtceu:${solder} `+288*magnifi2, `gtceu:${polymer} `+288*magnifi2)
    .itemOutputs(`kubejs:${tier}_containment_forge_panel`)
    .duration(magnifi2*300)
    .EUt(volt1)

    event.recipes.gtceu.component_assembler(`${tier}_precision_assembly`)
    .itemInputs(magnifi1+`x gtceu:${tier1}_robot_arm`, 4+`x #gtceu:circuits/${tier}`, 2*magnifi1+`x ${core}`, 4*magnifi2+`x gtceu:${basematerial}_rod`, 2*magnifi3+`x gtceu:${supercon}_single_wire`, 4*magnifi3+`x gtceu:${foilmaterial}_foil`)
    .inputFluids(`gtceu:${liquidmaterial} `+576*magnifi2)
    .itemOutputs(`kubejs:${tier}_precision_assembly`)
    .duration(magnifi2*400)
    .EUt(volt1)

    event.recipes.gtceu.component_assembler(`${tier}_transportation_unit`)
    .itemInputs(magnifi1+`x gtceu:${tier2}_conveyor_module`, 2*magnifi1+`x gtceu:${basematerial}_gear`, 5*magnifi1+`x gtceu:small_${submaterial1}_gear`, 4*magnifi2+`x gtceu:${rubbermaterial}_plate`, 4*magnifi3+`x gtceu:${basematerial}_round`, 4*magnifi2+`x gtceu:${cable}_single_cable`)
    .inputFluids(`gtceu:${solder} `+288*magnifi2, `gtceu:${rubbermaterial} `+288*magnifi2, `gtceu:${lubricant} `+500*magnifi2)
    .itemOutputs(`kubejs:${tier}_transportation_unit`)
    .duration(magnifi2*300)
    .EUt(volt1)

    event.recipes.gtceu.component_assembler(`${tier}_speed_rotation_engine`)
    .itemInputs(2*magnifi1+`x gtceu:${basematerial}_frame`, magnifi1+`x gtceu:${tier2}_electric_piston`, magnifi1*2+`x #gtceu:circuits/${tier1}`, 4*magnifi2+`x gtceu:${rubbermaterial}_ring`, 3*magnifi2+`x gtceu:${pipematerial}_small_fluid_pipe`, 4*magnifi2+`x gtceu:${cable}_single_cable`)
    .inputFluids(`gtceu:${solder} `+288*magnifi2, `gtceu:${lubricant} `+500*magnifi2)
    .itemOutputs(`kubejs:${tier}_speed_rotation_engine`)
    .duration(magnifi2*300)
    .EUt(volt1)

    event.recipes.gtceu.component_assembler(`${tier}_quantum_power_core`)
    .itemInputs(magnifi1+`x gtceu:${basematerial}_frame`, 2*magnifi1+`x gtceu:${submaterial1}_plate`, 4*magnifi1+`x gtceu:${submaterial2}_plate`, 4*magnifi2+`x gtceu:long_${basematerial}_rod`, 4*magnifi2+`x gtceu:${cable}_single_cable`)
    .inputFluids(`gtceu:${solder} `+288*magnifi2, `gtceu:${rubbermaterial} `+288*magnifi2)
    .itemOutputs(`kubejs:${tier}_quantum_power_core`)
    .duration(magnifi2*300)
    .EUt(volt1)

    event.remove({ id: `gtceu:assembly_line/electric_motor_${tier}` })
    event.remove({ id: `gtceu:assembly_line/electric_pump_${tier}` })
    event.remove({ id: `gtceu:assembly_line/conveyor_module_${tier}` })
    event.remove({ id: `gtceu:assembly_line/electric_piston_${tier}` })
    event.remove({ id: `gtceu:assembly_line/robot_arm_${tier}` })
    event.remove({ id: `gtceu:assembly_line/emitter_${tier}` })
    event.remove({ id: `gtceu:assembly_line/sensor_${tier}` })
    event.remove({ id: `gtceu:assembly_line/field_generator_${tier}` })

    event.recipes.gtceu.assembly_line(`${tier}_electric_motor`)
    .itemInputs(`kubejs:${tier}_magnetic_core`, 2*magnifi1+`x gtceu:long_${basematerial}_rod`, magnifi3+`x kubejs:${tier}_coil_cover`, magnifi1+`x kubejs:${tier}_speed_rotation_engine`, magnifi1+`x kubejs:${tier}_quantum_power_core`, 2*magnifi3+`x gtceu:${basematerial}_round`, 4+`x gtceu:${submaterial2}_screw`, 4*magnifi2+`x gtceu:${cable}_single_cable`)
    .inputFluids(`gtceu:${solder} `+288*magnifi2, `gtceu:${lubricant} `+500*magnifi2, `gtceu:${liquidmaterial} `+576*magnifi2)
    .itemOutputs(`gtceu:${tier}_electric_motor`)
    ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of(`gtceu:${tier1}_electric_motor`)).EUt(volt1).duration(1800*magnifi2))
    .duration(1000)
    .EUt(volt1)

    event.recipes.gtceu.assembly_line(`${tier}_electric_pump`)
    .itemInputs(`gtceu:${tier}_electric_motor`, 2*magnifi1+`x kubejs:${tier}_regulation_part`, magnifi1+`x kubejs:${tier}_transportation_unit`, magnifi1+`x kubejs:${tier}_speed_rotation_engine`, magnifi1+`x kubejs:${tier}_quantum_power_core`, `gtceu:${pipematerial}_normal_fluid_pipe`, 4*magnifi1+`x gtceu:${basematerial}_plate`, 8*magnifi2+`x gtceu:${rubbermaterial}_ring`, magnifi1+`x gtceu:${submaterial2}_rotor`, 4+`x gtceu:${submaterial2}_screw`, 4*magnifi2+`x gtceu:${cable}_single_cable`)
    .inputFluids(`gtceu:${solder} `+288*magnifi2, `gtceu:${lubricant} `+500*magnifi2, `gtceu:${liquidmaterial} `+576*magnifi2)
    .itemOutputs(`gtceu:${tier}_electric_pump`)
    ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of(`gtceu:${tier1}_electric_pump`)).EUt(volt1).duration(1800*magnifi2))
    .duration(1000)
    .EUt(volt1)

    event.recipes.gtceu.assembly_line(`${tier}_conveyor_module`)
    .itemInputs(`2x gtceu:${tier}_electric_motor`, magnifi1+`x kubejs:${tier}_containment_forge_panel`, magnifi1+`x kubejs:${tier}_regulation_part`, 2*magnifi1+`x kubejs:${tier}_transportation_unit`, 2*magnifi1+`x kubejs:${tier}_coil_cover`, magnifi1+`x kubejs:${tier}_quantum_power_core`, 4*magnifi1+`x gtceu:${basematerial}_plate`, 4*magnifi1+`x gtceu:${submaterial1}_plate`, 4*magnifi3+`x gtceu:${basematerial}_round`, 4+`x gtceu:${submaterial2}_screw`, 4*magnifi2+`x gtceu:${cable}_single_cable`)
    .inputFluids(`gtceu:${solder} `+288*magnifi2, `gtceu:${lubricant} `+500*magnifi2, `gtceu:${rubbermaterial} `+720*magnifi2, `gtceu:${liquidmaterial} `+576*magnifi2)
    .itemOutputs(`gtceu:${tier}_conveyor_module`)
    ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of(`gtceu:${tier1}_conveyor_module`)).EUt(volt1).duration(1800*magnifi2))
    .duration(1000)
    .EUt(volt1)

    event.recipes.gtceu.assembly_line(`${tier}_electric_piston`)
    .itemInputs(`gtceu:${tier}_electric_motor`, 2*magnifi1+`x kubejs:${tier}_containment_forge_panel`, magnifi1+`x kubejs:${tier}_quantum_power_core`, 2*magnifi1+`x gtceu:${submaterial2}_gear`, 4*magnifi1+`x gtceu:small_${basematerial}_gear`, 4+`x gtceu:${submaterial2}_screw`, 4*magnifi2+`x gtceu:${cable}_single_cable`)
    .inputFluids(`gtceu:${solder} `+288*magnifi2, `gtceu:${lubricant} `+500*magnifi2, `gtceu:${liquidmaterial} `+576*magnifi2)
    .itemOutputs(`gtceu:${tier}_electric_piston`)
    ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of(`gtceu:${tier1}_electric_piston`)).EUt(volt1).duration(1800*magnifi2))
    .duration(1000)
    .EUt(volt1)

    event.recipes.gtceu.assembly_line(`${tier}_robot_arm`)
    .itemInputs(`2x gtceu:${tier}_electric_motor`, `gtceu:${tier}_electric_piston`, `kubejs:${tier}_calculation_frame`, magnifi1+`x kubejs:${tier}_regulation_part`, magnifi1+`x kubejs:${tier}_transportation_unit`, 2*magnifi1+`x kubejs:${tier}_quantum_power_core`, 4*magnifi1+`x gtceu:long_${submaterial1}_rod`, magnifi1+`x gtceu:${submaterial2}_gear`, 3*magnifi1+`x gtceu:small_${basematerial}_gear`, 4+`x gtceu:${submaterial2}_screw`, 4*magnifi2+`x gtceu:${cable}_single_cable`)
    .inputFluids(`gtceu:${solder} `+288*magnifi2, `gtceu:${lubricant} `+500*magnifi2, `gtceu:${liquidmaterial} `+576*magnifi2)
    .itemOutputs(`gtceu:${tier}_robot_arm`)
    ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of(`gtceu:${tier1}_robot_arm`)).EUt(volt1).duration(1800*magnifi2))
    .duration(1000)
    .EUt(volt1)

    event.recipes.gtceu.assembly_line(`${tier}_emitter`)
    .itemInputs(magnifi2+`x gtceu:${basematerial}_frame`, `2x gtceu:${tier}_electric_motor`, `kubejs:${tier}_precision_assembly`, `kubejs:${tier}_calculation_frame`, 2*magnifi1+`x kubejs:${tier}_quantum_power_core`, 4*magnifi1+`x gtceu:long_${wirematerial}_rod`, `64x gtceu:${foilmaterial}_foil`, 8+`x gtceu:${submaterial2}_screw`, 4*magnifi2+`x gtceu:${cable}_single_cable`)
    .inputFluids(`gtceu:${solder} `+288*magnifi2, `gtceu:${lubricant} `+500*magnifi2, `gtceu:${liquidmaterial} `+576*magnifi2)
    .itemOutputs(`gtceu:${tier}_emitter`)
    ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of(`gtceu:${tier1}_emitter`)).EUt(volt1).duration(1800*magnifi2))
    .duration(1000)
    .EUt(volt1)

    event.recipes.gtceu.assembly_line(`${tier}_sensor`)
    .itemInputs(magnifi2+`x gtceu:${basematerial}_frame`, `2x gtceu:${tier}_electric_motor`, `kubejs:${tier}_precision_assembly`, `kubejs:${tier}_calculation_frame`, 2*magnifi1+`x kubejs:${tier}_quantum_power_core`, 4*magnifi1+`x gtceu:${wirematerial}_plate`, `64x gtceu:${foilmaterial}_foil`, 8+`x gtceu:${submaterial2}_screw`, 4*magnifi2+`x gtceu:${cable}_single_cable`)
    .inputFluids(`gtceu:${solder} `+288*magnifi2, `gtceu:${lubricant} `+500*magnifi2, `gtceu:${liquidmaterial} `+576*magnifi2)
    .itemOutputs(`gtceu:${tier}_sensor`)
    ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of(`gtceu:${tier1}_sensor`)).EUt(volt1).duration(1800*magnifi2))
    .duration(1000)
    .EUt(volt1)

    event.recipes.gtceu.assembly_line(`${tier}_field_generator`)
    .itemInputs(2*magnifi2+`x gtceu:${basematerial}_frame`, 2*magnifi1+`x gtceu:${tier}_emitter`, magnifi1+`x gtceu:${tier}_sensor`, `2x kubejs:${tier}_precision_assembly`, `kubejs:${tier}_calculation_frame`, 2*magnifi1+`x kubejs:${tier}_speed_rotation_engine`, 4*magnifi1+`x kubejs:${tier}_containment_forge_panel`, 4*magnifi1+`x kubejs:${tier}_quantum_power_core`, 6*magnifi1+`x gtceu:${wirematerial}_plate`, 8*magnifi2+`x gtceu:${supercon}_octal_wire`, 8+`x gtceu:${submaterial2}_screw`, 4*magnifi2+`x gtceu:${cable}_single_cable`)
    .inputFluids(`gtceu:${solder} `+288*magnifi2, `gtceu:${lubricant} `+500*magnifi2, `gtceu:${liquidmaterial} `+576*magnifi2)
    .itemOutputs(`gtceu:${tier}_field_generator`)
    ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of(`gtceu:${tier1}_field_generator`)).EUt(volt1).duration(1800*magnifi2))
    .duration(1000)
    .EUt(volt1)

})
})