export function plantImg(id) {
    let url;
    switch (id) {
        case '1':
        return require('../imgs/plants/piant1.gif');
        break;
        case '2':
        return require('../imgs/plants/piant2.gif');
        break;
        case '3':
        return require('../imgs/plants/piant3.gif');
        break;
        case '4':
        return require('../imgs/plants/pata.gif');
        break;
        case '5':
        return require('../imgs/plants/carota.gif');
        break;
        case '6':
        return require('../imgs/plants/piant6.png');
        break;
        case '7':
        return require('../imgs/plants/piant1.png');
        break;
        case '8':
        return require('../imgs/plants/piant2.png');
        break;
        case '9':
        return require('../imgs/plants/piant3.png');
        break;
        case '10':
        return require('../imgs/plants/piant4.png');
        break;
        case '11':
        return require('../imgs/plants/piant5.png');
        break;
        default:
        return require('../imgs/plants/piant6.png');
        break;
    }
}