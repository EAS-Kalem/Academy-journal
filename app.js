//carsData = [{ 
//            "img" : "images/2004_Porsche_911_Carrera_type_997.jpeg",
//            "manufacturer" : "Porsche",
//            "model" : "911",
//            "price" : 135000,
//        },{ 
//            "img" : "images/250px-Nissan_GT-R.jpeg",
//            "manufacturer" : "Nissan",
//            "model" : "GT-R",
//            "price" : 80000,
//        },{ 
//            "img" : "images/250px-BMW_M3_E92.jpeg",
//            "manufacturer" : "BMW",
//            "model" : "M3",
//            "price" : 60500,
//        },{ 
//            "img" : "images/250px-Audi_S5.jpeg",
//            "manufacturer" : "Audi",
//            "model" : "S5",
//            "price" : 53000,
//        },{ 
//            "img" : "images/250px-2007_Audi_TT_Coupe.jpeg",
//            "manufacturer" : "Audi",
//            "model" : "TT",
//            "price" : 40000,
//        },{ 
//            "img" : "images/bmw-i8-uk-road-test-2014-008.jpeg",
//            "manufacturer" : "BMW",
//            "model" : "I8",
//            "price" : 100000,
//        },{ 
//            "img" : "images/992 Porsche 911 GT3 Touring review-7.jpeg",
//            "manufacturer" : "Porsche",
//            "model" : "GT3S",
//            "price" : 120000,
//        },{ 
//            "img" : "images/nissan_silva.jpeg",
//            "manufacturer" : "Nissan",
//            "model" : "Silvia S15",
//            "price" : 30000,
//}];

let carsData = [
    {"reg":"YH64ZXB", "make":"BMW", "model":"435d","day":"monday"},
    {"reg":"AT10 HAY", "make":"Audi", "model":"TT","day":"friday"},
    {"reg":"YH64ZXB", "make":"BMW", "model":"435d","day":"monday"},
    {"reg":"AW11LMS", "make":"Volkswagen", "model":"Golf R","day":"monday"},
    {"reg":"Y329SYV", "make":"Peugeot", "model":"406","day":"thursday"},
    {"reg":"AT10 HAY", "make":"Audi", "model":"TT","day":"wednesday"},
    {"reg":"AW11LMS", "make":"Volkswagen", "model":"Golf R","day":"monday"},
    {"reg":"Y329SYV", "make":"Peugeot", "model":"406","day":"monday"},
    {"reg":"YH64ZXB", "make":"BMW", "model":"435d","day":"thursday"},
    {"reg":"AT10 HAY", "make":"Audi", "model":"TT","day":"wednesday"},
    {"reg":"YH64ZXB", "make":"BMW", "model":"435d","day":"thursday"},
    {"reg":"AW11LMS", "make":"Volkswagen", "model":"Golf R","day":"monday"},
    {"reg":"Y329SYV", "make":"Peugeot", "model":"406","day":"thursday"},
    {"reg":"YH64ZXB", "make":"BMW", "model":"435d","day":"wednesday"},
    {"reg":"AT10 HAY", "make":"Audi", "model":"TT","day":"saturday"},
    {"reg":"YH64ZXB", "make":"BMW", "model":"435d","day":"saturday"},
    {"reg":"AW11LMS", "make":"Volkswagen", "model":"Golf R","day":"monday"},
    {"reg":"Y329SYV", "make":"Peugeot", "model":"406","day":"wednesday"},
    {"reg":"YH64ZXB", "make":"BMW", "model":"435d","day":"saturday"},
    {"reg":"AT10 HAY", "make":"Audi", "model":"TT","day":"sunday"},
    {"reg":"YH64ZXB", "make":"BMW", "model":"435d","day":"wednesday"},
    {"reg":"AW11LMS", "make":"Volkswagen", "model":"Golf R","day":"monday"},
    {"reg":"Y329SYV", "make":"Peugeot", "model":"406","day":"monday"}
]

//const carList = document.getElementById('carList');
//const array = document.getElementById('array');
//const cars = document.getElementById('option1');
const result = {
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: [],
}
function createArray(){
    for(var i = 0; i < carsData.length; i++){
        console.log(carsData[i].day)

        if (carsData[i].day === "monday" )
        {(result.monday.push(carsData[i]))}
        else if(carsData[i].day === "tuesday" )
        {(result.tuesday.push(carsData[i]))}
        else if(carsData[i].day === "wednesday" )
        {(result.wednesday.push(carsData[i]))}
        else if(carsData[i].day === "thursday" )
        {(result.thursday.push(carsData[i]))}
        else if(carsData[i].day === "friday" )
        {(result.friday.push(carsData[i]))}
        else if(carsData[i].day === "saturday" )
        {(result.saturday.push(carsData[i]))}
        else if(carsData[i].day === "sunday" )
        {(result.sunday.push(carsData[i]))}
};
};


function listItem() {    
    for(var i = 0; i < carsData.length; i++){
         if(carsData[i].day === cars.value){
            //create elements
            let iDiv = document.createElement('div')
            let manufacturer = document.createElement('h2')
            let p = document.createElement('p')
            let pp = document.createElement('p')
            let img = document.createElement('img')

            //set values
            pp.innerHTML = ("£" + carsData[i].price)
            img.src = (carsData[i].img)
            manufacturer.innerHTML = (carsData[i].manufacturer + " " + carsData[i].model)
            p.innerHTML = (carsData[i].model)
            
            //append
            iDiv.appendChild(manufacturer);
            iDiv.appendChild(p);
            iDiv.appendChild(pp);
            iDiv.appendChild(img);
            carList.appendChild(iDiv)

        } else if(cars.value === "0") {
            //create elements
            let iDiv = document.createElement('div')
            let manufacturer = document.createElement('h2')
            let p = document.createElement('p')
            let pp = document.createElement('p')
            let img = document.createElement('img')

            //set values
            pp.innerHTML = ("£" + carsData[i].price)
            img.src = (carsData[i].img)
            manufacturer.innerHTML = (carsData[i].manufacturer + " " + carsData[i].model)


            //append

            iDiv.appendChild(manufacturer);
            
            iDiv.appendChild(pp)
            iDiv.appendChild(img);
            carList.appendChild(iDiv)
            }
    }

};



// carsData.forEach(car => {
//     for (let key in car) {
//         let p = document.createElement('p')
//         p.innerHTML = `${key}: ${car[key]}`
//         carList.appendChild(p);
//     }
// });
