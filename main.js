// Write your JavaScript here


function change() {
    const owe = document.getElementById("amount-due").value;
    const pay = document.getElementById("amount-received").value;
    let cents = (pay - owe).toFixed(2) * 100;
    console.log('Owe: ' + owe);
    console.log('Pay: ' + pay);
    console.log('cents: ' + cents);

    
    var dollars = 0;
    var quarters = 0;
    var dimes = 0;
    var nickels = 0;
    var pennies = 0;

    dollars = Math.floor(cents / 100);
    cents = cents % 100;
    document.getElementById('dollars-output').innerHTML = dollars;
    // console.log('dollars: ' + dollars);
                      
    quarters = Math.floor(cents / 25);
    cents = cents % 25;
    document.getElementById('quarters-output').innerHTML = quarters;
    // console.log('quarters: ' + quarters);

    dimes = Math.floor(cents / 10);
    cents = cents % 10;
    document.getElementById('dimes-output').innerHTML = dimes;
    // console.log('dimes: ' + dimes);
   
    nickels = Math.floor(cents / 5);
    cents = cents % 5;
    document.getElementById('nickels-output').innerHTML = nickels;
    // console.log('nickels: ' + nickels);
    
    pennies = Math.round(cents / 1);
    cents = cents % 1;
    document.getElementById('pennies-output').innerHTML = pennies;
    // console.log('pennies: ' + pennies);

    };
        function Change(){
        }
    