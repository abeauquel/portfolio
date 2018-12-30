---
title: "@libellule-bredoise-gestion 2.0"
lede: "Application web pour la gestion d'une chambre d'hôte."
date: "aujourd'hui"
link: ""
repo: "https://github.com/abeauquel/front_libellule"
order: 3
publish: true
lang: "Php, ReactJs"
---

###À propos de la libellule Brédoise 

La libellule brédoise est une chambre d’hôte possédant une seule chambre. Les réservations se font de
plusieurs façons à travers des plateformes tel que Booking ou Clé Vacances mais aussi parfois en direct.
La gestion actuel se fait en utilisant le Back office proposé par Booking, un tableau Excel. L’agenda est
géré par un channel manager faisant le lien entre les différentes plateformes comme 
<a href="https://www.booking.com/hotel/fr/la-libellule-bredoise.fr.html">Booking</a>, 
<a href="https://fr.airbnb.ca/rooms/24167373">AirBnB</a> ou 
<a href="https://www.clevacances.com/fr/locationvacances/aquitaine/gironde/labrede-13137/la_libellule_bredoise/45305">
Clévacances</a>.


### Cahier des charges de l'application

Fontionnalités de l'application web :
- Avoir un accès web (Responsive sur mobile)
- Respecter les demandes du cahier des charges précédent pour la libellule brédoise client lourd
- Système d’authentification pour restreindre l’accès aux données
- Récupérer les données de la base de données précédente.

Demandes supplémentaires : 

- Séparer la notion de plateforme de réservation des réservations pour pouvoir gérer plus facilement l’ajout d’une nouvelle plateforme ou la modification du taux de commission de cette plateforme.
- Trier les réservation par plateformes dans le tableau de bord
- Générer la facture d'une réservation au format pdf
- Générer le tableau affiché au format excel


La partie client de l'application est en ReactJs hébergé sur heroku. Cette dernière est reliée a une API en 
php (Symfony) hébergé sur OVH avec une base de données MySQL sur le même serveur.

<p>Tableau de bord de l'application :</p>
<div class="blog-inset">
  <hidden>
    <img src='tableau_de_bord.png' />
    <img src='tableau_de_bord.png' />
  </hidden>
  <zoom-image src='tableau_de_bord.png' zoomSrc='tableau_de_bord.png' alt='Image libellule brédoise'></zoom-image>
</div>