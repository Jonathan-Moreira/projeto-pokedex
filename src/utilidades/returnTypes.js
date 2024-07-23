import bug from "../../src/assets/pokes/bug.png"
import dark from "../../src/assets/pokes/dark.png"
import dragon from "../../src/assets/pokes/dragon.png"
import electric from "../../src/assets/pokes/electric.png"
import fire from "../../src/assets/pokes/fire.png"
import figthing from "../../src/assets/pokes/figthing.png"
import flying from "../../src/assets/pokes/flying.png"
import ghost from "../../src/assets/pokes/ghost.png"
import grass from "../../src/assets/pokes/grass.png"
import ground from "../../src/assets/pokes/ground.png"
import ice from "../../src/assets/pokes/ice.png"
import normal from "../../src/assets/pokes/normal.png"
import poison from "../../src/assets/pokes/poison.png"
import psychic from "../../src/assets/pokes/psychic.png"
import rock from "../../src/assets/pokes/rock.png"
import steel from "../../src/assets/pokes/steel.png"
import water from "../../src/assets/pokes/water.png"


export const returnTypes = (type) => {
    switch (type) {
        case "bug":
            return bug

        case "dark":
            return dark

        case "dragon":
            return dragon

        case "electric":
            return electric

        case "figthing":
            return figthing

        case "fire":
            return fire

        case "flying":
            return flying

        case "ghost":
            return ghost

        case "grass":
            return grass

        case "ground":
            return ground

        case "ice":
            return ice

        case "normal":
            return normal

        case "poison":
            return poison

        case "psychic":
            return psychic

        case "rock":
            return rock

        case "steel":
            return steel

        case "water":
            return water
        default:
            return normal;
                                                                   
    }
}