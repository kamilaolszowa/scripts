let persons = [
    {
        id: 1,
        name: "Jan Kowalski"
    }, {
        id: 2,
        name: "John Doe"
    }, {
        id: 3,
        name: "Jarek Kaczka"
    }
]

let ages = [
    {
        person: 1,
        age: 18
    }, {
        person: 2,
        age: 24
    }, {
        person: 3,
        age: 666
    }
]

let locations = [
    {
        person: 1,
        country: "Poland"
    }, {
        person: 3,
        country: "Poland"
    }, {
        person: 1,
        country: "USA"
    }
]

function countAverageAge(locations, ages) {
    let locationsArr = locations.filter((location) => location.country === "Poland");
    let agesArr = [];
    locationsArr.forEach((person) => {
        agesArr.push(ages.find((age) => age.person === person.person)?.age);
    })
    sumedAges = 0;
    for (age of agesArr) {
        sumedAges += age;
    }
    return sumedAges / agesArr.length;
    // return of(sumedAges / agesArr.length); RxJS version
}

console.log(countAverageAge(locations, ages));