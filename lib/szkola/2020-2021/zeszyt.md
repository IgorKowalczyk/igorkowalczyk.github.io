### Zagrożenia w zawodzie programisty

| Zagrożenie | Sposoby Zabezpieczenia |
| :- | :- |
| 1. Błędy w kodzie | Nauka |
| 2. Prąd Elektryczny | np. zabezpieczanie kabli |
| 3. Stres | Trzymanie się terminów i oddawanie projektów w wyznaczonym czasie |
| 4. Pogorszenie lub utrata wzroku | Siedzenie w odpowiedniej odległości od monitora |
| 5. Potknięcie się | Patrzenie pod nogi |
| 6. Uderzenie o wyposażenie biurka | Uważanie aby o nic nie uderzyć |
| 7. Pożar | Posiadanie gaśnicy w pobliżu |


### Lekcja 
> #### Temat: Podstawy komunikacji w sieci

Wszystko co wiąże się z transmisją danych w siecii komputerowej wymaga wstępnego stworzenia schematów i wypracowania standardów komunikacjii oraz przesyłania oraz przesyłania prezentacjii danych w sieci. Jednymi z pierwszych standardów porządkujących ruch w sieci są modele komunikacji sieciowej OSI/ISO oraz TCP/IP dzięki tym model można np. otwierać stronę internetową w różnych systemach operacyjnych i na dowolnym urządzeniu. 

Międzynarodowa organizacja normalizacyjna ISO opracowała model łączenia tkz. systemów otwartych OSI złożony z 7 warstw. Każda warstwa opisuje oddzielny etap komunikacjii między 2 komputeramii w sieci. Warstywy wymieniają się jednostkami danych i tworzą narastające zbiory zwane segmętami, ramkami lub pakietami danych. Każda z poszczególnych warstw definiuje również konkretne zadania związane z komunikacją sieciową realizowane przez protokoły i urządzenia sieciowe pracujące na poziomie danej warstwy.

| Model ISO/OSI | Model TCP/IP | Protokoły sieciowe
| :- | :- | :- |
| Warstwa Aplikacji | Warstwa Aplikacji | HTTP, FTP, DNS, STMP, POP3 |
| Warstwa Prezentacji | Warstwa Transportu  | TCP, UDP |
| Warstwa Sesji | Warstwa Internetu  | IP, ICMP, IGMP, RIP, OSPF, BGP |
| Warstwa Transportowa | Warstwa Interfejsu sieciowego | |
| Warstwa Sieciowa | | |
| Warstwa Łącza Danych | | |
| Warstwa Fizyczna | | |

Dane wytworzone przez użytkownika utrzymoją w warstwie użytkownika odpowiedni format, następnie są przesyłane do warstwy transportu następnie otrzymóją odpowiedni port zezwalający na połączenie sesji. Np. Dla strony internetowej będzie to port `80`. Dane zostają podzielone na segmenty i wysłane do następnej warstwy. W warstwie internetu są tworzone pakiety do których danych nadaje się adresy komputera i odbiorcy - odpowiada za to protokół IP. Tak przygotowana informacja jest przekazywana do warstwy interfejsu sieciowego. W tej warstwie dane są dzielone na ramki i przygotowywane do transportu. Określa się fizyczny adres karty sieciowej (MAC) oraz koduje się dane do postaci Bitowej (W postaci `0` i `1`) Cały opisany proces enkapsulacją. Na komputerze docelowym informacja jest rozkodowywana i przechodzi poszczególne warstwy w odwrotnej kolejności. Taki proces nazywa się dekapsulacją.

### Lekcja
> #### Protokoły komunikacjii sieciowej

Protokół komunikacji sieciowej to zbiór regół i procedur które sa stozowane w ramach okreslonego systemu sieciowego przez urzadzenia sieciowe i aplikacje. - `http` to podstawowy protokół wykozystywany do transportu i prezentacji danych w postaci strony internetowej. Obecnie protokół pozwala zarówno na przesyłanie stron w postaci plików jak i umożliwia strumieniowa transmisje danych. Aplikacja obsłógującą ten protokól jest każda przeglądarka internetowa.
- `https` to protokół umożliwiający przesyłanie szyfrowanych plików stron internetowych. Do szyfrowania używa się protokołu `SSL`.
- `FTP` to protokół umożliwiający przesyłanie plików pozwala, na pobieranie i wgrywanie plików między użytkownikiem a serwerem oraz na publikowanie plików stron internetowych.
- Protokół oferujący szyfrowanie danych to `SFTP`
- `DNS` To protokół pozwalający na nadawanie użytkownikom internetu alfanumerycznych adresów logicznych. Protokół tłumaczy je na odpowiadajacy im adres IP. Dzięki temu użytkownik łatwo zapamięta adres strony nie przejmując się zapisem adresu IP pod którym strona się znajduje.

Nowoczesne technologie oparte na sieci komputerowej które łączą różne urządzenia po to aby swobodnie gromadzić, wymieniać i przetwarzać między sobą dane. Tworzą zintegrowane środowiska zwane "IoT" (Internet of Things). Podstawowym celem IoT jest stworzenie "inteligentnych" przestrzeni takich jak domy, miasta, systemy alarmowe i ostrzegawcze. Chmura obliczeniowa to zasób sieciowy np. przestrzeń na dysku która może zostać udostępniona użytkownikom w celu wykorzystania.

#### Technologie webowe :heart:

`.html` (Hyper Text Markup Language) - to język wykorzystywany do tworzenia dokumentów tekstowych interpretowanych przez przeglądarkę.` Obecnie wszystkie technologie webowe :heart: dzieli się na obszary działania:
- Front-End :heart: - Technologie wykorzystujące kod "jawny" wykonywany po stronie przeglądarki np. `.html`, `.css` i `.js`..
- - Back-End :worry: - Technologie wykorzystujące kod "ukryty" wykonywany po stronie serwera.
