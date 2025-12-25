ServerEvents.recipes(event => {
    
    event.remove({ output: 'gtceu:large_chemical_reactor' })
    event.recipes.extendedcrafting.shaped_table("gtceu:large_chemical_reactor", [
            " LCL ",
            "LPCML",
            "CLHLC",
            "LMMML",
            " LCL "
        ], {
            H: "gtceu:hv_machine_hull",
            C: "#gtceu:circuits/hv",
            M: "gtceu:hv_electric_motor",
            P: "gtceu:hv_electric_pump",
            L: "gtceu:polytetrafluoroethylene_large_fluid_pipe"
        })
    }
)