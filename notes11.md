# HIGHER ORDER COMPONENTS

is a JS function that takes a component as input, tweeks/ enhances it and returns that component back

//Writing HIgher Order Component
// will take restaurant Card as input and will returned enhanced version of it

adding something top of it but not change or modify RestaurantCard component


All React Applications has 2 layers - 1 layer is of data, other is UI Layer - UI Layer is powered by Data layer
UI Layer(static- JSX) (Virtual DOM representations)
Data Layer(Dynamic)- consists of your states, props (JS curly braces - the js code you write)

Data layer - must know how to manage it efficiently

c.card?.card?.["@type"] - right (means exactly same as below)
if @ there can't write .card?.card?.@type - wrong 

ACCORDIAN - feature used to collapse or exand a section (ex- recommended food items , etc section)- has 2 things Accordian header & accordian body

- has header & body(collapsable)

so the accordian we have built in that - each category maintain it's own state - so when click on that particular accordian then only it collapses or shows, but when open other category the previous opened one doesn't collapse - as each maintain their own state

# LIFTING UP THE STATE
BUT WE WANT TO Build an accordian where when we click one category - the opened one collapses, i.e. at 1 point only 1 category is opened

done through lifting up the state
i.e power to show and collapse power given to the parent i.e. here to restaurant menu Not restaurantCategory








