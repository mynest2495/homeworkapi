// Your JavaScript code goes here

document.addEventListener("DOMContentLoaded", function() {
    // Code inside this block will run after the DOM is fully loaded
    console.log("DOM is ready!");

    // Your other JavaScript code...
});

 // Function to run from A to Z
 function runFromAToZ() {
    var outputElement = document.getElementById("output");
    var currentCharCode = 65; // ASCII code for 'A'

    // Set up an interval to run every 500 milliseconds
    var intervalId = setInterval(function() {
        // Convert the ASCII code to a letter
        var letter = String.fromCharCode(currentCharCode);

        // Display the letter
        outputElement.innerHTML = letter;

        // Increment the ASCII code
        currentCharCode++;

        // Check if we've reached 'Z'
        if (currentCharCode > 90) { // ASCII code for 'Z'
            // Reset to 'A' when reaching 'Z'
            currentCharCode = 65;
        }
    }, 500);
}

// Call the function when the page loads
runFromAToZ();

function rollDice() {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    return randomNumber;
  }

  function rollAndDisplayDice() {
    const result = rollDice();
    document.getElementById("diceResult").innerHTML = `The result: ${result}`;
  }


  function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function changeChar() {
    document.getElementById("demo2").innerHTML = "Hello CS";
  }

  function square() {
    var x = document.getElementById("x").value;
    var y = document.getElementById("y").value;

    document.getElementById("answer").innerText = x * y;
  }

function calculateGrade() {
    let point = document.getElementById("point").value;

    if (point >= 80) document.getElementById("overall").innerText = "A";
    else if (point >= 70 && point < 80)
      document.getElementById("overall").innerText = "B";
    else if (point >= 60 && point < 70)
      document.getElementById("overall").innerText = "C";
    else if (point >= 50 && point < 60)
      document.getElementById("overall").innerText = "D";
    else document.getElementById("overall").innerText = "F";
  }

function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (username == "admin" && password == "admin") {
      alert("Login สำเร็จ");
    } else {
      alert("Username หรือ Password ผิดพลาด");
    }
  }

// chart 
const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: 'My color favorite',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
            "rgba(255,0,0,0.5)",
            "rgba(0,0,255,0.5)",
            "rgba(255,255,0,0.5)",
            "rgba(0,255,0,0.5)",
            "rgba(255,0,255,0.5)",
            "rgba(255,165,0,0.5)",
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    fetch(
      "https://raw.githubusercontent.com/samayo/country-json/master/src/country-by-yearly-average-temperature.json"
    )
      .then((response) => response.json())
      .then((data) => {
        const countries = data.map((entry) => entry.country);
        const temperatures = data.map((entry) => entry.temperature);

        const ctx = document.getElementById("myChart2").getContext("2d");
        new Chart(ctx, {
          type: "line",
          data: {
            labels: countries,
            datasets: [
              {
                label: "Temperature (°C) In World",
                data: temperatures,
                backgroundColor: "rgba(255, 0, 0, 1)",
                borderColor: "rgba(0, 255, 0, 1)",
                borderWidth: 2,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });
      })
      .catch((error) => console.error("Error fetching data:", error));
  });


   
  function getRandomImage() {
  
    const randomNumber = Math.floor(Math.random() * 100); // สุ่มตัวเลขเพื่อใช้เป็นค่าสำหรับคำค้นหาแบบสุ่ม
    const randomImageUrl = `https://source.unsplash.com/300x300/?random&${randomNumber}`; // Unsplash API ที่รับพารามิเตอร์สำหรับการกำหนดความกว้างและความสูงของภาพ

    document.getElementById("randomImage").src = randomImageUrl;
  }




