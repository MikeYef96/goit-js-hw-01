let country = prompt("Enter country for delivery");
let price;

if (country !== null) {
    country = country.toLowerCase();
}
else if (country === null){
    console.log("Cancelled by user");
    alert("Cancelled by user");
}

switch (country) {
    case "china":
        price = 100;
        break;
    case "chili":
        price = 250;
        break;
    case "australia":
        price = 170;
        break;
    case "india":
        price = 80;
        break;
    case "jamaica":
        price = 120;
        break;
    
    default:
        price = -1;
}

if (price !== -1) {
    country = country.charAt(0).toUpperCase() + country.split(1);
    alert(`Delivery to ${country} will cost ${price} credits`);
    console.log(`Delivery to ${country} will cost ${price} credits`);

//     country = country.charAt(0).toUpperCase() + country.slice(1);
//     console.log(`Delivery to ${country} will cost ${price} credits`);
}

else if(price === -1 && country !== null){
    alert("In your country delivery not available");
}

