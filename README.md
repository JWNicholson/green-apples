This app uses the Omdb API.

``How it's supposed to work:```
######When the user types a title in the searchbar, the search button changes query state to what is in the search input.
######Then Redux uses movieSlice to make the returned data available to other components.

######MovieList is supposed to grab that slice and map through each movie object, rendering it on the board.
######A More Info Button is supposed to map through each movie object.
######A save button uses state to build a favorites list.
######The favorites list would then be loaded into localstorage.

######Currently, this app does not work. There is a bug between the search field and useDispatch. 
