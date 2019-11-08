export function plantImg(id) {
    let url;
    switch (id) {
        case '1':
        return require('../image/plants/rosa.png');
        break;
        case '2':
        return require('../image/plants/camellia.png');
        break;
        case '3':
        return require('../image/plants/orchidea.png');
        break;
        case '4':
        return require('../image/plants/patata.png');
        break;
        case '5':
        return require('../image/plants/carota.png');
        break;
        case '6':
        return require('../image/plants/pomodoro.png');
        break;
        case '7':
        return require('../image/plants/gerbena.png');
        break;
        case '8':
        return require('../image/plants/primula.png');
        break;
        case '9':
        return require('../image/plants/peperone.png');
        break;
        case '10':
        return require('../image/plants/melanzana.png');
        break;
        case '11':
        return require('../image/plants/zucchina.png');
        break;
        default:
        return require('../image/plants/camellia.png');
        break;
    }
}