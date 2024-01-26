# Mansanta Webshop: Een E-commerce demo-site voor streekproducten uit Italië

## Doelstellingen

- Creëren van een functionele webshop en bestelapplicatie met behulp van Bootstrap voor responsieve en gestileerde gebruikersinterfaces.
  
- Toepassen van JavaScript om dynamische functionaliteiten te implementeren, zoals het toevoegen van producten, het beheer van de winkelwagen, plaatsen van bestellingen, bijhouden van de voorraad.
  
- Implementeren van objectgeoriënteerde programmeerprincipes, functies, arrays en variabelen met correct gebruik van `let` en `const` variabelen voor gestructureerde, leesbare en overdraagbare code.
  
- Implementeren van de winkelwagen en Local Storage, waarbij de JavaScript-objecten 'products' en 'orders' worden gebruikt voor het beheer van bestellingen.

## Functionele Eisen

### Voor klanten (eindgebruikers)

- Overzicht van producten met informatie over inhoud en prijs.
- Een winkelwagen om producten toe te voegen en bestellingen te plaatsen.
- Mogelijkheid om de winkelwagen te legen, aan te passen en bestellingen te bevestigen.
- Gebruiksvriendelijke webomgeving voor een soepele winkelervaring.

### Voor de beheerder (admin)

- Pagina voor de beheerder voor productbeheer en orderoverzicht.
- Toevoegen, wijzigen en verwijderen van producten.
- Resetten van producten naar de originele staat.
- Eenvoudig inlogscherm.

## Niet-functionele Eisen

- Modulaire en efficiënte code.
- Gedocumenteerde code en gebruiksvriendelijke interface.
- Testprocedure om fouten te identificeren.
- Projectdocumentatie inclusief README.md.
- Online bereikbaarheid van de webshop.

## Inrichting van de Website

### De webshop en winkelwagen

- Op de index.html zie je een rustige achtergrond met wisselende beelden van het bedrijf en omgeving. Er zijn afbeeldingen van verschillende productcategorieën. Kleuren worden aangepast aan de huisstijl van het bedrijf.
- In de webshop.html worden in de demo-versie zes producten getoond.
- Je kunt een aantal kiezen en de producten via de knop bestellen in je winkelwagen plaatsen.
- De winkelwagen.html toont het aantal gekozen producten en laat zien hoeveel voorraad er is.
- Als je op het winkelwagen icoontje drukt, kom je op het winkelwagenscherm om je bestelling te bevestigen.
- Met de knop afrekenen wordt het bestelproces afgerond met een bevestiging waarin je unieke bestelnummer wordt getoond.
- Met de knop toevoegen kom je in de webshop om je bestelling te wijzigen.
- Je kunt in admin/productoverzicht.html komen via een login met gebruikersnaam en wachtwoord.

### Admin

- Via /mansantashop/admin/login.html (voor de demo username:1 en pw:1) kom je in het productoverzicht.html. Je ziet het ID, product, prijs, URL van de afbeelding, en de voorraad.

- Bij acties kun je producten aanpassen toevoegen of verwijderen. Je kunt ook de beginsituatie herstellen met reset JSON.

- via de link besteloverzicht in de navigatiebalk krijg je een overzicht van de orders. Tussen iedere order een lege regel.

- In de navigatiebalk heb je de optie om uit te loggen.

- In de schermen 'toevoegen' en 'aanpassen' verschijnt afbeelding als je een geldige link invult zoals aangegeven in de placeholder.

## Hoe kun je de bestanden ophalen voor lokaal gebruik?

Er zijn twee eenvoudige manieren om de benodigde bestanden voor lokaal gebruik op te halen:

### 1. Downloaden via de GitHub UI

- Ga naar de [GitHub-pagina](https://github.com/MdiOstra/mansantashop).
- Klik op de groene knop met de tekst "Code".
- Selecteer "Download ZIP".
- Pak de gedownloade ZIP-map uit.
**Open de uitgepakte map:**

- Zoek de uitgepakte map (waarschijnlijk met de naam `mansantashop`) op je computer.
- Gebruik Verkenner (Windows) of Finder (Mac) om de map te vinden.
- Open de map in je favoriete teksteditor of geïntegreerde ontwikkelingsomgeving (IDE).

### 2. Via de commandoregel met Git

1. **Open de terminal:**

#### Voor Mac

- Druk op `Command + Spatie` om Spotlight Search te openen.
- Typ "Terminal" en druk op `Enter`. Hierdoor wordt de Terminal-app geopend.

#### Voor Windows

- Druk op `Windows-toets + R` om het venster "Uitvoeren" te openen.
- Typ "cmd" en druk op `Enter`. Hierdoor wordt de Opdrachtprompt geopend.

**Navigeer naar de locatie waar je het project wilt opslaan:**

#### Voor Mac en Windows

- Gebruik het `cd`-commando om naar de gewenste map te navigeren.

     cd pad/naar/gewenste/map

     Vervang "pad/naar/gewenste/map" door het daadwerkelijke pad naar de map waar je het project wilt opslaan.

**Clone de repository:**

[git clone https://github.com/MdiOstra/mansantashop.git]

- Met het commando ls kun je zien of je de map mansantashop binnen hebt.

- Met cd mansantashop kun je naar die map.

- met opnieuw 'ls' kun je nu zien dat je alle mappen en bestanden hebt om te kunnen beginnen!

## Waar staat de site online?

[Bezoek de MansantaShop](https://main--mansanta.netlify.app/)

## Hoe zitten de scripts in elkaar?

- In comments in de code zie je op de belamgrijkste punten een uitleg.

- Hierna een korte beschrijving van de JS bestanden.
