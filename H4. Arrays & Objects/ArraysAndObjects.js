// TASK 1: Dish in a menu
let dishes = [
    {
        dishID: 1, 
        dishName: "Chicken Adobo", 
        dishPrice:30,
        ingredients:["Soy sauce", "Vinegar", "Pepper", "Chicken"]
    },
    {
        dishID: 2, 
        dishName: "Pork Sinigang", 
        dishPrice:45,
        ingredients:["Kangkong", "Tomatoes", "Green Chili", "Pork"]
    },
    {
        dishID: 3, 
        dishName: "Pork Nilaga", 
        dishPrice:45,
        ingredients:["Potato", "Pepper", "Pechay","Pork"]
    },
]


// TASK 2: A restaurant menu
let restaurantMenu = {
    restaurantName: "JV's Restaurant",
    dishes: dishes,
    displayRestaurantName: function(){
        console.log(`${this.restaurantName}\n`)
    },
    displayMenu: function(){
        for(menuObj of this.dishes){
            console.log(`${menuObj["dishName"]}, P${menuObj["dishPrice"]}\nContains ${menuObj["ingredients"]}\n`)
        }
    }
}

restaurantMenu.displayRestaurantName()
restaurantMenu.displayMenu()