/* Consignes :
 * La classe  Book  doit contenir les champs suivants :

title  -  string  - le titre du livre
author  -  string  - l'auteur du livre
description  -  string  - une description du livre
pages  -  number  - le nombre total de pages
currentPage  -  number  - la page où se trouve l'utilisateur actuellement (entre 1 et  pages  )
read  -  boolean  - si l'utilisateur a lu ou non le livre (par défaut:  false  )
*/

/*
 * readBook(page)
permet à l'utilisateur de dire à quelle page il se trouve actuellement
si l'argument  page  est inférieur à un ou supérieur au nombre total de pages du livre, readBook retourne  0
si l'argument  page  est supérieur ou égal à 1 et inférieur au nombre total de pages du livre,  readBook  modifie le champ  currentPage  de l'instance pour être égal à la valeur de l'argument passé, et retourne 1
si l'argument  page  est égal au nombre total de pages du livre,  readBook  modifie le champ  currentPage  de l'instance pour être égal à la valeur de l'argument passé, modifie le champ  read  de l'instance en  true  , et retourne  1
 */
class Book {

    constructor(titre, auteur, description, pages) {
        this.titre = titre;
        this.auteur = auteur;
        this.description = description;
        this.pages = pages;
        this.pageCourante = 0;
        this.lu = false;
    }

    pagesLus(page) {
        if (page < 0 || page > this.pages) {
            return 0;
        } else if (page === this.pages) {
            this.pageCourante = page;
            this.lu = true;
            return 1;
        } else {
            this.pageCourante = page;
            return 1;
        }
    }
}

/*Consignes :
 Quand vous aurez créé la classe  Book  , vous en créerez au moins trois instances valables et vous les mettrez dans le tableau  books  qui est exporté par  Book.js  . 
 Pour vérifier votre travail, actualisez le navigateur Codevolve intégré : vos instances  Book  devraient être visibles dans le carousel de l'interface RestfulReading.
 */

let livre1 = new Book("L'aurore des saisons", "Mister Bear", "Chronique familiale sur 3 g\xe9n\xe9rations de le milieux des bucherons du Sahara", 324);
let livre2 = new Book("Tourner le dos", "Mat Caramelmout","Polar violent", 511);

let carroussel = [];
carroussel.push(livre1);
carroussel.push(livre2);

for (livre of carroussel) {
    console.log(livre);
}