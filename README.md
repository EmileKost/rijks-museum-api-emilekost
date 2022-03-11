<h1>READ.ME Rijksmuseum API Emile Kost</h1>

<h2>Introductie</h2>
Voor het vak Web app from scratch heb ik gekozen voor de Rijksmuseum API. Ik heb nog nooit eerder gewerkt met een API en het lijkt me daarom ook een heel interessante opdracht. Ik hoop bij dit project te behalen dat ik de data van de API kan ophalen en kan omzetten in app voor mobiele telefoon. Het lijkt mij eventueel nog interessant om te kijken of het mogelijk is om een zoekfunctie voor de API toe te voegen. Ik verwacht dat ik zeker veel hulp zal nodig hebben en dat ik door veel te vragen uiteindelijk met de juiste oplossingen zal komen.

<h2>Week 1</h2>

<h3>API link bepalen</h3>
In week een hebben we voornamelijk geleerd hoe je toegang kan krijgen tot een API en zijn data, die krijg je namelijk niet zomaar. Voor de Rijksmuseum API moest
ik eerste naar de website van de API. Ik werd van deze website niet heel veel wijzer en besloot hulp aan mijn klasgenoten te vragen. Al snel bleek er ergens op de website een url te staan die je kon gaan gebruiken om de data van de API op te halen. Het enige wat echter nog nodig was was de API-key die je daadwerkelijk toegang gaf tot de url en de data hierbij.
<img width="500" alt="Schermafbeelding 2022-03-11 om 10 16 17" src="https://user-images.githubusercontent.com/70690100/157838039-93d6a9f3-22ca-46ac-89f3-8e2cf8cbdab0.png">
dit was de url nodig om later data te kunnen ophalen

<h2>Week 2</h2>
<h3>Fetchen van API in Javascript</h3>
Nu we eenmaal de url hebben van de API moesten we gaan kijken hoe we de data door middel van Javascript kunnen ophalen in de website. Ik had werkelijk geen flauw benul hoe ik dit moest gaan aanpakken. Gelukkig kregen we al snel les van Joost met een duidelijke uitleg om hoe we dit kunnen doen. We moesten namelijk de API gaan fetchen. In mijn eerste versie is de data als volgt gefetcht: 
<img width="820" alt="Schermafbeelding 2022-03-11 om 10 28 12" src="https://user-images.githubusercontent.com/70690100/157839892-04b3df83-213b-4d5a-bec7-b802f723afd4.png">
Hier wordt als het ware de variabele dataRembrandt opgehaald en omgezet in een .json() voormaat zodat we de data ook daadwerkelijk kunnen gaan gebruiken. 
In het tweede gedeelte van de code gaan we dan daadwerkelijk de data renderen in de HTML door het aanmaken van een 'ul' en hierin vervolgens de content te plaatsen door insertAdjacentHTML() te gebruiken. 

<h2>Week 3</h2>
In week drie was de doelstelling om de functie's zoveel mogelijk los van elkaar te schrijven. We gingen dus beginnen aan het refactoren van onze code. 
<img width="762" alt="Schermafbeelding 2022-03-11 om 10 37 51" src="https://user-images.githubusercontent.com/70690100/157841597-050825ac-e904-4af8-a3d6-2f5062f3f172.png">
Eerst ben ik begonnen met het fetchen van de collection data van de Rijksmuseum API. Hiervoor moest er een for loop gebruikt worden om zo langs alle kunstobjecten te gaan om zo de data op te halen. Tegelijkertijd werd in deze functie ook de functie getAdditionalData aangeroepen zodat deze data ook beschikbaar zou worden gesteld. 
<img width="756" alt="Schermafbeelding 2022-03-11 om 10 38 11" src="https://user-images.githubusercontent.com/70690100/157841996-4a3c4e3d-91e7-4a39-90a4-a4f2baf90ef7.png">
Nu we allebei de data's hebben opgehaald moesten deze nog gerendert worden in de HTML. Ook hiervoor was het mogelijk om een aparte functie te schrijven zodat de functie's allemaal van elkaar los staan.
<img width="797" alt="Schermafbeelding 2022-03-11 om 10 38 29" src="https://user-images.githubusercontent.com/70690100/157842170-3a05f974-a436-45ad-91fd-acc043879341.png">

In deze week is het dus succesvol gelukt om de functie's los van elkaar te schrijven. 

<h2>Week 4</h2>
In deze week (en de vakantie samen) heeft mijn focus heel erg gelegen op modules en het maken van een zoekfunctie. Beide waren voor mij een hele opgaven en waren ook niet gelukt zonder de hulp van anderen. Door eerst research te doen naar zoekfunctie's was ik al een klein beetje wijzer geworden. Deze manier van het creeeren van een zoekfunctie was echter niet effectief voor mijn website.
<img width="813" alt="Schermafbeelding 2022-03-11 om 10 45 01" src="https://user-images.githubusercontent.com/70690100/157842675-5ad69a08-7f02-4c9e-97d3-ade9961c84a4.png">
<h3>Zoek functie </h3>
Ik was de hele vakantie druk bezig met het oplossen van dit probleem maar kwam uiteindelijk niet heel veel verder. Ik heb daarom toen Jeffrey gevraagd of hij mij kon helpen met het maken van een zoekfunctie. Jeffrey heeft mij uiteindelijk heel erg goed geholpen met het debuggen en aanpassen van mijn zoekfunctie. Hij heeft het tevens nog goed aan mij uitgelegd waardoor ik ook daadwerkelijk snap wat er staat.
<img width="858" alt="Schermafbeelding 2022-03-11 om 10 48 19" src="https://user-images.githubusercontent.com/70690100/157843230-77cbeedb-5abb-4e5a-884f-bfa7ab5d2c52.png">
Voor de zoekfunctie heb ik weer een aparte getData functie gemaakt. Dit omdat we ditmaal gebruik moesten maken van een iets andere url, namelijk met q= erachter. Dit duidde een query aan waardoor we deze url later konden gebruiken om te zoeken. Er moest natuurlijk ook een formulier worden aangemaakt en de waarde hiervan moest worden opgeslagen in een variabele. Uiteindelijk was er alleen nog een render functie nodig die ervoor zorgt dat de gezochte data in de HTML zou verschijnen. De zoekfunctie was eidenlijk functioneel, alleen had wel nog wat kleine gebreken die later in week 4 samen met Jorn zijn opgelost.

<h3>Modules</h3>
Modules zorgen voor een meer structurelere opbouw van de code. Het was dan ook van belang om dit in mijn code te gebruiken, zeker voor later wanneer ik met grotere bestanden aan de slag ga, is dit perfect om toe te passen. Modules had ik enige uitleg bij nodig maar werd gelukkig al snel duidelijk.
<img width="858" alt="Schermafbeelding 2022-03-11 om 10 48 19" src="https://user-images.githubusercontent.com/70690100/157844514-cdea7b5a-28d5-4034-aafc-343623de2812.png">

<h2>Week 4</h2>
In de laatste week was de doelstelling om gebruik te maken van routie.js. Dit was voor mij compleet onbekend terrein en had dan ook de nodige hulp nodig. Uiteindelijk heb ik als het ware les van Jorn gekregen en hebben we samen een router kunnen toevoegen. Het was eerste belangrijk om routie te downloaden en deze in de Vendor map te zetten. Daarna konden we daadwerkelijk aan de slag gaan met routie.
<img width="812" alt="Schermafbeelding 2022-03-11 om 10 59 26" src="https://user-images.githubusercontent.com/70690100/157845179-41c269e4-d4b5-4be4-9693-cf0a26ddd431.png">
 
 <h2>Front end</h2>
<img width="397" alt="Schermafbeelding 2022-03-11 om 11 02 23" src="https://user-images.githubusercontent.com/70690100/157845753-1bb33349-817a-49f6-ae37-d9a26b1ff76e.png">
<img width="359" alt="Schermafbeelding 2022-03-11 om 11 02 43" src="https://user-images.githubusercontent.com/70690100/157845771-120f43ad-5930-41ac-acb1-4e80826aa521.png">

Live demo: 


