'use strict'

let strength = 0;
let strengthExp = 0;
let strengthExpMax = 1;
let dex = 0;
let dexExp = 0;
let dexExpMax = 0;
let int = 0;
let intExp = 0;
let intExpMax = 0;
let ego = 0;
let egoExp = 0;
let egoExpMax = 0;
let guts = 0;
let gutsExp = 0;
let gutsExpMax = 0;

initialize();
update();

function update() {
    localStorage.strength = strength;
    localStorage.strengthExp = strengthExp;
    localStorage.strengthExpMax = strengthExpMax
    localStorage.dex = dex;
    localStorage.dexExpMax = dexExpMax
    localStorage.dexExp = dexExp;
    localStorage.int = int;
    localStorage.intExp = intExp;
    localStorage.intExpMax = intExpMax
    localStorage.ego = ego;
    localStorage.egoExp = egoExp;
    localStorage.egoExpMax = egoExpMax
    localStorage.guts = guts;
    localStorage.gutsExp = gutsExp;
    localStorage.gutsExpMax = gutsExpMax;
    document.getElementById("strengthBar").value = Number(strengthExp);
    document.getElementById("dexBar").value = Number(dexExp);
    document.getElementById("intBar").value = Number (intExp);
    document.getElementById("egoBar").value = Number (egoExp);
    document.getElementById("gutsBar").value = Number (gutsExp);
    document.getElementById("strengthBar").max = Number(strengthExpMax);
    document.getElementById("dexBar").max = Number(dexExpMax);
    document.getElementById("intBar").max = Number (intExpMax);
    document.getElementById("egoBar").max = Number (egoExpMax);
    document.getElementById("gutsBar").max = Number (gutsExpMax);
    document.getElementById("strength").innerHTML = "Strength: " + strength;
    document.getElementById("dex").innerHTML = "Dex: " + dex;
    document.getElementById("int").innerHTML = "Int: " + int;
    document.getElementById("ego").innerHTML = "Ego: " + ego;
    document.getElementById("guts").innerHTML = "Guts: " + guts;
}

function addStrengthExp() {
    strengthExp += 1;
    if (strengthExp >= strengthExpMax)
    {
        strength += 1;
        strengthExp = 0;
        strengthExpMax = strengthExpMax + 1;
    }
    update();
}

function addDexExp() {
    dexExp += 1;
    if (dexExp >= dexExpMax)
    {
        dex += 1;
        dexExp = 0;
        dexExpMax = dexExpMax + 1;
    }
    update();
}

function addIntExp() {
    intExp += 1;
    if (intExp >= intExpMax)
    {
        int += 1;
        intExp = 0;
        intExpMax = intExpMax + 1;
    }
    update();
}

function addEgoExp() {
    egoExp += 1;
    if (egoExp >= egoExpMax)
    {
        ego += 1;
        egoExp = 0;
        egoExpMax = egoExpMax + 1;
    }
    update();
}

function addGutsExp() {
    gutsExp += 1;
    if (gutsExp >= gutsExpMax)
    {
        guts += 1;
        gutsExp = 0;
        gutsExpMax = gutsExpMax + 1;
    }
    update();
}

function initialize()
{
    if (isNaN(localStorage.strength))
    {
        localStorage.strength = 0;
        strength = 0;
    }
    else
    {
        strength = Number(localStorage.strength);
    }

    if (isNaN(localStorage.strengthExp))
    {
       localStorage.strengthExp = 0;
      strengthExp = 0;
    }
    else
    {
        strengthExp = Number(localStorage.strengthExp);
    }

    if (isNaN(localStorage.strengthExpMax))
    {
        localStorage.strengthExpMax = 1;
        strengthExpMax = 1;
    }
    else
    {
        strengthExpMax = Number(localStorage.strengthExpMax);
    }

    if (isNaN(localStorage.dex))
    {
        localStorage.dex = 0;
        dex = 0;
    }
    else
    {
        dex = Number(localStorage.dex);
    }

    if (isNaN(localStorage.dexExp))
    {
        localStorage.dexExp = 0;
        dexExp = 0;
    }
    else
    {
        dexExp = Number(localStorage.dexExp);
    }

    if (isNaN(localStorage.dexExpMax))
    {
        localStorage.dexExpMax = 1;
        dexExpMax = 1;
    }
    else
    {
        dexExpMax = Number(localStorage.dexExpMax);
    }

    if (isNaN(localStorage.int))
    {
        localStorage.int = 0;
        int = 0;
    }
    else
    {
        int = Number(localStorage.int);
    }

    if (isNaN(localStorage.intExp))
    {
        localStorage.intExp = 0;
        intExp = 0;
    }
    else
    {
        intExp = Number(localStorage.intExp);
    }

    if (isNaN(localStorage.intExpMax))
    {
        localStorage.intExpMax = 1;
        intExpMax = 1;
    }
    else
    {
        intExpMax = Number(localStorage.intExpMax);
    }

    if (isNaN(localStorage.ego))
    {
        localStorage.ego = 0;
        ego = 0;
    }
    else
    {
        ego = Number(localStorage.ego);
    }

    if (isNaN(localStorage.egoExp))
    {
        localStorage.egoExp = 0;
        egoExp = 0;
    }
    else
    {
        egoExp = Number(localStorage.egoExp);
    }

    if (isNaN(localStorage.egoExpMax))
    {
        localStorage.egoExpMax = 1;
        egoExpMax = 1;
    }
    else
    {
        egoExpMax = Number(localStorage.egoExpMax);
    }

    if (isNaN(localStorage.guts))
    {
        localStorage.guts = 0;
        guts = 0;
    }
    else
    {
        guts = Number(localStorage.guts);
    }

    if (isNaN(localStorage.gutsExp))
    {
        localStorage.gutsExp = 0;
        gutsExp = 0;
    }
    else
    {
        gutsExp = Number(localStorage.gutsExp);
    }

    if (isNaN(localStorage.gutsExpMax))
    {
        localStorage.gutsExpMax = 1;
        gutsExpMax = 1;
    }
    else
    {
        gutsExpMax = Number(localStorage.gutsExpMax);
    }
}