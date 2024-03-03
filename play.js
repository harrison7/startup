document.write('<script src="leaderboard.js"></script>');

let clicks = 0;
let elements = [0, 0, 0, 0, 0, 0, 0, 0];
let upgrades = [0, 0, 0, 0, 0, 0, 0];
let upgradeCosts = [10, 10, 10, 10, 10, 10, 10];
let alertIDs = ["Htxt", "Hetxt", "Litxt", "Betxt", "Btxt", "Ctxt", "Ntxt"];

const scoresData = [
    { name: "Billy", score: -7 },
    { name: "Bob", score: -6 },
    { name: "Joe", score: -5 },
    { name: "Man", score: 3 },
];

function combine(nums) {
    let sum = nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum;
}

function create() {
    clicks += 1;
    updateElements()
}

function updateElements() {
    elements[0] += (2 ** upgrades[0]);
    if (clicks % (8 / (2 ** combine(upgrades))) == 0) {
        elements[1] += (2 ** upgrades[1]);
    }
    if (clicks % (64 / (2 ** combine(upgrades.slice(1, 7)))) == 0) {
        elements[2] += (2 ** upgrades[2]);
    }
    if (clicks % (512 / (2 ** combine(upgrades.slice(2, 7)))) == 0) {
        elements[3] += (2 ** upgrades[3]);
    }
    if (clicks % (4096 / (2 ** combine(upgrades.slice(3, 7)))) == 0) {
        elements[4] += (2 ** upgrades[4]);
    }
    if (clicks % (32768 / (2 ** combine(upgrades.slice(4, 7)))) == 0) {
        elements[5] += (2 ** upgrades[5]);
    }
    if (clicks % (262144 / (2 ** combine(upgrades.slice(5, 7)))) == 0) {
        elements[6] += (2 ** upgrades[6]);
    }
    if (clicks % (2097152 / (2 ** upgrades[6])) == 0) {
        elements[7]++;
    }

    document.getElementById('hydrogen').textContent = elements[0];
    document.getElementById('helium').textContent = elements[1];
    document.getElementById('lithium').textContent = elements[2];
    document.getElementById('beryllium').textContent = elements[3];
    document.getElementById('boron').textContent = elements[4];
    document.getElementById('carbon').textContent = elements[5];
    document.getElementById('nitrogen').textContent = elements[6];
    document.getElementById('oxygen').textContent = elements[7];
}

async function upgrade(index) {
    if (elements[index + 1] >= upgradeCosts[index]) {
        upgrades[index]++;
        elements[index + 1] -= upgradeCosts[index];
        upgradeCosts[index] *= 10;

        document.getElementById('HUp').textContent = upgradeCosts[0];
        document.getElementById('HeUp').textContent = upgradeCosts[1];
        document.getElementById('LiUp').textContent = upgradeCosts[2];
        document.getElementById('BeUp').textContent = upgradeCosts[3];
        document.getElementById('BUp').textContent = upgradeCosts[4];
        document.getElementById('CUp').textContent = upgradeCosts[5];
        document.getElementById('NUp').textContent = upgradeCosts[6];
    } else {
        const text = document.getElementById(alertIDs[index]).textContent;
        document.getElementById(alertIDs[index]).style.color = 'red';
        document.getElementById(alertIDs[index]).textContent = "Too expensive";

        await new Promise(resolve => setTimeout(resolve, 1000));

        document.getElementById(alertIDs[index]).style.color = 'black';
        document.getElementById(alertIDs[index]).textContent = text;
    }
}