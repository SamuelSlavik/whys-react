# WHYS - REACT

Hopefully these docs and all the comments will be enough for you, but if something will be unclear, feel free to ask me.

## Task / Problem

Úkolem je připravit projekt, kde bude jedna stránka která má vykreslit článek a komentáře k němu. Komentáře se musí vykreslit až po vykreslení článku a jsou seřazeny od nejnovějšího nahoře.

Napiš to v Reactu tak, jak to umíš. Pokud možno, piš to funkcionálně (ne class komponenty). Můžeš nám napsat do emailu cokoliv, co tě napadlo během psaní a jak se to většinou řeší v produkčním kódu a proč.

Jak to má vypadat:

- vytvoř dvě komponenty, jedna vykreslí článek a druhá komentáře
- vytvoř komponentu `Application` která vykreslí ty dvě komponenty a ještě tlačítko pro načtení dalších komentářů (zobraz až po získání a vykreslení komentářů)
- komponenta `Application` bude získávat data (článek, komentáře, další komentáře)
- simuluj získání dat asynchronním kódem (zobrazí se po nějaké době)
- data jsou definovana v `app.html`, dostupné globálně

Pokyny:

- kód by měl běžet v Chrome 80 a novější
- jak si poradíš se styly je na tobě a uvítáme, když si s tím pohraješ
- kód musí být čitelný a dobře fungovat
- počítej s případným rozšířením projektu, ale ať je kód zároveň přiměřeně jednoduchý vůči zadání
- v souboru `README.md` sepiš jak projekt rozjet
- Finální projekt nám pošli jako `GitHub` (nebo Gitlab atp.) repozitář.


## Solution

I have created simple React application that simulate asynchronous data fetching with some delay. 
The data fetching is done only by the ```App.tsx``` component which then dynamically and conditionally renders 
components ```Article.tsx``` and ```Comments.tsx``` that are responsible for the data display.

On top of these 3 components, there is also Loader component.

The application is fully typed. The data models can be found in ```src/lib/models.ts```

For the styling, I have chosen library styled-components. It might be a little bit heavyweight for this small task,
but I wanted to show the usage of it.

The application was tested on Firefox 128.0.2 and Chromium 126.0.6478.182


## Local setup

1. Clone the repository
2. Run ```npm install``` for installing all dependencies
3. Run ```npm start``` for starting the local development server


## Notes / Suggestions / Scaling improvements

- For bigger project I would be glad to separate data fetching into more components
- Some functions that are written inline could be separated for better reusabilty. For example date parsing or comments sorting.
- The data fetching could be also broken into parts, for example by creating object with endpoints and another object with api helpers.
- Instead of using alert messages, more sophisticated error handling could be implemented. For example some notifications store with useNotification hook.