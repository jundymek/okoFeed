# okoFEED

Zadanie rekrutacyjne polegające na napisaniu aplikacji Reactowej wczytującej dane z api i wyświetlającej feed z wiadomościami. Dane mają się ładować przy scrollowaniu aż do wyświetlenia wszystkich pozycji.

## Technologie i biblioteki użyte w projekcie 🚀

- React
- TailwindCss
- styled-components
- json-server
- biblioteka react-query

### Instrukcja uruchomienia

1. Klonujemy repozytorium poleceniem

```
git clone https://github.com/jundymek/okoFeed.git
```

2. Wchodzimy do katologu z repozytorium i instalujemy niezbędne zależności

```
npm install lub yarn
```

3. Uruchamiamy `json-server`, który będzie naszym API

```
json-server --watch db.json
```

4. Na innym porcie uruchamiamy aplikację

```
npm start lub yarn start
```
