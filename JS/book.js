/* Consignes :
 * La classe  Book  doit contenir les champs suivants :

title  -  string  - le titre du livre
author  -  string  - l'auteur du livre
description  -  string  - une description du livre
pages  -  number  - le nombre total de pages
currentPage  -  number  - la page o� se trouve l'utilisateur actuellement (entre 1 et  pages  )
read  -  boolean  - si l'utilisateur a lu ou non le livre (par d�faut:  false  )
*/

/*
 * readBook(page)
permet � l'utilisateur de dire � quelle page il se trouve actuellement
si l'argument  page  est inf�rieur � un ou sup�rieur au nombre total de pages du livre, readBook retourne  0
si l'argument  page  est sup�rieur ou �gal � 1 et inf�rieur au nombre total de pages du livre,  readBook  modifie le champ  currentPage  de l'instance pour �tre �gal � la valeur de l'argument pass�, et retourne 1
si l'argument  page  est �gal au nombre total de pages du livre,  readBook  modifie le champ  currentPage  de l'instance pour �tre �gal � la valeur de l'argument pass�, modifie le champ  read  de l'instance en  true  , et retourne  1
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
 Quand vous aurez cr�� la classe  Book  , vous en cr�erez au moins trois instances valables et vous les mettrez dans le tableau  books  qui est export� par  Book.js  . 
 Pour v�rifier votre travail, actualisez le navigateur Codevolve int�gr� : vos instances  Book  devraient �tre visibles dans le carousel de l'interface RestfulReading.
 */

let livre1 = new Book("L'aurore des saisons", "Mister Bear", "Chronique familiale sur 3 g\xe9n\xe9rations de le milieux des bucherons du Sahara", 324);
let livre2 = new Book("Tourner le dos", "Mat Caramelmout","Polar violent", 511);

let carroussel = [];
carroussel.push(livre1);
carroussel.push(livre2);

for (livre of carroussel) {
    console.log(livre);
}