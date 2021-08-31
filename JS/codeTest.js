class episode {
    constructor(titre, duree) {
        this.titre=titre;
        this.duree=duree;
        this.vu=false;
    }

    etatEpisode() {

        let message = "";

        if (this.vu) {
            message = "vous avez vu '" + this.titre + "' qui dure " + this.duree + " minutes";
        } else {
            message = "vous n'avez pas vu '" + this.titre + "' qui dure " + this.duree + " minutes";
        }
        console.log(message);
    }

    vuEpisode() {

        this.vu = true;

        console.log("Vous venez de regarder '" + this.titre + "'");

    }
    
};

let ep1 = new episode("La rage d'Harlone", 105);
let ep2 = new episode("Bataille sur Halmaltest", 40);
let ep3 = new episode("Le chant des vaincus", 40);

ep2.vuEpisode();

let episodes = [ep1, ep2, ep3];

for (let ep of episodes) {
    ep.etatEpisode();
}

