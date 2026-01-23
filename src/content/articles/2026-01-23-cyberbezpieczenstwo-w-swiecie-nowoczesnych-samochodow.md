---
title: "Cyberbezpieczeństwo w świecie nowoczesnych samochodów"
excerpt: |
  Nowoczesne samochody stały się rozproszonymi systemami komputerowymi, w których bezpieczeństwo i wygoda są
  nierozerwalnie związane z masowym przetwarzaniem danych. Jakie dane są przetwarzane oraz w jaki sposób?
date: 2026-01-23
readTime: "12 min"
tags:
  - cybersecurity
  - prywatność
  - bezpieczeństwo
  - motoryzacja
  - chiny
keywords:
  - cyberbezpieczeństwo samochodów
  - wyciek Volkswagen
  - prywatność aut
  - telematyka pojazdu
  - chińskie auta
  - śledzenie GPS
  - dane pojazdu
  - samochód elektryczny
  - monitoring auta
  - Tesla
  - bezpieczeństwo
  - infotainment
  - prywatność
  - zakaz MON
  - backdoor auto
  - Cariad wyciek
  - dane kierowcy
  - aplikacja pojazdu
  - system ADAS
  - pojazd szpiegowanie
  - cybersecurity
  - chińska motoryzacja
  - motoryzacja
  - chiny
  - technical interview
coverUrl: "https://images.unsplash.com/photo-1634804519576-d7047c5b39d6?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
---

## Wstęp do systemów elektronicznych w samochodzie

Zanim odpowiemy sobie na podstawowe pytania, zacznijmy od kontekstu. Aby w pełni zrozumieć zagadnienia cyberbezpieczeństwa stosowane w dzisiejszych pojazdach, omówię wstępnie jakie rodzaje urządzeń elektronicznych są dzisiaj podstawą działania systemów pokładowych w nowoczesnych samochodach.

Pierwszym z nich jest **TCU** (**Telematics Control Unit**, Jednostka Sterująca Telematyką): to system komunikacyjny łączący pojazd z internetem, umożliwiający śledzenie, zdalną diagnostykę i zdalną komunikację. TCU wewnętrznie zawiera najczęściej moduł komórkowy (LTE/5G) z modułem eSIM, często również odbiornik GPS. TCU przetwarza między innymi:
- dokładną lokalizację pojazdu w trybie rzeczywistym,
- dokładne dane o stanie pojazdu: błędy wewnętrzne, alerty, przebieg, poziom paliwa / baterii, temperatury na zewnątrz i wewnątrz pojazdu,
- poprzez wbudowany akcelerometr: styl jazdy (nagłe hamowanie / przyśpieszenie, prędkość bieżącą, średnią, czas jazdy),
- identyfikatory pojazdu: nr modułów, nr VIN pojazdu, informacje o subskrypcjach czy zakupionym poziomie wyposażenia.

Drugim najpopularniejszym systemem jest tzw. **Infotainment**. Jest to główny „interfejs” auta, ale także wielki kolektor danych o użytkowniku. W zależności od producenta i od stopnia wyposażenia może przetwarzać on między innymi:
- wyszukiwane adresy, w tym te zapisane jako „dom”, „praca”, ostatnie trasy,
- kontakty zaimportowane z telefonu poprzez system Bluetooth,
- dane multimedialne i preferencje (w tym na przykład tokeny logowania do Spotify / Tidal / Apple Music) w zależności od producenta i stopnia wyposażenia.
Warto wspomnieć, że w przypadku, gdy korzystamy z systemów takich jak Android Auto lub Apple CarPlay, znaczna część informacji jest przesyłana w sposób szyfrowany, który jest niedostępny do odczytu poprzez tradycyjny system Infotainment — z wyjątkiem informacji takich jak następny manewr nawigacji czy aktualnie odtwarzany utwór.

Trzecim rodzajem systemów są systemy jazdy autonomicznej / **ADAS** (**Advanced Driver Assistance Systems**, zaawansowane systemy wspomagania kierowcy). Systemy takie jak lane assist, adaptywny tempomat, autopilot wykorzystują wiele sensorów takich jak czujniki zbliżeniowe, LIDAR, kamery, aby móc ocenić i zrozumieć otoczenie pojazdu, a następnie wspierać kierowcę. Systemy te przetwarzają więc dane takie jak:
- obraz z kamer (droga, piesi, budynki i przeszkody dookoła, tablice rejestracyjne, znaki drogowe)
- dane z radarów / sonarów / LIDARów (odległość od przeszkód, prędkość dynamiczna względem innych pojazdów, dokładne plany przestrzenne otoczenia),
- mapy wysokiej rozdzielczości, w tym plany parkingów, miejsc parkingowych, niektóre pojazdy nawet potrafią „zapamiętać” które miejsce parkingowe w garażu podziemnym jest nasze.

Czwarty rodzaj elektroniki to sterowniki pokładowe takie jak **ECU** (**Electronic Control Unit**), magistrala **CAN** (**Controller Area Network**). Te mikrokomputery przetwarzają informacje takie jak:
- ilość obrotów silnika na minutę, moment obrotowy, temperatura, ciśnienie w oponach, stany poszczególnych czujników,
- w pojazdach elektrycznych także napięcia poszczególnych ogniw oraz ich temperatury, cykle ładowania i szczegóły zużycia prądu

Piątym rodzajem mikrokomputerów są moduły komfortu i personalizacji. To między innymi system bezkluczykowy, profile użytkowników, zapamiętane ustawienia foteli, klimatyzacji, ulubionej stacji radiowej, rozpoznawanie osób. Przetwarzają takie informacje jak:
- ustawienia fotela, lusterek, klimatyzacji,
- waga pasażera lub numer użytego kluczyka (w te sposoby najczęściej pojazdy rozróżniają kierowcę),
- elementy małej biometrii takie jak rozpoznawanie twarzy / głosu.

Szóstym, ostatnim i dość sporadycznie spotykanym jest sieć **V2X** (**Vehicle-to-Everything**), czyli sieć umożliwiająca kontakt samochodu z otoczeniem. W niektórych krajach pojazdy potrafią połączyć się z tablicą nad autostradą i uzyskać informację o dynamicznym ograniczeniu prędkości lub z sygnalizatorem świetlnym, aby pokazać kierowcy za ile sekund zmieni się cykl świateł. Te systemy dopiero się rozwijają, lecz przy tym tempie rozwoju, ich popularyzacji możemy spodziewać się w najbliższych pięciu latach. Warto wspomnieć, że liderem rozwoju tego typu rozwiązań są właśnie Chiny.

Samochód dzisiaj więc nie jest ledwie pojazdem, jest niesamowitym układem komputerowym składającym się z kilkunastu niezależnych modułów, które przetwarzają miliony informacji na sekundę.

## Co doprowadziło do takiego stanu rzeczy?

Pchnięcie motoryzacji w cyfryzację miało wiele przyczyn. Pierwszym z powodów jest wyścig rynkowy i walka o coraz bardziej wymagającego klienta. Rozwój nowych silników spalinowych znacznie zwolnił, producenci osiągają optimum między kosztami produkcji silników, a ich parametrami i jakością. Na tak zbudowanym i wysoko konkurencyjnym rynku ciężko jest wyjść z prawdziwą innowacją, przełomem. Pewnego rodzaju przełomem była popularyzacja samochodów elektrycznych, a producentem-liderem bardzo szybko została Tesla. Nie jest to coś, co powinno nas dziwić — samochód ten był nie tylko przełomowy ze względu na rodzaj napędu, ale przede wszystkim sposobu sterowania. Pulpit z jednym, wielkim tabletem zastępującym dziesiątki przycisków w kabinie, obsługa całego pojazdu poprzez jeden ekran dotykowy: to kolosalna zmiana doświadczenia użytkownika. Aby ten tablet mógł jednak wyświetlać wszystkie informacje, takie jak stan świateł, wrzucony bieg, prędkość — wszystkie informacje muszą być bez żadnych opóźnień dostępne w jednym, scentralizowanym komputerze. Samochodem tym możemy sterować i otwierać go aplikacją, sprawdzać na bieżąco obraz z kamer i tak dalej.

Badając przyczyny, warto spojrzeć na to, kto w Polsce kupuje nowe pojazdy. Badania takie przeprowadza regularnie **IBRM** (**Instytut Badań Rynku Motoryzacyjnego**): 50.25% pojazdów zakupionych w pierwszej połowie 2025 roku stanowiły zakupy flotowe, czyli leasingi i zakup samochodów w finansowaniu przez firmy prywatne. Druga grupa klientów to klienci fizyczni, czyli zakupy aut na użytek wyłącznie prywatny — odpowiednio 33.74%. Rynek pojazdów na wynajem wyniósł 9.19% zakupu pojazdów. Każda z tych grup, posiada nieco inny interes w różnych systemach elektronicznych w samochodzie.

**Klient flotowy** również ma jasny interes monitorować stan i lokalizację swojej floty. Spedytorzy mogą wysyłać zdalnie kierowcom nowe punkty nawigacji prosto do komputera pokładowego, mogą mieć podgląd na estymowany czas dotarcia do celu, systemy te często mogą integrować się z tachografem. Bardziej przyziemnie, mogą monitorować stan paliwa w baku i przeciwdziałać jego kradzieżom. W zarządzaniu flotą dostaniemy na jednym pulpicie informacje o tym, kiedy każdy z wielu pojazdów musi przejść określony przegląd.

**Klient indywidualny** doceni możliwość podłączenia swojego ulubionego streamingu muzyki, oczekuje, że samochód rozpozna kierowcę i błyskawicznie, automatycznie dostosuje ustawienia systemu, fotela, lusterek. Klient ten będzie oczekiwał, że jednym kliknięciem z telefonu udostępni cel podróży do nawigacji pokładowej. Jeżeli samochód posiada napęd elektryczny, klient chce sprawdzić stan baterii, stan ładowania, zasięg w aplikacji mobilnej — bez potrzeby schodzenia do garażu. Część pojazdów wykorzystuje zamontowane kamery, by dzięki nim móc prowadzić monitoring co się dzieje dookoła pojazdu. Najlepiej dla użytkownika, jeżeli dostęp do tych nagrań również będzie zdalny: w przypadku stłuczki czy zarysowania pojazdu na parkingu, możemy szybko wskazać sprawcę.

**Rynek wypożyczalni** potrzebuje mieć informację o bieżącej lokalizacji, żeby przeciwdziałać kradzieżom. Niektóre wypożyczalnie "aut na minuty" analizują także styl jazdy, aby móc ocenić klienta i odrzucić w ten sposób tych, którzy jeżdżą niebezpiecznie i narażają ich flotę na większe zużycie bądź ryzyko zniszczenia pojazdu.

**Bezpieczeństwo kierowcy**, niezależnie od tego, kim on jest, również polega na systemach informatycznych. Mózg człowieka ma szereg wad strukturalnych i funkcjonalnych, ograniczone możliwości skupienia się i przetwarzania informacji. Kora przedczołowa, odpowiedzialna za planowanie i świadome podejmowanie decyzji, może jednocześnie przetrzymać tylko kilka informacji w pamięci krótkotrwałej. Podczas jazdy w gęstym ruchu kierowca musi monitorować dziesiątki zmiennych jednocześnie — prędkość, odległość od innych pojazdów, znaki drogowe, pieszych i sygnalizację świetlną. Adaptywny tempomat i asystent pasa ruchu przejmują część tych zadań, odciążając ograniczoną pojemność poznawczą mózgu. Sam samochód, ze względu na swoją konstrukcję zawiera tzw. martwe strefy, czyli miejsca dookoła pojazdu, które są niewidoczne dla kierowcy siedzącego wewnątrz pojazdu. W przypadku jazdy z większą prędkością pojawia się także problem nazywany _widzeniem tunelowym_: podczas koncentracji na jednym zadaniu mózg ogranicza skanowanie otoczenia. Systemy monitorowania martwego pola i kamery 360 stopni eliminują te ślepe punkty percepcyjne, które są naturalnym ograniczeniem ludzkiego pola widzenia.


## Intencje cyfryzacji


**Na rynku istnieje wiele grup interesów, którym zależy na cyfryzacji w motoryzacji.** Nie jest ona więc wynikiem spisku, czy złych intencji producentów, lecz naturalną odpowiedzią na realne potrzeby rynku i ograniczenia ludzkiego organizmu. Systemy telematyczne i komputery pokładowe powstały, aby uczynić pojazdy bezpieczniejszymi, bardziej funkcjonalnymi i łatwiejszymi w zarządzaniu dla różnych grup użytkowników. Problem pojawia się wtedy, gdy ta sama infrastruktura, która ma chronić kierowcę przed wypadkiem lub ułatwić mu codzienne użytkowanie, staje się narzędziem inwigilacji lub wektorem ataku. Dane zbierane pierwotnie w celu optymalizacji zużycia paliwa, monitorowania stanu technicznego czy usprawnienia nawigacji, mogą zostać wykorzystane do śledzenia ruchów konkretnych osób, profilowania zachowań lub — w przypadku producentów z krajów autorytarnych, wrogich nam — do celów wywiadowczych.

W teorii cyberbezpieczeństwa wyróżniamy model _zero trust_, w którym nigdy nie zakładamy dobrych intencji, każde żądanie dostępu jest weryfikowane, a zaufanie nie jest przyznawane automatycznie na podstawie lokalizacji czy wcześniejszego uwierzytelnienia. **Model ten stoi w bezpośredniej sprzeczności z architekturą dzisiejszych pojazdów.** Aby aplikacja mobilna mogła wyświetlić poziom naładowania baterii lub włączyć ogrzewanie postojowe, dane z pojazdu muszą być przesłane na zewnętrzne serwery producenta, tworząc stałe połączenie sieciowe. W praktyce oznacza to, że pojazd ciągle transmituje informacje o swojej lokalizacji, stanie technicznym i zachowaniu kierowcy do chmury, gdzie są one dostępne dla producenta, a często także dla flotodawcy, ubezpieczyciela czy firm trzecich zajmujących się analityką danych.

Paradoksalnie więc im lepiej wyposażony jest nasz pojazd, tym większa powierzchnia ataku i tym więcej punktów, w których dane mogą zostać przechwycone. W _architekturze zero trust_ każda transmisja wymagałaby ponownej autoryzacji, szyfrowania end-to-end i minimalnych uprawnień dostępu — wymogi, które są praktycznie niemożliwe do spełnienia w systemach telematycznych, gdzie dane muszą przepływać swobodnie między pojazdem, serwerami producenta i aplikacjami użytkownika, aby zapewnić oczekiwaną funkcjonalność.

## Volkswagen w ogniu

Pod koniec grudnia 2024 roku ujawniono masowy wyciek danych dotyczący około 800 000 właścicieli pojazdów elektrycznych koncernu Volkswagen, w tym marek VW, Audi, Seat i Škoda. Przez kilka miesięcy wrażliwe dane użytkowników były przechowywane w niezabezpieczonej chmurze Amazon przez Cariad, spółkę zależną Volkswagena, odpowiedzialną za oprogramowanie samochodowe. Problem odkryto dzięki anonimowemu informatorowi, który przekazał informacje do organizacji CCC (Chaos Computer Club) i niemieckiego Der Spiegel. Dostęp do danych nie wymagał żadnych technik hakerskich — wystarczyły standardowe, ogólnodostępne narzędzia do odkrycia ukrytych podstron w witrynach Cariad oraz niechronionego zrzutu pamięci aplikacji wewnętrznej zawierającego niezaszyfrowane dane dostępu do chmury Amazon.

W przypadku około 460 000 pojazdów precyzyjne dane GPS były bezpośrednio powiązane z danymi kontaktowymi właścicieli, w tym nazwiskami, adresami e-mail, a niekiedy numerami telefonów i adresami domowymi. Dokładność śledzenia różniła się w zależności od marki — pojazdy VW i Seat były śledzone z dokładnością do kilkudziesięciu centymetrów. Ujawnione dane obejmowały nie tylko współrzędne GPS, ale także poziom naładowania baterii, stan kontroli technicznej oraz dokładne czasy włączania i wyłączania pojazdu. Pozwalało to na utworzenie szczegółowych profili ruchu użytkowników – kiedy i dokąd jeździli, gdzie parkowali i jak długo. Wśród poszkodowanych znaleźli się niemieccy politycy, przedsiębiorcy, a także flotę około 35 elektrycznych radiowozów policji w Hamburgu oraz prawdopodobnie pojazdy pracowników służb wywiadowczych. Dane miały także wymiar międzynarodowy — rejestrowano ruchy pojazdów w regionach kryzysowych, w tym na Ukrainie i w Izraelu, co mogło mieć znaczenie wojskowe.

Der Spiegel podkreślił, że zagraniczne służby wywiadowcze mogły łatwo zidentyfikować pojazdy regularnie parkujące przed budynkami BND (Bundesnachrichtendienst, Federalnej Służby Wywiadowczej) lub na amerykańskiej bazie lotniczej w Ramstein. Po zgłoszeniu przez CCC firma Cariad zamknęła lukę w ciągu kilku godzin, a według obecnej wiedzy dane nie zostały wykorzystane przez nieautoryzowane osoby.

## Kto jest wrogiem?

Fundamentalna różnica między chińskimi a europejskimi producentami samochodów wynika z odmiennych ram prawnych i politycznych, w jakich funkcjonują te przedsiębiorstwa. Ustawa o wywiadzie narodowym Chińskiej Republiki Ludowej z 2017 roku (National Intelligence Law) w artykule 7 nakłada na wszystkie organizacje i obywateli chińskich bezwzględny obowiązek "wspierania, pomagania i współpracy" z chińskimi służbami wywiadowczymi. W praktyce oznacza to, że chińskie firmy mogą być prawnie zobowiązane do przekazywania danych lub udzielania pomocy technicznej chińskim agencjom wywiadowczym na żądanie, nawet jeśli działają poza terytorium Chin i niezależnie od przepisów obowiązujących w kraju, gdzie prowadzą działalność.

Dodatkowo ustawa o bezpieczeństwie cybernetycznym (Cybersecurity Law) oraz ustawa o bezpieczeństwie danych (Data Security Law) przyznają chińskiemu rządowi szerokie uprawnienia do dostępu do danych przechowywanych przez przedsiębiorstwa, w tym prawo do żądania wsparcia technicznego w sprawach dotyczących bezpieczeństwa narodowego lub dochodzeń karnych. W przeciwieństwie do tego europejscy producenci, nawet jeśli zbierają dane w sposób nieodpowiedzialny (jak pokazał wyciek Volkswagena), nie operują w ramach systemu autorytarnego nakazującego im wykorzystanie tych danych dla celów wywiadowczych czy militarnych.

W styczniu 2026 roku polskie Ministerstwo Obrony Narodowej potwierdziło prace nad ograniczeniami dotyczącymi dostępu pojazdów produkcji chińskiej do chronionych obiektów wojskowych. Służba Kontrwywiadu Wojskowego (SKW) wydała już w 2025 roku wytyczne dotyczące ochrony obiektów wojskowych w związku z zagrożeniami wynikającymi z użytkowania urządzeń wyprodukowanych w Chinach. Decyzja ta jest efektem analiz służb wywiadowczych, które wykazały, że czujniki wymienione w pierwszej części artykułu zbierają dane wizualne, dźwiękowe oraz precyzyjne informacje o lokalizacji. Płk Marek Pietrzak, rzecznik Sztabu Generalnego Wojska Polskiego, wskazał, że celem jest ochrona przed ryzykami "związanymi z technologią, dostępem do informacji, liczbą zainstalowanych czujników oraz danymi, które mogą być przekazywane bez naszej wiedzy i poza naszą kontrolą". Regulacje obejmą nie tylko same bazy wojskowe, ale także przyległe parkingi oraz potencjalnie synchronizację telefonów służbowych z systemami zainstalowanymi w takich pojazdach. Generał Wiesław Kukuła, Szef Sztabu Generalnego, ma wkrótce podpisać decyzję wprowadzającą przepisy w życie. Niektóre źródła donoszą, że zakaz obejmuje także pojazdy Tesla ze względu na zaawansowaną telemetrię i gromadzenie danych.

Pojawia się pytanie, dlaczego polskie wojsko nie nałożyło analogicznego zakazu na wszystkie nowoczesne pojazdy, przede wszystkim europejskie. Odpowiedź wydaje się wyjątkowo prosta i leży w ocenie proporcjonalności ryzyka.

## Co możemy zrobić?

Jednym z takich rozwiązań, jest skorzystanie z dobrodziejstwa europejskiego prawa. W ramach regulacji o ochronie danych Unii Europejskiej możesz złożyć trzy typy wniosków do producenta pojazdu:
- prawo do rezygnacji: zaprzestanie sprzedaży lub udostępniania danych osobowych firmom trzecim, w tym brokerom danych i ubezpieczycielom
- prawo do usunięcia danych: trwałe i kompletne usunięcie danych przez producenta, usługodawców i podwykonawców

Po pierwsze, korzystanie z praw wynikających z RODO jest środkiem wyłącznie retrospektywnym: możesz żądać zaprzestania sprzedaży danych lub ich usunięcia dopiero wtedy, gdy zostały już zebrane, przetworzone i potencjalnie zbackupowane oraz skopiowane do wielu systemów analitycznych. Formalne „usunięcie” nie cofa śladów w logach, backupach czy modelach analitycznych, które mogły zostać już wytrenowane na Twoich danych.

Z bardziej praktycznych rad, możemy spróbować wykorzystać możliwości producenta:
- wyłączenie aplikacji mobilnej producenta lub ograniczenie jej uprawnień do śledzenia lokalizacji i udostępniania danych
- zmiana ustawień prywatności przez połączoną aplikację mobilną (np. Toyota i Lexus pozwalają na zarządzanie ustawieniami przez zakładkę "Data Privacy Portal" w aplikacji)
- włączenie trybu prywatności, jeśli pojazd go oferuje

Należy pamiętać, że rezygnacja z udostępniania danych prawie zawsze wiąże się z utratą funkcji jak pomoc drogowa, wykrywanie wypadków, zdalne zamykanie drzwi ze smartfona czy aktualizacje oprogramowania over-the-air, a na koniec sprowadza nas do punktu, gdzie możemy ograniczyć przetwarzanie danych tylko w taki sposób, w jaki producent nam pozwoli.

**Czy to zapewni nam bezpieczeństwo?** Odpowiedź moim zdaniem jest jednoznacznie negatywna: nawet jeśli wyłączymy część usług, moduły komunikacyjne i sterowniki nadal fizycznie znajdują się w pojeździe, a my nie mamy realnej kontroli nad tym, jakie polecenia wykonują i czyje instrukcje traktują jako nadrzędne. Jako użytkownicy jesteśmy w praktyce skazani na zaufanie – nie mamy ani wiedzy z zakresu sieci komputerowych, elektroniki, układów scalonych czy systemów wbudowanych, ani dostępu do dokumentacji, która pozwoliłaby zrozumieć, jakie dane są przetwarzane w danym momencie i w jakim celu. Oprogramowanie pojazdu pozostaje zamknięte, objęte tajemnicą handlową, a więc nawet gdybyśmy chcieli poprosić niezależnych ekspertów o audyt, nie ma czego legalnie analizować. W interesie producentów jest, by kod sterujący elektroniką pozostał niewidoczny – z jednej strony ze względu na konkurencję i ryzyko szpiegostwa przemysłowego, z drugiej dlatego, że pełna transparentność mogłaby ujawnić istnienie backdoorów, nadmiernych uprawnień lub po prostu fatalnych decyzji projektowych.

W praktyce oznacza to, że wymarzony, nowy samochód nie jest w 100% nasz – jesteśmy raczej dzierżawcami dostępu do cyfrowego ekosystemu niż właścicielami maszyny, nad którą mamy pełną autonomię. To klasyczny przykład **cyfrowego feudalizmu**: producent pełni rolę pana feudalnego, który zachowuje władzę nad infrastrukturą, aktualizacjami i kluczami kryptograficznymi, podczas gdy kierowca pozostaje "właścicielem warunkowym", zależnym od łaski dostawcy usług. Dodatkowo oburząjące jest to, że pomimo kosztu zakupu, musimy ponosić koszty subskrypcji: większość marek premium umożliwia pełne korzystanie z funkcjonalności jedynie w przypadku opłacenia dodatkowego abonamentu. Analizując rzeczowo ten przedmiot, nie powinno nas to dziwić: przetwarzanie danych, ich analiza i późniejsze udostępnienie powoduje realne koszty bieżące dla producentów i ktoś musi je pokryć.

Mówimy jednak o zatrzymanym momencie w czasie, a w każdej chwili może zostać zmieniony regulamin, wyłączona funkcja, zablokowana usługa lub „zoptymalizowany” model biznesowy poprzez dodatkowe subskrypcje – często bez realnej możliwości sprzeciwu. Nasz samochód staje się wówczas nie tylko środkiem transportu, ale także terminalem w cudzym systemie, który w skrajnych przypadkach może zostać formalnie i technicznie wykorzystany przeciwko nam: do śledzenia, profilowania, egzekwowania ograniczeń czy nawet zdalnego unieruchomienia pojazdu.
