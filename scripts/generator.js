Array.prototype.random = function(){
    return this[Math.floor((Math.random()*this.length))];
}

var elements = [
    "ignis",
    "aqua",
    "terra",
    "vis",
    "lux",
    "nox",
    "vapos",
    "natura",
    "fulmen",
    "metallum",
    "ventus",
    "solis",
    "meracus",
    "caeles",
    "pestis",
    "venenum",
    "gelu",
    "infernus",
    "tempus",
    "pondus",
    "inane"
]

var schools = 
[
    "evocation",
    "abjuration",
    "alchemy",
    "transformation",
    "spacial manipulation",
    "summoning",
    "conjuration",
    "illusory",
    "necromancy"
]

var weaponEdge =
[
    "single edge",
    "double edge",
    "thrusting"
]

var weaponHead =
[
    "single headed",
    "double headed"
]

var oneHandedWeapons= 
[
    "dagger",
    "sword",
    "axe",
    "hammer",
    "mace",
    "shortspear",
    "hanbo",
    "flail",
    "fist weapon",
    "sickle",
    "wand",
    "scepter",
    "tome",
    "trinket",
    "magic fist",   
]

var auxiliaryWeapons=
[
    "dagger",
    "wand",
    "trinket",
    "throwing knives",
    "throwing axes",
    "chakram",
    "bo shuriken",
    "hira shuriken",
    "inscription scrolls",
    "potions",
]

var twoHandedWeapons = 
[
    "sword",
    "axe",
    "hammer",
    "mace",
    "spear",
    "halberd",
    "glaive",
    "lucerne",
    "scythe",
    "bo",
    "kusarigama",
    "weighted chain",
    "staff",
    "longbow",
    "shortbow",
    "magic fists",
    "fist weapons"
]

var shields = 
[
    "round",
    "oval",
    "scutum",
    "coffin",
    "heater",
    "war-door",
    "kite",
    "buckler",
    "target",
    "spider",
    "tribal"
]


function generate()
{
    var numberToGenerate = document.getElementById("quantity").value;
    var resultTable = document.getElementById("resultTable").getElementsByTagName('tbody')[0];
    var generator = document.getElementById("generator").value;
    //clear table
    resultTable.innerHTML = "";

    var i = 0;
    for(i = 0; i < numberToGenerate; i++)
    {
        var row = resultTable.insertRow();
        var cell0 = row.insertCell(0);
        var cell1 = row.insertCell(1);

        var rowNumber = document.createTextNode(i + 1);
        var generatedText = "";

        switch(generator)
        {
            case "element" :
                generatedText = document.createTextNode(pickElement()); 
                break;
            case "weapon" :
                generatedText = document.createTextNode(pickWeapon());
                break;
            case "school" :
                generatedText = document.createTextNode(pickSchool());
                break;
            case "combo" : 
                generatedText = document.createTextNode(pickElement() + ' ' + pickSchool());
                break;
            case "affinity" :
                break;
            default:
                //do something
        }
        
        cell0.appendChild(rowNumber);
        cell1.appendChild(generatedText);
    } 
    
}

function pickElement()
{
    return elements.random();
}

function pickWeapon()
{
    var weaponRoll = Math.floor(Math.random() * 10);
    var weaponBase = "";

    //two hander
    if(weaponRoll < 5)
    {
        weaponBase = pickTwoHandWeapon();
        if(weaponBase.includes("sword") || weaponBase.includes("axe") || 
           weaponBase.includes("hammer") || weaponBase.includes("mace"))
        {
            weaponBase = "two handed " + weaponBase;
        }
        if (!weaponBase.includes("fist"))
        {
            weaponBase = "A " + weaponBase;
        } 
    }
    else
    {
        weaponBase = "A "+ pickOneHandWeapon() + " in the main hand";

        var oneHandRoll = Math.floor(Math.random() * 30);
        console.log(oneHandRoll);
        if(oneHandRoll < 10)
        {
            weaponBase = weaponBase.concat(" and  " + pickOneHandWeapon() + " in the off hand");
        }
        else if(oneHandRoll < 20)
        {
            weaponBase = weaponBase.concat(" and " + shields.random() + " shield in the off hand");
        }
        
    }
    weaponBase = weaponBase.concat(".");
    var auxiliaryRoll = Math.floor(Math.random() * 2);
    if(auxiliaryRoll == 0)
    {
        weaponBase = weaponBase.concat(" " + pickAuxiliaryWeapon() + " as a backup weapon.");
    }

    return weaponBase;
}

function checkEdge(weapon)
{
    if(weapon.includes("sword") || weapon.includes("dagger"))
    {
        return weaponEdge.random().concat(" " + weapon);
    }
    else if(weapon.includes("axe") || weapon.includes("hammer"))
    {
        return weaponHead.random().concat(" " + weapon);
    }
    else
    {
        return weapon;
    }
}

function pickOneHandWeapon()
{
    return checkEdge(oneHandedWeapons.random());
}

function pickTwoHandWeapon()
{
    return checkEdge(twoHandedWeapons.random());
}

function pickAuxiliaryWeapon()
{
    return checkEdge(auxiliaryWeapons.random());
}

function pickSchool()
{
    return schools.random();
}
