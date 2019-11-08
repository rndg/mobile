
export function signUp(user, mail, pass, passConf) {
    fetch('http://192.168.64.2/MyLeaf/SignUp.php', {
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
        console.log('Utente registrato');
    });
}


export function	login(email, pass) {
	fetch('http://192.168.64.2/MyLeaf/Login.php', {
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
        //this.storeToken(JSON.stringify(responseJson));
    });
};

export function	myPlants(id_u, type) {
    return(
        fetch('http://192.168.64.2/MyLeaf/Plants.php', {
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
        .then((responseData) => {
            return responseData;
        }).catch((error) => {
            console.error(error);
        })
    )
}

export function	selectPlants(type) {
    return(
        fetch('http://192.168.64.2/MyLeaf/selectPlants.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                type: type
            })
        })
        .then((response) => response.json())
        .then((responseData) => {
            return responseData;
        }).catch((error) => {
            console.error(error);
        })
    )
}


export function uploadPlantToServer(id_p, id_u, plName, typeP) {
    fetch('http://192.168.64.2/MyLeaf/newPlant.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id_plant: id_p,
        id_user: id_u,
        pl_name: plName,
        type: typeP,
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
        console.log('Pianta caricata');
    }).catch((error) => {
        console.error(error);
    });
}