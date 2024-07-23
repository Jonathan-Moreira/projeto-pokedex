export const returnBackgrounColorCard = (type) => {
    switch (type) {
        case "grass":
            return "#429F92;";

        case "water":
            return "#61C3FF;";

        case "fire":
            return "#EAAB7D;";

        case "poison":
            return "#D1A3DO;";

        case "normal":
            return "#CF9762;";

        case "flying":
            return "#A891EC;";

        case "bug":
            return "#96A866;";

        case "dark":
            return "#55433C;";

        case "dragon":
            return "#004170;";

        case "fairy":
            return "#BD7886;";

        case "electric":
            return "#EFC95E;";

        case "figthing":
            return "#B0385A;";

        case "stell":
            return "#B7B9DO;";

        case "ghost":
            return "#7O84ACA;";

        case "ground":
            return "#B6866F;";

        case "rock":
            return "#9E8F65;";

        case "ice":
            return "#48A497;";

        case "psychic":
            return "#EO5E65;";

        default:
            return "#BF9762;";
    }

}