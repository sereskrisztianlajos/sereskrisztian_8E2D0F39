# Fitnesz és Edzés Weboldal – Dokumentáció

## A weboldal témája
A weboldal egy fitnesz témájú oldal, amely az edzéstervek bemutatását és egy
okos kalóriaszámító segítségével az edzés során elégetett kalória
meghatározását teszi lehetővé.  
A cél a felhasználók motiválása és tájékoztatása az egészséges életmódról.

## Felhasznált technológiák
- HTML – a weboldal szerkezete
- CSS – megjelenés és reszponzív kinézet
- JavaScript – logika, számítások és interaktív funkciók

## Az oldal felépítése
A weboldal három különálló oldalból áll:

### 1. Főoldal
- A weboldal céljának bemutatása
- Navigáció az egyes oldalak között

### 2. Edzéstervek oldal
- Több különböző edzésterv megjelenítése
- Edzések tömbben történő tárolása
- Edzések listázása ciklus segítségével
- A legintenzívebb edzés meghatározása maximum kiválasztás programozási tétellel

### 3. Okos kalóriaszámító oldal
- Felhasználói adatok bekérése:
  - nem
  - testsúly
  - edzés időtartama
  - edzés típusa
  - intenzitás
- MET alapú kalóriaszámítás
- Az edzés nehézségének visszajelzése elágazás segítségével

## JavaScript függvények rövid leírása
- `edzesekMegjelenitese()`  
  Az edzéstervek megjelenítése ciklus segítségével.

- `legerosebbEdzes()`  
  A legnagyobb kalóriaértékű edzés kiválasztása (maximum kiválasztás).

- `metErtek(tipus)`  
  Az edzés típusához tartozó MET érték meghatározása.

- `kaloriaSzamol(suly, ido, met, intenzitas, nem)`  
  Paraméteres függvény, amely kiszámítja az elégetett kalóriát
  aritmetikai műveletek felhasználásával.

- `kaloriaSzamitas()`  
  Az adatok ellenőrzése, elágazások és logikai műveletek alkalmazása,
  valamint az eredmény megjelenítése.

## Alkalmazott programozási elemek
- Tömbök az edzéstervek tárolására
- Ciklusok az adatok feldolgozására
- Aritmetikai műveletek a számításokhoz
- Logikai műveletek és elágazások
- Paraméteres függvények
- Programozási tétel: maximum kiválasztás

## Összegzés
A projekt egy teljes, többoldalas weboldal, amely megfelel a feladatban
megadott összes követelménynek. A fejlesztett funkciók és az okos
kalóriaszámító egy összetettebb, mégis könnyen kezelhető megoldást biztosítanak.