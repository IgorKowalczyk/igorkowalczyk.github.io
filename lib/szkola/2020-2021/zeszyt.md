# Tworzenie stron i aplikacji internetowych

### Lekcja
> #### Temat: Bezpieczeństwo i higiena pracy na stanowisku komputerowym

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

Wszystko co wiąże się z transmisją danych w sieci komputerowej wymaga wstępnego stworzenia schematów i wypracowania standardów komunikacji oraz przesyłania prezentacji danych w sieci. Jednymi z pierwszych standardów porządkujących ruch w sieci są modele komunikacji sieciowej OSI/ISO oraz TCP/IP dzięki tym model można np. otwierać stronę internetową w różnych systemach operacyjnych i na dowolnym urządzeniu.

Międzynarodowa organizacja komunikacji ISO opracowała model łączenia tkz. systemów otwartych OSI złożony z 7 warstw. Każda warstwa opisuje oddzielny etap komunikacji między 2 komputerami w sieci. Warstwy wymieniają się jednostkami danych i tworzą narastające zbiory zwane segmentami, ramkami lub pakietami danych. Każda z poszczególnych warstw definiuje również konkretne zadania związane z komunikacją sieciową realizowane przez protokoły i urządzenia sieciowe pracujące na poziomie danej warstwy.

| Model ISO/OSI | Model TCP/IP | Protokoły sieciowe
| :- | :- | :- |
| Warstwa Aplikacji | Warstwa Aplikacji | HTTP, FTP, DNS, STMP, POP3 |
| Warstwa Prezentacji | Warstwa Transportu | TCP, UDP |
| Warstwa Sesji | Warstwa Internetu | IP, ICMP, IGMP, RIP, OSPF, BGP |
| Warstwa Transportowa | Warstwa Interfejsu sieciowego | |
| Warstwa Sieciowa | | |
| Warstwa Łącza Danych | | |
| Warstwa Fizyczna | | |

Dane wytworzone przez użytkownika utrzymują w warstwie użytkownika odpowiedni format, następnie są przesyłane do warstwy transportu następnie otrzymują odpowiedni port zezwalający na połączenie sesji. Np. Dla strony internetowej będzie to port '80'. Dane zostają podzielone na segmenty i wysłane do następnej warstwy. W warstwie internetu są tworzone pakiety do których danych nadaje się adresy komputera i odbiorcy - odpowiada za to protokół IP. Tak przygotowana informacja jest przekazywana do warstwy interfejsu sieciowego. W tej warstwie dane są dzielone na ramki i przygotowywane do transportu. Określa się fizyczny adres karty sieciowej (MAC) oraz koduje się dane do postaci Bitowej (W postaci '0' i '1') Cały opisany proces enkapsulacją. Na komputerze docelowym informacja jest rozkodowywana i przechodzi poszczególne warstwy w odwrotnej kolejności. Taki proces nazywa się dekapsulacją.

### Lekcja
> #### Protokoły komunikacji sieciowej

Protokół komunikacji sieciowej to zbiór reguł i procedur które sa stosowane w ramach określonego systemu sieciowego przez urządzenia sieciowe i aplikacje. - 'http' to podstawowy protokół wykorzystywany do transportu i prezentacji danych w postaci strony internetowej. Obecnie protokół pozwala zarówno na przesyłanie stron w postaci plików jak i umożliwia strumieniowa transmisje danych. Aplikacja obsługująca ten protokół jest każda przeglądarka internetowa.
- 'https' to protokół umożliwiający przesyłanie szyfrowanych plików stron internetowych. Do szyfrowania używa się protokołu 'SSL'.
- 'FTP' to protokół umożliwiający przesyłanie plików pozwala, na pobieranie i wgrywanie plików między użytkownikiem a serwerem oraz na publikowanie plików stron internetowych.
- Protokół oferujący szyfrowanie danych to 'SFTP'
- 'DNS' To protokół pozwalający na nadawanie użytkownikom internetu alfanumerycznych adresów logicznych. Protokół tłumaczy je na odpowiadający im adres IP. Dzięki temu użytkownik łatwo zapamięta adres strony nie przejmując się zapisem adresu IP pod którym strona się znajduje.

Nowoczesne technologie oparte na sieci komputerowej które łączą różne urządzenia po to aby swobodnie gromadzić, wymieniać i przetwarzać między sobą dane. Tworzą zintegrowane środowiska zwane "IoT" (Internet of Things). Podstawowym celem IoT jest stworzenie "inteligentnych" przestrzeni takich jak domy, miasta, systemy alarmowe i ostrzegawcze. Chmura obliczeniowa to zasób sieciowy np. przestrzeń na dysku która może zostać udostępniona użytkownikom w celu wykorzystania.

#### Technologie webowe :heart:

'.html' (Hyper Text Markup Language) - to język wykorzystywany do tworzenia dokumentów tekstowych interpretowanych przez przeglądarkę.' Obecnie wszystkie technologie webowe :heart: dzieli się na obszary działania:
- Front-End :heart: - Technologie wykorzystujące kod "jawny" wykonywany po stronie przeglądarki np. '.html', '.css' i '.js'..
- Back-End :worry: - Technologie wykorzystujące kod "ukryty" wykonywany po stronie serwera.


### Lekcja
> #### Struktura dokumentów `HTML`
 
 ```html
<!DOCTYPE html>
<html lang="pl">
<head>
...
</head>
<body>
...
</body>
</html>
```
### Lekcja
> #### Temat: Podstawowe znaczniki i atrybuty w języku `HTML` - Formatowanie tekstu

#### HTML
```html
<p class="b">Pogrubiony</p>
<p class="i">Pochylony</p> 
<p class="u">Podkreślony</p>
<p class="s">Przekreślony</p>
<p>Index <sub>Dolny</sub></p>
<p>Index <sup>Górny</sup></p>
 ```
 #### CSS
 ```css
 /* Pogrubienie */
.b {
font-weight: bold;
}

/* Pochylenie */
.i {
font-style: italic;
}

/* Podkreślenie */
.u {
text-decoration: underline;
}

/* Przekreślenie */
.s {
text-decoration: line-through;
}
 ```
#### HTML
 ```html
  <div class="div"> 
   <ol class="i div"> 
    <li>Punkt 1</li> 
    <ul class="lower-latin"> 
     <li>Punkt 1.1</li> 
     <li>Punkt 1.2</li> 
     <li>Punkt 1.3</li> 
     <ol class="lower-roman"> 
      <li>Punkt 1.3.1</li> 
      <li>Punkt 1.3.2</li> 
     </ol> 
    </ul> 
    <li>Punkt 2</li> 
    <li>Punkt 3</li> 
    <ol class="lower-latin"> 
     <li>Punkt 3.1</li> 
     <ol class="lower-roman"> 
      <li>Punkt 3.1</li> 
      <ol class="decimal"> 
       <li>Punkt 3.1</li> 
      </ol> 
     </ol> 
    </ol> 
   </ol> 
  </div> 
  <div class="def"> 
   <p>Testowa definicja</p> 
   <p class="opi">Opis definicji</p> 
  </div> 
  <ol> 
   <li class="upper-roman">Logika</li> 
   <ul> 
    <li class="circle">Teoria Modeli</li> 
   </ul> 
   <ul> 
    <li class="circle">Teoria Dowodu</li> 
   </ul> 
   <li class="upper-roman">Algebra</li> 
   <ul> 
    <li class="square">Teoria Liczb</li> 
   </ul> 
   <div class="def"> 
    <p>Co to jest liczba pierwsza?</p> 
    <p class="opi">... Definicja ...</p> 
   </div> 
   <li class="square">Teoria ciał i wielomianów</li> 
   <ul> 
    <li class="square">Teria Grup</li> 
   </ul> 
   <li class="upper-roman">Analiza</li> 
   <ul> 
    <li class="lower-roman">Teoria Funkcji rzeczywistych</li> 
    <li class="lower-roman">Teoria miary i całkowania</li> 
    <li class="lower-roman">ównania różniczkowe zwyczajne</li> 
    <li class="lower-roman">Analiza funkcjonalna</li> 
   </ul> 
   <li class="upper-roman">Geometria</li> 
   <li class="square">Geometria płaszczyzny i przestrzeni</li> 
   <ul> 
    <li class="upper-roman">Statystyka</li>
   </ul> 
  </ol>  
```

### Lekcja
> #### Akapity i nagłówki tekstu
 
#### HTML
```html
<p>Jest to poprawnie sformatowany <span class="b">bardzo ważny tekst</span></p>
<p>Jest to poprawnie sformatowany <span class="i">wyróżniony tekst</span></p>
<p>Jest to poprawnie sformatowany <sub>Index Dolny</sub></p>
<p>Jest to poprawnie sformatowany <sup>Index Górny</sup></p>
<p>Jest to poprawnie sformatowany <span class="s">tekst przekreślony</span></p>
<p>Jest to poprawnie sformatowana <span class="i">część definicji</span></p>
<p>Jest to poprawnie sformatowany <span class="b">tekst pogrubiony</span></p>
<p>Jest to poprawnie sformatowany <span class="s">tekst podkreślony</span></p>
<p>Jest to poprawnie sformatowany <span class="i">tekst pochylony</span></p>
```

### Lekcja
> #### Odsyłacze

#### HTML
```html
<a href="https://igorkowalczyk.github.io">Test Link</a>
<a href="mailto:this.email@does.not.exsist">Test Mail</a>
<a href="C:\path\to\file">Path To File</a>
```

#### MarkDown
```
[Test Link](https://igorkowalczyk.github.io)
[Test Mail](mailto:this.email@does.not.exsist)
[Path To File](C:\path\to\file)
```

### Kotwice Tekstu
<a href="#end" id="top">Koniec</a><br>

<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, [...]</p>

...

<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, [...]</p>
<a href="#top" id="end">Początek</a>
