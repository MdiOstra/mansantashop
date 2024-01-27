# Mansanta Webshop: Een E-commerce demo-site voor streekproducten uit Italië

## Vooraf

Voor de BIT-beoordelaar: Deze opdracht "Build your own webshop!" is uitgewerkt voor een Normaal Certicaat.

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
- Admin code is gescheiden van de index en de webshopcode. Javascript code is in een  aparte map voor de webshop en de admin
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

Er zijn twee manieren om de benodigde bestanden voor lokaal gebruik op te halen:

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

## Naam: `script.js`

## Algemeen

- **Variabelen:**
- `products`: Bevat de waarde 'all'.
  
- **Logica volgorde:**
- Luistert naar het 'DOMContentLoaded'-evenement.
- Definieert functies voor het opslaan van producten, het bijwerken van winkelwagenaantal,
     het weergeven van producten, het bijwerken van de hoeveelheid van een product,
     het creëren van een productkaart, het ophalen en opslaan van producten.

## Functie: `saveProductsToLocalStorage(products)`

- **Opbouw:**
- Controleert of de localStorage wordt ondersteund.
- Slaat producten op in de localStorage als JSON-gegevens.
- Toont een consolebericht met betrekking tot de status van het opslaan.

## Functie: `updateCartAmount()`

- **Opbouw:**
- Haalt opgeslagen producten op uit localStorage.
- Berekent de totale hoeveelheid producten in de winkelwagen.
- Werkt de weergave van het winkelwagenbedrag bij.

## Functie: `displayProducts()`

- **Opbouw:**
- Haalt opgeslagen producten op uit localStorage.
- Filtert producten met een hoeveelheid groter dan -1.
- Maakt productkaarten en voegt deze toe aan de productcontainer.
- Werkt het winkelwagenbedrag bij.

## Functie: `updateAmount(product, change)`

- **Opbouw:**
- Haalt opgeslagen producten op uit localStorage.
- Vindt index van het product.
- Werkt de hoeveelheid en voorraad bij op basis van de verandering.
- Slaat bijgewerkte producten op in localStorage.
- Vernieuwt van de productweergave.

## Functie: `createProductCard(product)`

- **Opbouw:**
- Creëert een productkaart met informatie zoals naam, prijs, voorraad, afbeelding, en knoppen voor toevoegen/verwijderen.
- Gebruikt event listeners voor de knoppen om de hoeveelheid bij te werken.

## Functie: `fetchAndSaveProducts(initialDisplayType)`

- **Opbouw:**
- Haalt opgeslagen producten op uit localStorage.
- Toont producten als ze al zijn opgeslagen, anders haalt het producten op uit het JSON-bestand.
- Opslaan van nieuwe producten in localStorage.
- Weergave van producten en bijwerken van het winkelwagenbedrag.
De fetchAndSaveProducts-functie is asynchroon omdat deze afhankelijk is van het ophalen van gegevens via een HTTP-verzoek (fetch). Om met asynchrone code om te gaan, worden promises gebruikt. .then() gebruik ik hier om op de voltooiing van die promise te wachten voordat de volgende actie wordt ondernomen.

## Event Listener: `window.addEventListener('storage', (event) => {})`

- **Logica:**
- Luistert of er iets wordt opgeslagen en werkt het winkelwagenbedrag als er een verandering is.

## Uitvoering: `fetchAndSaveProducts();`

- **Logica:**
- haalt de eerste keer de producten op en slaat ze op.

## Naam: `winkelwagen.js`

Korte analyse van het script

Dit script lijkt te zijn ontworpen voor een eenvoudige webwinkelapplicatie. Het maakt gebruik van de `localStorage` om productinformatie en bestellingen op te slaan. Het script reageert op het 'DOMContentLoaded'-evenement, wat betekent dat het pas wordt uitgevoerd nadat de DOM volledig is geladen. Het script manipuleert de DOM om geselecteerde producten weer te geven, de winkelwagen bij te werken en bestellingen te verwerken.

- **Variabelen:**
  - `adjustButton`: Het element met id 'adjustButton' wordt opgeslagen in deze constante.
  
- **Logica volgorde:**
  - Luistert naar het 'DOMContentLoaded'-evenement.
  - Initialiseert variabelen en functies.
  - Voert de functie `fetchAndSaveProducts` uit om opgeslagen producten op te halen.
  - Voegt event listeners toe aan knoppen.
  - Reageert op het 'storage'-evenement om de winkelwagen bij te werken bij veranderingen in opgeslagen producten.
  - Voert de initiële weergave van geselecteerde producten uit.

## Per functie

### updateCartAmount(newAmount)

- **Opbouw:**
  - Accepteert een optioneel argument `newAmount`.
  - Controleert of `newAmount` is opgegeven en werkt de weergave van het winkelwagenbedrag dienovereenkomstig bij.
  - Als `newAmount` niet is opgegeven, haalt het de opgeslagen producten op en berekent het de totale hoeveelheid producten in de winkelwagen.

### createSelectedProductCard(product)

- **Opbouw:**
  - Accepteert een productobject.
  - Maakt een HTML-element aan voor de weergave van een geselecteerd product met naam, prijs per stuk, totaalprijs en hoeveelheid.
  - Geeft het gemaakte HTML-element terug.
  - Hiermee zorg ik dat Numbers zoals bijvoorbeeld 2.5 worden omgezet naar 2,50: const formattedPrice = parseFloat(product.price).toLocaleString('nl-NL', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });

### displayTotalPrice(products)

- **Opbouw:**
  - Accepteert een array van producten.
  - Berekent en toont de totaalprijs van de geselecteerde producten.

### displaySelectedProducts()

- **Opbouw:**
  - Haalt opgeslagen producten op uit `localStorage`.
  - Filtert producten met een hoeveelheid groter dan 0.
  - Maakt productkaarten en voegt deze toe aan de productcontainer.
  - Toont de totaalprijs van geselecteerde producten.

### createOrder()

- **Opbouw:**
  - Haalt opgeslagen producten op uit `localStorage`.
  - Filtert producten met een hoeveelheid groter dan 0 voor de bestelling.
  - Genereert een uniek bestelnummer.
  - Maakt een bestelobject aan met bestelgegevens.
  - Slaat de bestelling op in `localStorage`.
  - Reset de hoeveelheden van de geselecteerde producten naar 0.
  - Verbergt de totaalprijs, de afrekenknop en de aanpassingsknop.
  - Toont een bevestigingsbericht met bestelgegevens.
  - Roept `updateCartAmount` en `displaySelectedProducts` aan.

### fetchAndSaveProducts(updateAmount = true)

- **Opbouw:**
  - Accepteert een optioneel argument `updateAmount`.
  - Haalt opgeslagen producten op uit `localStorage`.
  - Toont geselecteerde producten en werkt het winkelwagenbedrag bij als `updateAmount` waar is.

### window.addEventListener('storage', (event) => {})

- **Logica:**
  - Luistert of er iets wordt opgeslagen en werkt het winkelwagenbedrag als er een verandering is.

### Uitvoering

- Voert de initiële ophaling en opslag van producten uit.
- Voegt event listeners toe aan knoppen (`checkoutButton` en `adjustButton`)

## Naam script: `add-product.js`

In dit script vind je de werking ook in de comment regels

## Korte analyse van het script

Algemeen

- In dit script wordt JavaScript gebruikt om de functionaliteit van een formulier voor het toevoegen van producten aan een webpagina te implementeren.

## Gebruikte variabelen

- `imgUrl`: Bevat de waarde van het `img`-veld.
- `imgPreview`: Verwijst naar het HTML-element met de ID 'imgPreview'.
- `idInput`: Verwijst naar het HTML-element met de ID 'id'.
- `name`, `info`, `price`, `stock`, `amount`, `img`: Bevatten de waarden van verschillende invoervelden van het formulier.

- `const` en `let`:
- `const` wordt gebruikt voor variabelen waarvan de waarde niet zal veranderen (zoals `imgUrl` en `imgPreview`).
- `let` wordt gebruikt voor variabelen waarvan de waarde wel kan veranderen (zoals `id`).

### Logica in de volgorde

1. Het script wacht op het moment dat de DOM is geladen (`DOMContentLoaded` event).
2. Een event listener wordt toegevoegd aan het 'input'-evenement van het 'img'-veld. Wanneer een gebruiker een afbeeldings-URL invoert, wordt de preview van de afbeelding bijgewerkt.
3. Een functie `addProduct` wordt gedefinieerd voor het toevoegen van nieuwe producten.
4. De functie `addProduct` haalt waarden op van verschillende invoervelden, voert validaties uit en voegt een nieuw product toe aan de lokale opslag.
5. Een resetfunctie `resetForm` wordt gedefinieerd om het formulier na het toevoegen van een product te resetten.
6. Een event listener wordt toegevoegd aan de knop voor het toevoegen van producten, die de `addProduct`-functie aanroept bij een klik.

Per functie

#### `updateImgPreview`

- **Opbouw:** Luistert naar het 'input'-evenement van het 'img'-veld.
- **Wat doet de functie:** Haalt de waarde op van het 'img'-veld en werkt de bron (src) van het 'imgPreview'-element bij.

#### `addProduct`

- **Opbouw:** Haalt waarden op van invoervelden, voert validaties uit, genereert een uniek product-ID, voegt het nieuwe product toe aan de lokale opslag en reset het formulier.
- **Wat doet de functie:** Voegt een nieuw product toe aan de lokale opslag met de ingevoerde gegevens van het formulier.

#### `resetForm`

- **Opbouw:** Reset de waarden van alle invoervelden en de bron van het 'imgPreview'-element.
- **Wat doet de functie:** Zet alle invoervelden terug naar hun standaardwaarden na het toevoegen van een product.

#### Event Listeners

- Er zijn event listeners toegevoegd aan het 'click'-evenement van de knop voor het toevoegen van producten en aan het 'load' en 'error'-evenement van de afbeeldingspreview. Deze zorgen ervoor dat de preview wordt weergegeven of verborgen afhankelijk van het laden van de afbeelding.

Dit script wordt gebruikt in combinatie met add-product.html voor het toevoegen van producten aan een webpagina.

## Naam script: `adminCheck.js`

Comments staan in het script

Korte analyse van het script

Algemeen
In dit script wordt JavaScript gebruikt om te controleren of een gebruiker is ingelogd als administrator op een webpagina.

## variabelen

- `authToken`: Bevat de waarde van het sessie-token opgehaald uit de sessieopslag.
- `const` wordt gebruikt voor `authToken` omdat de waarde van het sessie-token niet wordt gewijzigd binnen de scope van dit script.

### Logica volgorde

1. Het script wacht op het moment dat de DOM is geladen (`DOMContentLoaded` event).
2. Het script haalt het sessie-token op uit de sessieopslag met behulp van `sessionStorage.getItem('authToken')`.
3. Er wordt gecontroleerd of er een sessie-token (`authToken`) aanwezig is.
4. Als er geen sessie-token is, wordt de gebruiker doorgestuurd naar de inlogpagina (`login.html`) met `window.location.href`.

#### Geen expliciete functies

Er is één stuk code en geen expliciete functies in dit script. Het script controleert eenvoudig of een gebruiker is ingelogd (of een sessie-token heeft) en stuurt de gebruiker anders door naar de inlogpagina.

#### Logica

- Bij het laden van de pagina wordt gecontroleerd of er een sessie-token aanwezig is.
- Als er geen sessie-token is, wordt de gebruiker doorverwezen naar de inlogpagina.
- Dit kan worden gezien als een eenvoudige beveiligingscontrole om ervoor te zorgen dat alleen ingelogde gebruikers met een geldig sessie-token toegang hebben tot de pagina. In dit specifieke geval lijkt het erop dat de pagina is bedoeld voor administrators, aangezien het script niet doorgaat als er geen sessie-token is.
Dit script zorgt ervoor dat alleen geauthenticeerde gebruikers met de juiste rechten toegang hebben tot de inhoud.

**Naam script:** `edit-product.js`

In dit script vind je de werking ook in de comment regels. Het werkt vergelijkbaar met add-product.js

Korte analyse van het script

Algemeen
Dit script lijkt te zijn ontworpen voor het bewerken van productinformatie op een webpagina. Het maakt gebruik van lokale opslag om productgegevens te beheren en stelt gebruikers in staat om productinformatie te bewerken en op te slaan.

#### Variabelen

- `storedProducts`: Bevat productgegevens opgehaald uit de lokale opslag.
- Verschillende variabelen met `const` worden gebruikt om elementen en waarden op te slaan die gedurende de levensduur van het script niet veranderen.
- Variabelen met `let` worden gebruikt om productgegevens bij te werken of te manipuleren.
- Ik heb bij cons updatedProduct een spread operator gebruikt ('...'). `...product` betekent dat alle eigenschappen van het bestaande object product worden uitgespreid in het nieuwe object updatedProduct. Met andere woorden, het kopieert alle eigenschappen van product naar updatedProduct. Na deze operatie worden vervolgens de specifieke eigenschappen (name, info, price, stock, img) overschreven of toegevoegd.

#### logica volgorde

1. Het script wacht op het moment dat de DOM is geladen (`DOMContentLoaded` event).
2. Het haalt het product-ID op uit de querystring van de URL.
3. Het vult het formulier met productgegevens op basis van het opgehaalde product-ID.
4. Het voegt een event listener toe aan het 'input'-evenement van het 'img'-veld om de voorbeeldafbeelding bij te werken wanneer een gebruiker een nieuwe afbeeldings-URL invoert.
5. Het definieert een functie `editProduct` voor het bewerken van het product en bijwerken van de lokale opslag.
6. Een event listener wordt toegevoegd aan de knop met ID 'wijzigButton' om de `editProduct`-functie aan te roepen wanneer erop wordt geklikt.
7. Event listeners worden toegevoegd aan het 'error' en 'load'-evenement van de voorbeeldafbeelding om de weergave ervan aan te passen.

### De functies

#### `getProductById(productId)`

- **Opbouw:** Zoekt naar een product in de lokale opslag op basis van het product-ID.
- **Wat doet de functie:** Geeft het gevonden product terug of `null` als het product niet is gevonden.

#### `fillFormWithProductData(productId)`

- **Opbouw:** Vult het formulier met productgegevens op basis van het product-ID.
- **Wat doet de functie:** Haalt het product op met behulp van `getProductById` en vult de formulierelementen met de bijbehorende waarden.

#### `editProduct()`

- **Opbouw:** Haalt het te bewerken product op uit de lokale opslag, maakt een gewijzigd productobject, werkt de lijst met producten bij en slaat deze op in de lokale opslag.
- **Wat doet de functie:** Stelt gebruikers in staat om productinformatie te bewerken en slaat de bijgewerkte informatie op in de lokale opslag. Navigeert vervolgens naar 'productoverzicht.html'.

Met dit script kun je producten in de webshop aanpassen en plaatjes vervangen.

## Naam script: `login.js`

## Het script

### Wat het doet

Dit script implementeert de inlogfunctionaliteit voor de webpagina's in de admin. Het luistert naar het indienen van het inlogformulier en controleert de ingevoerde gebruikersnaam en wachtwoord. Bij succes wordt een tijdelijk gegenereerd token opgeslagen in de `sessionStorage`, en de gebruiker wordt doorgestuurd naar het admin-paneel.
`sessionStorage` kun je terugvinden in je devtools.

#### De variabelen

- `loginForm`: Bevat het DOM-element van het inlogformulier.
- `username` en `password`: Bevatten de waarden van de gebruikersnaam en het wachtwoord uit de formulierelementen.
- `token`: Bevat een tijdelijk gegenereerd token (niet geschikt voor productie, want `sessionStorage` kun je bijvoorbeeld terugvinden in je devtools.).
- `const` wordt gebruikt voor `loginForm`, `username`, en `password` omdat deze waarden niet opnieuw worden toegewezen binnen de scope van het script.
- `let` wordt gebruikt voor `token` omdat deze waarde wordt toegewezen en gewijzigd binnen de scope van de functie.

### functies

#### `DOMContentLoaded` Event Listener

- **Opbouw:** Wacht tot de DOM is geladen.
- **Logica:** Het voegt een event listener toe aan het indienen van het inlogformulier.

#### `loginForm.submit` Event Listener

- **Opbouw:** Voorkomt standaardgedrag van het formulier, haalt gebruikersnaam en wachtwoord op, controleert de inloggegevens, en handelt dienovereenkomstig.
- **Logica:**
  - Voorkomt dat het formulier standaard wordt ingediend (`event.preventDefault()`).
  - Haalt gebruikersnaam en wachtwoord op.
  - Controleert de inloggegevens (tijdelijk hardcoded voorbeeld).
  - Bij succes wordt een tijdelijk token gegenereerd en opgeslagen in `sessionStorage`.
  - Bij mislukte inlogpoging wordt een foutmelding getoond.
  - Stuurt de gebruiker door naar het admin-paneel bij succesvolle inlog.

De scriptlogica zorgt ervoor dat de gebruiker wordt geauthenticeerd en doorverwezen naar het admin-paneel bij succesvolle inlog. Het gebruikt sessionStorage om het gegenereerde token op te slaan. Let op dat het gegenereerde token in dit voorbeeld dus niet geschikt is voor productiegebruik.In plaats daarvan zou je een oplossing moeten overwegen die gebaseerd is op best practices voor authenticatie en beveiliging. Hier zijn enkele aanbevelingen:

Gebruik van een Backend Service:

Verplaats de authenticatie-logica naar een server-side backend-service.
De backend-service moet gebruikersgegevens verifiëren, een veilig gegenereerd token terugsturen en dat token opslaan in een beveiligd cookie of via een andere veilige methode.
Gebruik van HTTPS:

Zorg ervoor dat je website gebruikmaakt van HTTPS om de communicatie tussen de browser en de server te beveiligen.
Veilige Token-generatie:

Gebruik een veilige bibliotheek voor het genereren van tokens, zoals JSON Web Tokens (JWT) met een geheime sleutel.
Implementeer een betrouwbare methode voor het genereren en valideren van tokens.
Op Opslag Gebaseerde Opties:

Overweeg het gebruik van moderne web-API's zoals localStorage of sessionStorage, of beter nog, cookies met de juiste instellingen voor veilige opslag van tokens.
Beveiligd Wachtwoordbeheer:

Sla wachtwoorden op een veilige manier op, bijvoorbeeld door deze te hashen met een sterk hash-algoritme zoals bcrypt.
Twee-factor Authenticatie (2FA):

Overweeg het implementeren van tweefactorauthenticatie om een extra beveiligingslaag toe te voegen.
Beperk Foutinformatie:

Beperk foutinformatie die aan gebruikers wordt getoond om potentiële aanvallers geen informatie te geven over het falen van authenticatiepogingen.
Beveiliging tegen CSRF en XSS-aanvallen:

Implementeer maatregelen om je applicatie te beschermen tegen Cross-Site Request Forgery (CSRF) en Cross-Site Scripting (XSS) aanvallen.
Regelmatige Beveiligingsaudits:

Voer regelmatig beveiligingsaudits uit om de beveiliging van je applicatie te evalueren en te verbeteren.

## Naam script: `logout.js`

comments in het script

## analyse van het script

Algemeen

Met dit script kun je uitloggen. Het luistert naar het klikken op een uitlogknop. Bij het klikken wordt het sessietoken uit de `sessionStorage` verwijderd, en de gebruiker wordt teruggestuurd naar de inlogpagina.

### de variabelen

- `logoutButton`: Bevat het DOM-element van de uitlogknop.
- `const` wordt gebruikt voor `logoutButton` omdat deze waarde niet opnieuw wordt toegewezen binnen de scope van het script.

Functies:

#### DOMContentLoaded` Event Listener

- **Opbouw:** Wacht tot de DOM is geladen.
- **Logica:** Het voegt een event listener toe aan het klikken op de uitlogknop.

#### `logoutButton.click` Event Listener

- **Opbouw:** Verwijdert het sessietoken uit de `sessionStorage` en stuurt de gebruiker terug naar de inlogpagina.
- **Logica:**
  - Verwijdert het sessietoken met `sessionStorage.removeItem('authToken')`.
  - Stuurt de gebruiker terug naar de inlogpagina met `window.location.href = 'login.html'`.

Het script zorgt ervoor dat de gebruiker wordt uitgelogd wanneer ze op de uitlogknop klikken. Het verwijdert het sessietoken om verdere toegang tot beveiligde pagina's te voorkomen en stuurt de gebruiker terug naar de inlogpagina.

## Naam script: `orders.js`

Zie ook de uitleg in de coments

## Over het script

### Algemeen over dit script

Dit script zorgt voor een overzicht van bestellingen weer te geven op besteloverzicht.html. Het haalt ordergegevens op uit de lokale opslag en toont deze in een tabel op de pagina.

#### Variabelen die in dit script worden gebruikt

- `storedOrders`: Bevat ordergegevens opgehaald uit de lokale opslag.
- `tbody`: Bevat het DOM-element van de tabelbody waarin de ordergegevens zullen worden ingevoegd.
- `const` wordt gebruikt voor `storedOrders` en `tbody` omdat deze waarden niet opnieuw worden toegewezen binnen de scope van het script.

### functies toegelicht

#### `showOrderOverview()`

- **Opbouw:** Haalt ordergegevens op, loopt door elke order, en genereert tabelrijen voor elk product in de order.
- **Wat doet de functie:**
  - Haalt ordergegevens op uit de lokale opslag met `JSON.parse(localStorage.getItem('orders')) || []`.
  - Voor elke order in de opgeslagen orders:
    - Haalt de order-ID, orderdatum en totaalprijs op.
    - Voor elk product in de order:
      - Maakt een nieuwe tabelrij aan met productgegevens.
      - Voegt de rij toe aan de tabel.
    - Voegt een lege rij toe na elke order, behalve na de laatste order.
  - Toont de gegenereerde tabelrijen op de pagina.

#### Aanroepen van de functie

- **Opbouw:** Roept de `showOrderOverview` functie aan om de ordergegevens weer te geven.
- **Logica:** Direct nadat de DOM is geladen, worden de ordergegevens weergegeven door de functie `showOrderOverview` aan te roepen.

## Naam script: `productTable.js`

## De analyse van het script

Algemeen

Dit script beheert en toont productgegevens in een tabel op de pagina `productoverzicht.html`. Het maakt gebruik van lokale opslag om productgegevens bij te houden, en er zijn functies voor het bijwerken van de tabel, het resetten van lokale opslag met gegevens uit een JSON-bestand, het genereren van actieknoppen en het bewerken/verwijderen van producten.

### overzicht gebruikte variabelen

- `tableBody`: Bevat het DOM-element van de tabelbody waarin de productgegevens worden ingevoegd.
- `storedProducts`: Bevat productgegevens opgehaald uit de lokale opslag.
- `actionButtonsContainer`: Bevat het DOM-element waarin actieknoppen worden ingevoegd.
- `resetButton`: Bevat het DOM-element van de resetknop.

### functies uitleg

#### `updateTable(products)`

- **Opbouw:** Leegt de huidige inhoud van de tabel en vult deze met de nieuwe gegevens.
- **Wat doet de functie:**
  - Leegt de huidige inhoud van de tabel met `tableBody.innerHTML = ''`.
  - Vult de tabel met de nieuwe gegevens door te itereren over `products` en voor elk product een nieuwe tabelrij toe te voegen.

#### `updateTableFromLocalStorage()`

- **Opbouw:** Haalt productgegevens op uit de lokale opslag en roept vervolgens `updateTable` aan om de tabel bij te werken.
- **Wat doet de functie:**
  - Haalt productgegevens op uit de lokale opslag met `JSON.parse(localStorage.getItem('products')) || []`.
  - Roept `updateTable` aan om de tabel bij te werken met de nieuwe gegevens.

#### `resetLocalStorageFromJSON()`

- **Opbouw:** Haalt gegevens op uit een JSON-bestand en stelt de lokale opslag opnieuw in met deze gegevens.
- **Wat doet de functie:**
  - Haalt gegevens op uit `../mansanta.json` met behulp van de `fetch` API.
  - Stelt de lokale opslag opnieuw in met de opgehaalde gegevens.
  - Vernieuwt de tabel met de nieuwe gegevens door `updateTableFromLocalStorage` aan te roepen.

#### `generateActionButtons()`

- **Opbouw:** Genereert een resetknop en voegt deze toe aan de pagina.
- **Wat doet de functie:**
  - Maakt een resetknop aan met de nodige eigenschappen en voegt deze toe aan `actionButtonsContainer`.
  - Voegt een event listener toe aan de resetknop die `resetLocalStorageFromJSON` aanroept.

#### Event Listener voor `DOMContentLoaded`

- **Opbouw:** Roep `updateTableFromLocalStorage` aan bij het laden van de DOM.
- **Wat doet de functie:**
  - Roep `updateTableFromLocalStorage` aan om de tabel met actuele gegevens te vullen.
  - Roep `generateActionButtons` aan om de knoppen te genereren.

#### `editProduct(productId)`

- **Opbouw:** Navigeert naar een bewerkpagina voor het geselecteerde product.
- **Wat doet de functie:**
  - Navigeert naar `edit-product.html` met het geselecteerde product-ID.

#### `removeProduct(productId)`

- **Opbouw:** Verwijdert het geselecteerde product uit de lokale opslag en vernieuwt de tabel.
- **Wat doet de functie:**
  - Haalt productgegevens op uit de lokale opslag.
  - Zoekt het te verwijderen product op basis van het product-ID.
  - Verwijdert het product uit de array en werkt de lokale opslag bij.
  - Vernieuwt de tabel met de nieuwe gegevens.

  ---

## Beschrijving van de HTML scripts

## Naam script `index.html`

HTML-indexpagina voor de Mansanta webshop.

## Het script op hoofdlijnen

Dit HTML-script is de indexpagina van de Mansanta webshop. Hier volgt een korte analyse:

- Het script begint met de doctype-definitie, die de HTML-versie en syntaxis aangeeft.
- Vervolgens worden de metagegevens zoals de charset, viewport en titel van de pagina ingesteld.
- Er zijn verwijzingen naar externe stijlbladen (styles.css) en Bootstrap CSS en Bootstrap Icons om de opmaak en iconen van de pagina te beheren.
- Binnen het body-element zijn er secties voor de navigatiebalk, tekstcontainer, carrousel (slideshow), en een footer.
- De navigatiebalk bevat een logo, links naar de startpagina ('Home') en de webshop ('Webshop'), evenals een winkelwagenpictogram.
- De tekstcontainer bevat een welkomstboodschap met informatie over het dorpje Ostra en nodigt bezoekers uit om langs te komen.
- De carrousel bevat afbeeldingen van verschillende producten.
- De footer bevat informatie over Mansanta, inclusief sociale media-links en contactgegevens.

## Naam script `webshop.html`

HTML-webshoppagina voor de Mansanta-website.

## Over dit script

Dit HTML-script is de webshoppagina van Mansanta. Hier is een korte analyse, waarbij wordt verwezen naar wat eerder is gezegd over `index.html`:

- Net als in `index.html` begint het script met de doctype-definitie, metagegevens, en verwijzingen naar stijlbladen en externe bibliotheken (Bootstrap CSS en Bootstrap Icons).
- De body van de pagina heeft een donkere achtergrondkleur (`bg-dark`).
- De navigatiebalk bevat een logo, links naar de startpagina ('Home') en de webshop ('Webshop'), evenals een winkelwagenpictogram.
- Er is een donkergekleurde strook onder de navigatiebalk.
- Het product-container (`<div id="product-container" class="container mb-4 mt-4">`) geeft producten weer en is leeg omdat de inhoud wordt ingevuld door JavaScript, zoals aangegeven door de scripttags op het einde van de body.
- De footer bevat informatie over Mansanta, inclusief sociale media-links en contactgegevens.
- De scripttags aan het einde van het body-element die verwijzen naar `script.js` en Bootstrap JavaScript-bibliotheek.

## Opmerking

De specifieke functionaliteit van de webshop, zoals het dynamisch laden van producten en bijwerken van de winkelwagen, zie je in `script.js`dat wordt ingeladen.

## Naam script `winkelwagen.html`

HTML-webpagina voor de winkelwagen op de Mansanta-website.

## over dit script

Dit HTML-script geeft de winkelwagenpagina van Mansanta weer. Hier is een korte analyse, waarbij wordt verwezen naar wat eerder is gezegd over `index.html` en `webshop.html`:

- Het script volgt hetzelfde algemene patroon als de andere pagina's, zoals `index.html` en `webshop.html`, met inbegrip van de navigatiebalk met logo, link naar de startpagina ('Home'), link naar de webshop ('Webshop'), en een winkelwagenpictogram.
- Er is een witte strook onder de navigatiebalk en boven de hoofdinhoud van de pagina om scrollen onder de navbar te voorkomen.
- De hoofdinhoud van de pagina bevat een container met de titel 'Winkelwagen'. Daaronder bevinden zich lege containers (`<div>`) met de id's "messageContainer," "selected-products," en "totalPrice," die worden ingevuld door JavaScript.
- Er is een paragraaf (`<p>`) met de id "confirmationMessage" en knoppen met de id's "adjustButton" en "checkoutButton" voor het aanpassen van de winkelwagen en het afrekenen.
- Onderaan de pagina bevindt zich een footer met contactgegevens en sociale media-links, vergelijkbaar met de andere pagina's.
- Scripttags aan het einde van het body-element verwijzen naar het JavaScript-bestand `winkelwagen.js` en de Bootstrap JavaScript-bibliotheek.

## opmerking

De specifieke functionaliteit van de winkelwagenpagina, zoals het tonen van geselecteerde producten, het berekenen van de totaalprijs en de afrekenprocessen, wordt het `winkelwagen.js`-bestand geregeld.

## Naam script `productoverzicht.html`

HTML-webpagina voor het beheer van producten op de Mansanta-website.

## Korte analyse van dit script in de admin map

Dit HTML-script vertegenwoordigt de beheerpagina voor producten op de Mansanta-website. Hier is een korte analyse:

- **Meta-informatie en Stijlblad**: De standaard meta-informatie voor de HTML-pagina en verwijzingen naar externe stijlbladen (Bootstrap, Bootstrap-icons) worden gegeven.

- **JavaScript**: Er zijn twee scripttags die verwijzen naar JavaScript-bestanden. Het eerste script maakt gebruik van `sessionStorage` en het tweede script is `adminCheck.js`, dat de rol van de gebruiker controleert en doorverwijst naar de inlogpagina als deze geen beheerder is.

- **Inline CSS**: Ik heb eeen inline CSS-stijl toegepast op het `th` (table header) en `td` (table data) element binnen een media query, waardoor de tabel responsief wordt bij een maximale breedte van 818 pixels. Dit heb ik inline gedaan, omdat dit alleen op deze pagina nodig is om de tabel leesbaar en netjes onder de navigatiebalk te houden bij kleinere schermen.

- **Navigatiebalk**: Een navigatiebalk bevat het logo, menu-items voor productoverzicht, besteloverzicht en uitloggen. De uitloglink heeft de id "logoutLink," die wordt gebruikt door het `logout.js`-bestand. Ik heb een ander formaat en een andere kleur gekozen om duidelijk te maken dat je als admin in een andere omgeving werkt.

- **Tabel**: Een tabel met koptekst (`thead`) en lichaam (`tbody`). De kolommen zijn ID, Product, Prijs, URL, Voorraad, en twee kolommen met de label "Acties." De tabel wordt dynamisch ingevuld door JavaScript met behulp van de id "productTableBody."

- **Actieknoppen**: Er is een container met de id "actionButtons" en een knop "Toevoegen" met een link naar "add-product.html."

- **JavaScript-bestanden**: Er zijn drie scripttags aan het einde van de body die verwijzen naar JavaScript-bestanden: `products.js` (voor het beheren van producten), `logout.js` (voor het uitloggen) en de Bootstrap JavaScript-bibliotheek.

Het script wordt gebruikt voor het beheren van producten met functionaliteiten zoals het tonen van productinformatie in een tabel, beheerderscontrole, uitloggen, toevoegen van nieuwe producten, en mogelijk andere productgerelateerde acties.

## Naam script `besteloverzicht.html`

HTML-webpagina voor het beheren van bestellingen op de Mansanta-website.

## Script uitleg

Dit HTML-script is de beheerpagina voor bestellingen op de Mansanta-website. Hier is een korte analyse:

- **Meta-informatie en Stijlblad**: De standaard meta-informatie voor de HTML-pagina en verwijzingen naar externe stijlbladen (Bootstrap, Bootstrap-icons) worden gegeven.

- **JavaScript**: Er zijn twee scripttags die verwijzen naar JavaScript-bestanden. Het eerste script maakt gebruik van `sessionStorage`, en het tweede script is `adminCheck.js`, dat de rol van de gebruiker controleert en doorverwijst naar de inlogpagina als deze geen admin is.

 **Inline CSS**: Ik heb eeen inline CSS-stijl toegepast op het `th` (table header) en `td` (table data) element binnen een media query, waardoor de tabel responsief wordt bij een maximale breedte van 818 pixels. Dit heb ik inline gedaan, omdat dit alleen op deze pagina nodig is om de tabel leesbaar en netjes onder de navigatiebalk te houden bij kleinere schermen.

- **Navigatiebalk**: Een navigatiebalk bevat het logo, menu-items voor productoverzicht, besteloverzicht en uitloggen. De uitloglink heeft de id "logoutLink," die wordt gebruikt door het `logout.js`-bestand.

- **Tabel**: Een tabel met koptekst (`thead`) en lichaam (`tbody`). De kolommen zijn Ordernummer, Datum en tijd, Totaalprijs, Productnaam, en Aantal. De tabel wordt dynamisch ingevuld door JavaScript met behulp van de id "productTableBody."

- **Terugknop**: Er is een knop met een pijl-terugpictogram dat linkt naar `besteloverzicht.html.` Hiermee zorg ik ervoor dat je bij langere tabellen snel terug kunt naar het begin.

- **JavaScript-bestanden**: Er zijn twee scripttags aan het einde van de body die verwijzen naar JavaScript-bestanden: `orders.js` (voor het beheren van bestellingen) en de Bootstrap JavaScript-bibliotheek.

Het script wordt gebruikt voor het beheren van bestellingen met functionaliteiten zoals het tonen van bestelinformatie in een tabel, beheerderscontrole, uitloggen, en een terugknop naar het besteloverzicht.

## Naam script `addproduct.html`

HTML-webpagina voor het toevoegen van producten op de Mansanta-website.

## Toeliching op het script

Dit HTML-script vertegenwoordigt de pagina voor het toevoegen van producten op de Mansanta-website. Hier is een korte analyse:

- **Meta-informatie en Stijlblad**: De standaard meta-informatie voor de HTML-pagina en verwijzingen naar externe stijlbladen (Bootstrap, Bootstrap-icons) worden gegeven.

- **JavaScript**: Er zijn twee scripttags die verwijzen naar JavaScript-bestanden. Het eerste script maakt gebruik van `sessionStorage`, en het tweede script is `adminCheck.js`, dat de rol van de gebruiker controleert en doorverwijst naar de inlogpagina als deze geen admin is.

- **Navigatiebalk**: Een navigatiebalk bevat het logo, menu-items voor productoverzicht, besteloverzicht en uitloggen. De uitloglink heeft de id "logoutLink," die wordt gebruikt door het `logout.js`-bestand.

- **Formulier**: Een formulier met verschillende invoervelden voor het toevoegen van productinformatie, zoals id (automatisch ingevuld), naam, info, prijs, voorraad, bestelling, afbeelding en een voorbeeld van de afbeelding.

- **Knoppen**: Er zijn twee knoppen onder het formulier: "Voeg toe!" (om het product toe te voegen) en een knop met een pijl-terugpictogram die linkt naar "productoverzicht.html."

- **JavaScript-bestanden**: Er zijn twee scripttags aan het einde van de body die verwijzen naar JavaScript-bestanden: `add-product.js` (waarschijnlijk voor het toevoegen van productfunctionaliteit) en de Bootstrap JavaScript-bibliotheek.

Het script wordt gebruikt voor het toevoegen van nieuwe producten aan de website met functionaliteiten zoals het invullen van productinformatie in een formulier, het bekijken van een voorbeeld van de afbeelding en het uitvoeren van de toevoegactie.

## Naam script `editproduct.html`

HTML-webpagina voor het bewerken van producten op de Mansanta-website.

## Algemene uitleg van dit script

Dit HTML-script vertegenwoordigt de pagina voor het bewerken van producten op de Mansanta-website. Hier is een korte analyse:

- **Meta-informatie en Stijlblad**: De standaard meta-informatie voor de HTML-pagina en verwijzingen naar externe stijlbladen (Bootstrap, Bootstrap-icons) worden gegeven.

- **JavaScript**: Er zijn twee scripttags die verwijzen naar JavaScript-bestanden. Het eerste script maakt gebruik van `sessionStorage`, en het tweede script is `adminCheck.js`, dat de rol van de gebruiker controleert en doorverwijst naar de inlogpagina als deze geen admin is.

- **Navigatiebalk**: Een navigatiebalk bevat het logo, menu-items voor productoverzicht, besteloverzicht en uitloggen. De uitloglink heeft de id "logoutLink," die wordt gebruikt door het `logout.js`-bestand.

- **Formulier**: Een formulier met verschillende invoervelden voor het bewerken van productinformatie, zoals id (niet bewerkbaar), naam, info, prijs, voorraad, bestelling, afbeelding en een voorbeeld van de afbeelding.

- **Knoppen**: Er zijn twee knoppen onder het formulier: "Wijzig!" (om de productinformatie te wijzigen) en een knop met een pijl-terugpictogram die linkt naar "productoverzicht.html."

- **JavaScript-bestanden**: Er is een scripttag aan het einde van de body die verwijst naar het JavaScript-bestand `edit-product.js` en de Bootstrap JavaScript-bibliotheek.

Het script lijkt te wordt gebruikt voor het bewerken van bestaande producten op de website met functionaliteiten zoals het invullen van bewerkbare productinformatie in een formulier, het bekijken van een voorbeeld van de afbeelding en het uitvoeren van de wijzigingsactie. Het script maakt gebruik van een apart JavaScript-bestand (`edit-product.js`) om de logica voor het bewerken van producten te bevatten.

## Naam script

HTML-pagina voor het beheerdersloginportaal van Mansanta.

## Uitleg van het script

Dit HTML-script stuurt de beheerdersloginpagina van de Mansanta-website. Hier is een korte analyse:

- **Meta-informatie en Stijlblad**: De standaard meta-informatie voor de HTML-pagina en een verwijzing naar een extern stijlblad (Bootstrap) worden gegeven.

- **Body-klasse**: De body van de pagina heeft de klasse "bg-light," wat een lichte achtergrondkleur oplevert.

- **Container en Formulier**: Een container met een marge bovenaan bevat een kop "Admin Login" en een formulier voor het invoeren van gebruikersnaam en wachtwoord.

- **Formulier-invoervelden**: Er zijn twee invoervelden in het formulier voor gebruikersnaam ("username") en wachtwoord ("password"). Beide velden zijn vereist.

- **Inlogknop**: Er is een inlogknop ("Inloggen") onder het formulier.

- **JavaScript-bestanden**: Er zijn twee scripttags aan het einde van de body die verwijzen naar JavaScript-bestanden: `login.js` (waarschijnlijk voor de inlogfunctionaliteit) en de Bootstrap JavaScript-bibliotheek.

Het script wordt gebruikt voor het beheerdersloginportaal van de website, waar je als admin je gebruikersnaam en wachtwoord moet invoeren om toegang te krijgen tot beheerdersfunctionaliteiten. De pagina maakt gebruik van Bootstrap voor stijlelementen en functionaliteit. Het inlogformulier heeft basisinvoervelden en wordt verwerkt door het JavaScript-bestand `login.js`.

---

## Naam script `styles.css`

Aangepaste CSS-stijlen voor de Mansanta-website.

## Toelichting op het script

Dit CSS-script bevat aangepaste stijlen voor de Mansanta-website. Hier is een korte analyse:

- **Algemene Instellingen**: De algemene instellingen voor de `body` worden gedefinieerd, waaronder het instellen van marges, padding en de hoogte van 100% van de viewport.

- **Navbar en Footer**: De stijlen voor de `navbar` en `footer` bevatten achtergrondkleur, tekstkleur en padding. De linkkleur in de footer verandert bij hover.

- **Achtergrondafbeelding**: Een klasse genaamd `.achtergrond` wordt gedefinieerd voor de achtergrondafbeelding van de website. Het maakt gebruik van een olijfboomafbeelding met specifieke instellingen voor weergave en herhaling.

- **Carousel Stijlen**: Specifieke stijlen voor de Bootstrap Carousel-component worden gedefinieerd, inclusief marges, afgeronde hoeken, schaduweffecten en responsieve aanpassingen.

- **Tekstcontainer**: Een container met tekst krijgt aangepaste stijlen, waaronder marges, kleur, en uitlijning van tekst binnen de container.

- **Media Query Aanpassingen**: Media queries worden gebruikt om de stijlen aan te passen op basis van verschillende schermgroottes. Dit omvat aanpassingen voor de Carousel-container en Tekstcontainer op verschillende schermgroottes en -hoogtes.

- **Minimale Hoogte voor Kleine Schermen**: Een media query zorgt ervoor dat de body een minimale hoogte van 690 pixels heeft op schermen met een maximale hoogte van 690 pixels.

**Logica voor aparte CSS-bestand naast Bootstrap:**

Ik heb naast Bootstrap een apart CSS-bestand gebruikt om de volgende redenen:

**Aanvullende Stijlen**: Bootstrap biedt een set standaardstijlen, maar voor aanvullende, op maat gemaakte stijlen vond ik het handig om een apart CSS-bestand te hebben. Het aparte CSS-bestand maakt het mogelijk om specifieke stijlen voor de Mansanta-website te definiëren zonder de Bootstrap-stijlen aan te tasten.

**Onderhoud en Modulariteit**: Door stijlen te scheiden, wordt het gemakkelijker om onderhoud uit te voeren en de code modulair te houden. Het maakt het ook mogelijk om Bootstrap bij te werken zonder directe invloed op aangepaste stijlen.
