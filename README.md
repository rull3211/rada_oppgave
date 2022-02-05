This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.


#### KOMMENTARER TIL LØSNINGEN #####

Jeg valgte å bootstrappe applikasjonen med en npm-template som inneholdt redux, react, redux toolkit og var confet for å kunne ta i bruk css modules. 
    - Disse var egentlig alle verktøyene jeg  ønsket så da valgte jeg bare å gå emd templaten 

Jeg brukte ellers vanlig fetchkall og kun funksjonelle komponenter dog er dette kun en preferanse. 
Jeg brukte også use-state hooks for lokal statebehandling for alt trenger ikke å innom state dersom det kun har med sikk component å gjøre.

Ellers valgte jeg å modularisere koden i commonmappa med alle generelle moduler som konstanter, fetch-service typer og mappere.
    - ved apikall valgte jeg å mappe alle kall-data om til egene datamodeller for å ha full kontroll på hva jeg tar inn og hva jeg forkaster.
I componentsmappa har jeg komponentene som inngår i appen (denne kunne videre vært modularisert i mindre logiske komponenter men dette ble valgt bort for apper er så liten)

I redux mappa har jeg 3 repoer en for actions som dispatcher alle acrionene fra denne lokale komponenten for å samle alle sammenhørende actions i en fil.
    så kan disse actioene dispatches fra komponentene.

Ellers har jeg reduceren som er bygger state og behandler de forskjellige dispatchede actionene

Og så har jeg til slutt selectorene som også har hver sin fil(basert på reducere) for å igjen ha kontroll på hva som selectes og hvorfra. Dete gjør applikasjonene mer skalerbar

resources er for bilder og svger og lignende

og styles vil ha sammen struktur som components men innholder stylinger

##### ANTAKELSER GJORT 
At page index er popularitet
At du skal kunne interagere med de forskjellige treffene


##### UU og mobil
Forbedringer på uusiden sånn i første omgang hadde vært  å legge på ariatags for å kunne bruke skjermleser på siden.
ellers så er det ikke fryktelig mye mer å gjøre på en relativt enkel nettside.
Du kan navigere hele nettsider emd alle felt med tastaturet (og man disabler komponentene under når modalen er aktiv)
ellers så funker nettsiden opp til 500% zoom og fungerer tilfredstillende ned til <175px i bredde.
Alt av telefontilpasning er gjort med hjelp av flexbox og skalering er gjort med hjelp av størrelsesenheten REM og flittig bruk av max og min width

Ellers kunne jeg nok ha brukt css-variabler men dette kom jeg på ved kodegjennomgangen

en siste forbedring hadde potensielt vært å ha bedre errorhåndtering dersom man feilet på nettverkskall men jeg så det ikke hensiktsmessig her
