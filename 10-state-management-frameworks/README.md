# 10 - State Management met Redux

In les 09 hebben we een eigen state management oplossing geschreven, naar het model van Redux. We gaan deze oplossing omschrijven met utilities uit de [ReduxJS Toolkit](https://redux-toolkit.js.org/).

Lees de documentatie van elke utility goed door.

## Exercise 01

We gaan verder waar we gebleven waren in les 09. Gebruik de `createReducer` utility van ReduxJS Toolkit om je reducer naar twee aparte reducers te herschrijven. Combineer deze reducers met de `combineReducer` utility.

## Exercise 02

Verplaats de `counter` en `menu` reducers elk naar een eigen bestand. Plaats ook de bijbehorende _action creator_ in hetzelfde bestand.


## Exercise 03

Gebruik de `createSlice` utility van ReduxJS Toolkit om de _action creators_ en _action types_ automatisch te genereren.

Merk op dat je na het afronden van de exercises - dankzij de ReduxJS Toolkit - veel minder code hoeft te schrijven om hetzelfde doel te bereiken.
