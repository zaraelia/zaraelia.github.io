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

var weaponSize =
[
    "one handed",
    "two handed"
]

var weaponEdge =
[
    "singe edge",
    "double edge",
    "thrusting"
]

var oneHandedweapons= 
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
    "magic fist",
    "trinket",
    "throwing knives",
    "throwing axes",
    "chakram",
    "bo shuriken",
    "hira shuriken"
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

}

function pickSchool()
{
    return schools.random();
}
