// Create an array of objects which hold the denominations and their values
var denom = [{
        name: 'ONE HUNDRED',
        val: 100.00
    },
    {
        name: 'TWENTY',
        val: 20.00
    },
    {
        name: 'TEN',
        val: 10.00
    },
    {
        name: 'FIVE',
        val: 5.00
    },
    {
        name: 'ONE',
        val: 1.00
    },
    {
        name: 'QUARTER',
        val: 0.25
    },
    {
        name: 'DIME',
        val: 0.10
    },
    {
        name: 'NICKEL',
        val: 0.05
    },
    {
        name: 'PENNY',
        val: 0.01
    }
];

function checkCashRegister(price, cash, cid) {
    var output = {
        status: null,
        change: []
    };
    var change = cash - price;

    // Transform CID array into drawer object
    var cashRegister = cid.reduce(function (acc, curr) {
        acc.total += curr[1];
        acc[curr[0]] = curr[1];
        return acc;
    }, {
        total: 0
    });

    // Handle exact change
    if (cashRegister.total === change) {
        output.status = 'CLOSED';
        output.change = cid;
        return output;
    }

    // Handle obvious insufficient funds
    if (cashRegister.total < change) {
        output.status = 'INSUFFICIENT_FUNDS';
        return output;
    }

    // Loop through the denomination array
    var change_arr = denom.reduce(function (acc, curr) {
        var value = 0;
        // While there is still money of this type in the drawer
        // And while the denomination is larger than the change remaining
        while (cashRegister[curr.name] > 0 && change >= curr.val) {
            change -= curr.val;
            cashRegister[curr.name] -= curr.val;
            value += curr.val;

            // Round change to the nearest hundreth deals with precision errors
            change = Math.round(change * 100) / 100;
        }
        // Add this denomination to the output only if any was used.
        if (value > 0) {
            acc.push([curr.name, value]);
        }
        return acc; // Return the current change_arr
    }, []); // Initial value of empty array for reduce

    // If there are no elements in change_arr or we have leftover change, return
    // the string "Insufficient Funds"
    if (change_arr.length < 1 || change > 0) {
        output.status = 'INSUFFICIENT_FUNDS';
        return output;
    }

    // Here is your change, ma'am.
    output.status = 'OPEN';
    output.change = change_arr;
    return output;
}

// test here
let a = checkCashRegister(19.50, 20.00, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.10],
    ["QUARTER", 4.25],
    ["ONE", 90.00],
    ["FIVE", 55.00],
    ["TEN", 20.00],
    ["TWENTY", 60.00],
    ["ONE HUNDRED", 100.00]
]);
console.log(a);