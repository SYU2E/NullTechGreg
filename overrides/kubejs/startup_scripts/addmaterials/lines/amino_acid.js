GTCEuStartupEvents.registry("gtceu:material", event => {
event.create('alanine')
    .dust()
    .components('3x carbon', '7x hydrogen', '1x nitrogen', '2x oxygen')
    .color(0xFFFFFF)

event.create('arginine')
    .dust()
    .components('6x carbon', '14x hydrogen', '4x nitrogen', '2x oxygen')
    .color(0xFFFFFF)

event.create('asparagine')
    .dust()
    .components('4x carbon', '8x hydrogen', '2x nitrogen', '3x oxygen')
    .color(0xFFFFFF)

event.create('aspartic_acid')
    .dust()
    .components('4x carbon', '7x hydrogen', '1x nitrogen', '4x oxygen')
    .color(0xFFFFFF)

event.create('cysteine')
    .dust()
    .components('3x carbon', '7x hydrogen', '1x nitrogen', '2x oxygen', '1x sulfur')
    .color(0xFFFFFF)

event.create('glutamic_acid')
    .dust()
    .components('5x carbon', '9x hydrogen', '1x nitrogen', '4x oxygen')
    .color(0xFFFFFF)

event.create('glutamine')
    .dust()
    .components('5x carbon', '10x hydrogen', '2x nitrogen', '3x oxygen')
    .color(0xFFFFFF)

event.create('glycine')
    .dust()
    .components('2x carbon', '5x hydrogen', '1x nitrogen', '2x oxygen')
    .color(0xFFFFFF)

event.create('histidine')
    .dust()
    .components('6x carbon', '9x hydrogen', '3x nitrogen', '2x oxygen')
    .color(0xFFFFFF)

event.create('isoleucine')
    .dust()
    .components('6x carbon', '13x hydrogen', '1x nitrogen', '2x oxygen')
    .color(0xFFFFFF)

event.create('leucine')
    .dust()
    .components('6x carbon', '13x hydrogen', '1x nitrogen', '2x oxygen')
    .color(0xFFFFFF)

event.create('lysine')
    .dust()
    .components('6x carbon', '14x hydrogen', '2x nitrogen', '2x oxygen')
    .color(0xFFFFFF)

event.create('methionine')
    .dust()
    .components('5x carbon', '11x hydrogen', '1x nitrogen', '2x oxygen', '1x sulfur')
    .color(0xFFFFFF)

event.create('phenylalanine')
    .dust()
    .components('9x carbon', '11x hydrogen', '1x nitrogen', '2x oxygen')
    .color(0xFFFFFF)

event.create('proline')
    .dust()
    .components('5x carbon', '9x hydrogen', '1x nitrogen', '2x oxygen')
    .color(0xFFFFFF)

event.create('serine')
    .dust()
    .components('3x carbon', '7x hydrogen', '1x nitrogen', '3x oxygen')
    .color(0xFFFFFF)

event.create('threonine')
    .dust()
    .components('4x carbon', '9x hydrogen', '1x nitrogen', '3x oxygen')
    .color(0xFFFFFF)

event.create('tryptophan')
    .dust()
    .components('11x carbon', '12x hydrogen', '2x nitrogen', '2x oxygen')
    .color(0xFFFFFF)

event.create('tyrosine')
    .dust()
    .components('9x carbon', '11x hydrogen', '1x nitrogen', '3x oxygen')
    .color(0xFFFFFF)

event.create('valine')
    .dust()
    .components('5x carbon', '11x hydrogen', '1x nitrogen', '2x oxygen')
    .color(0xFFFFFF)

event.create('selenocysteine')//21
    .dust()
    .components('3x carbon', '7x hydrogen', '1x nitrogen', '2x oxygen', '1x selenium')
    .color(0xFFFFFF)

event.create('pyrrolysine')//22
    .dust()
    .components('12x carbon', '21x hydrogen', '3x nitrogen', '3x oxygen')
    .color(0xFFFFFF)
    }
)

GTCEuStartupEvents.materialModification(event => {
})

StartupEvents.registry("item", event => {
  event.create("steve_cell")
})