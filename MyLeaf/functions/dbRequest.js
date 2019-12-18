
export function signUp(user, mail, pass, passConf) {
    return(
        fetch('http://myleaf.eu-central-1.elasticbeanstalk.com/SignUp.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: user,
                mail: mail,
                pass: pass,
                passConf: passConf
            })
        })
        .then((response) => response.json())
        .then((responseJson) => {
            return responseJson;
        })
    )
}


export function	login(email, pass) {
    return(
        fetch('http://myleaf.eu-central-1.elasticbeanstalk.com/Login.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
            email: email,
            password: pass
            })
        })
        .then((response) => response.json())
        .then((responseJson) => {
            return responseJson;
        })
    )
};

export function	myPlants(id_u, type) {
    return(
        fetch('http://myleaf.eu-central-1.elasticbeanstalk.com/Plants.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id_user: id_u,
                type: type
            })
        })
        .then((response) => response.json())
        .then((responseJson) => {
            return responseJson;
        })
    )
}

export function	selectPlants(type, sub_type) {
    return(
        fetch('http://myleaf.eu-central-1.elasticbeanstalk.com/selectPlants.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                type: type,
                sub_type: sub_type
            })
        })
        .then((response) => response.json())
        .then((responseJson) => {
            return responseJson;
        })
    )
}

export function uploadPlantToServer(id_p, id_u, plName, typeP) {
    fetch('http://myleaf.eu-central-1.elasticbeanstalk.com/newPlant.php', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id_plant: id_p,
            id_user: id_u,
            pl_name: plName,
            type: typeP
        })
    })
    .then((response) => response.json())
    .then((responseJson) => {
        console.log('Pianta caricata');
    }).catch((error) => {
        console.error(error);
    });
}

export function	getAchievement() {
    return(
        fetch('http://myleaf.eu-central-1.elasticbeanstalk.com/getAchi.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then((response) => response.json())
        .then((responseJson) => {
            return responseJson;
        })
    )
};

export function	getAchievementProgress(id_u) {
    return(
        fetch('http://myleaf.eu-central-1.elasticbeanstalk.com/getAchiProgress.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id_u: id_u
            })
        })
        .then((response) => response.json())
        .then((responseJson) => {
            return responseJson;
        })
    )
};

export function	getPlantsInfo(id_pl, id_u) {
    return(
        fetch('http://myleaf.eu-central-1.elasticbeanstalk.com/getPL.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id_pl: id_pl,
                id_u: id_u
            })
        })
        .then((response) => response.json())
        .then((responseJson) => {
            return responseJson;
        })
    )
};

export function	deletePlant(id_pl) {
    return(
        fetch('http://myleaf.eu-central-1.elasticbeanstalk.com/deletePlant.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id_pl: id_pl
            })
        })
        .then((response) => response.json())
        .then((responseJson) => {
            return responseJson;
        })
    )
};

export function	getAction(id_pl) {
    return(
        fetch('http://myleaf.eu-central-1.elasticbeanstalk.com/getAction.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id_pl: id_pl
            })
        })
        .then((response) => response.json())
        .then((responseJson) => {
            return responseJson;
        })
    )
};