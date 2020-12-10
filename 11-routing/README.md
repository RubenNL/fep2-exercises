# 11 - Routing

De to do applicatie waar we in eerdere lessen aan hebben gewerkt is herschreven. De applicatie bestaat nu uit twee views, één waar we items aan een to do list kunnen toevoegen, en één waar we de statistieken van de to do items kunnen bekijken.

We gaan een router oplossing, [Vaadin Router](https://www.npmjs.com/package/@vaadin/router), toevoegen om tussen deze twee schermen te kunnen navigeren:

1. Installeer Vaadin Router en importeer het in `index.html`.
2. Configureer Vaading Router met `app` als outlet.
3. Voeg twee routes toe voor `home` en `stats`.