const fs = require("fs");

fs.readFile("./firstname.txt", "utf-8", (err, data1) => {
  // your code here
  fs.readFile("./lastname.txt", "utf-8", (err, data2) => {
    fs.readFile("./age.txt", "utf-8", (err, data3) => {
      fs.readFile("./hobbies.txt", "utf-8", (err, data4) => {
        let arrayHobbies = data4.split(",")
        console.log(`${data1} ${data2} is ${data3} years old and his hoobies are ${arrayHobbies[0].replace("[","")} and ${arrayHobbies[1].replace("]","")}`)
      })
    })
  })
})