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
    "daggers",
    "wands",
    "trinkets",
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
    "fist weapons",
    "bare fists"
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

var ranks = 
[
    "S", "A", "B", "C", "D", "E"
]

var pastLocations = 
[
    "Old Helira",
    "Old Pavati",
    "the Shiavan Empire",
    "the Goba Kingdom",
    "Imret",
    "Seyni",
    "Kanac",
    "Vakvia"
]

var currentLocations = 
[
    "Helira",
    "Osca",
    "Canovia",
    "Shiabb",
    "Hedij",
    "Goba",
    "UTF",
    "Vauxcester",
    "Forum",
    "Estrium",
    "Waden",
    "Jitra",
    "Southern Pavati",
    "Northern Pavati",
    "Sorbetto",
    "Statsora",
    "Blaghold",
    "Voxrath",
    "Aetherport",
    "Flamhaven",
    "Rivenden",
    "Umbrafall",
    "Lonbiel",
    "Westland",
    "Goldcliff",
    "Duskworth",
    "Highcross",
    "Hallowind",
    "Glumstone",
    "Plain Roost",
    "Dead Man's Retreat",
    "the Sanquine Enclave",
    "Moth",
    "Borli",
    "Uto",
    "Aclo",
    "Acteli",
    "Mach",
    "Exling Cay",
    "Borhu",
    "Ebom Isle",
    "Boll",
    "the Engami Isles",
    "Akitol",
    "Bellgarde",
    "Erus",
    "Castemont",
    "Sonius",
    "Eton",
    "Pietra Velenosa",
    "Alvira",
    "Pelligus",
    "Vetagne",
    "Ilada",
    "Naucrias",
    "Oea",
    "Savili",
    "Virosa",
    "Stepis",
    "Lisios",
    "Amesris",
    "Embertide",
    "Berytis",
    "Cinder Post",
    "Sanzudo",
    "Zomze",
    "Khanu",
    "Garno",
    "Revinot",
    "Takri",
    "Bahet",
    "Nabi",
    "Liru",
    "Irsus",
    "Mavanor",
    "Grasmere",
    "Qagash",
    "Yarrin",
    "Kald",
    "Flurris",
    "Eo Serine",
    "Ifalrius",
    "Bostra",
    "Bellechu",
    "Lothecia",
    "Jorundarfell",
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
                generatedText = document.createTextNode(pickAffinity());
                break;
            case "martial":
                generatedText = document.createTextNode(pickMartialArt());
                break;
            case "character":
                generatedText = document.createTextNode(pickCharacter()); 
                break;
            case "location":
                generatedText = document.createTextNode(pickLocation()); 
                break;
            default:
                //do something
        }
        
        cell0.appendChild(rowNumber);
        cell1.appendChild(generatedText);
    } 
    
} 

function pickCharacter()
{
    //appearance
    //age
    var ageType = ["young", "pre-teen", "teenage", "young adult", "adult", "middle-aged","senior", "elderly"].random();
    //sex
    var sexOld = ["man", "woman"].random();
    var sexYoung = ["boy", "girl"].random();

    switch(ageType)
    {
        case "young":
        case "pre-teen":
        case "teenage":
            var sex = sexYoung;
            break;
        default:
            var sex = sexOld;
            break;
    }

    if(ageType == "adult" || ageType == "elderly")
    {
        var ageDescription = "An " + ageType + " " + sex + ".  ";
    }
    else
    {
        var ageDescription = "A " + ageType + " " + sex + ".  ";
    }
    if(sex == "man" || sex == "boy")
    {
       var pronoun = "He" 
    }
    else
    {
        var pronoun = "She"
    }
    
    //birthday
    var day = getRandomArbitrary(1,22);
    var month = getRandomArbitrary(1,5); 
    var season = ["Winter", "Spring", "Summer", "Autumn"].random();
    var birthday =  pronoun + " was born on day " + day + " of month " + month + " in " + season  + ".  ";
    
    //eye color and shape
    var eyeColor = ["black", "dark brown", "brown", "light brown", "amber", "hazel", "green", "emerald", "light green", "teal", "cyan","blue", "gray", "light gray", "light blue", "red", "light purple", "violet", "orange", "yellow"].random();
    var eyeShape = ["round", "monolid", "hooded", "almond", "upturned", "downturned", "deep set", "protruding", "close set", "wide set"].random();
    var eyeDescription = pronoun + " has " + eyeColor + " " + eyeShape + " eyes and "
    //hair color and style
    var hairColor = ["black", "dark brown", "brown", "light brown", "golden brown", "ash blonde", "honey blonde", "sandy blonde", "light blonde", "white", "gray", "light auburn", "auburn", "dark auburn",
                    "green", "blue", "purple", "yellow", "orange", "red", "pink", "gold", "rose gold", "yellow green", "lime", "emerald", "ice blue", "dark pink", "light pink", "teal"];
    var hairGradient = getRandomArbitrary(1,10);
    if(hairGradient > 3) 
    {
        var charHairColor = hairColor.random();
    }
    else
    {
        var charHairColor = hairColor.random() + " / " + hairColor.random();
    }
    var hairstyle = ["short", "medium", "long", "very long"].random();

    var hairDescription = hairstyle + " " + charHairColor + " hair.  ";
    //skin tone
    var skinTones = ["ivory", "porcelain", "pale ivory", "warm ivory", "beige","rose beige", "sienna", "almond", "sand", "chesnut", "bronze", "umber", "golden", "espresso"].random();
    //physique
    //var physiques = [""].random();
    //accesories
    //facial hair (male only)
    //tatoos
    //glasses
    //piercings
    //physical conditions
    //scars
    //disfigurements
    //birthmarks
    //corruption
    //congenital traits
    

    //power levels
    //affinity
    //weapon profficiencies
    //birthplace / current location
    var locationRoll = getRandomArbitrary(0, 10);
    if (locationRoll < 4)
    {
        var locationDescription = pronoun + " has lived " + pickLocation() + " since birth.  ";
    }
    else
    {
        var locationDescription = pronoun + " lives " + pickLocation() + " and was born in " + currentLocations.random();
    }
    //occuptation
    var jobYoung = ["student", "farmer", ]
    //marital status
    //wealth
    //religion
    //personality
    //lifestyle traits
    var characterDescription = ageDescription + birthday + eyeDescription + hairDescription +  locationDescription;
    return characterDescription;
    
}

function pickLocation()
{
    var proximity = ["in the center of", "nearby", "just outside of", "in the bad part of", "in the affluent part of", "underneath", "inside of", "near", "close to", "in", 
    "just inside of", "in an inn in", "on the outskirts of", "somewhere inside of", "on the highest part of", "on the road to"].random();
    return proximity + " " + currentLocations.random();
}

function pickMartialArt()
{
    //prestige
    var prestige = "A martial arts school that ";
    var time = ["is currently" , "was once"].random();
    var scale = ["locally", "regionally", "globally", "irrelevant"].random();
    var fame = ["revered", "respected", "well known", "met with suspicion", "hated"].random();
    var past = ["is now lost to time", "has been watered down", "split into multiple schools", "has been forgotten", "failed to be passed down", "lost most of its followers"].random();

    
    prestige = prestige.concat(time + " " + scale);
    if(time == "is currently" && scale != "irrelevant")
    {
        prestige = prestige.concat(" " + fame);
    }
    if(time == "was once" && scale != "irrelevant")
    {
        prestige = prestige.concat(" "  + fame + " but " + past);
    }
    prestige = prestige.concat(".  ");

    //type and location.
    var  schoolType = "";
    if(time == "is currently")
    {
        schoolType = "It is taught in a ";
    }
    else
    {
        schoolType = "It was taught in a "; 
    }  

    var building = ["private institution", "dojo", "government facility", "monestary", "gymnasium", "studio", "schoolyard", "park"].random();
    var age = getRandomArbitrary(0,2);
    if(age == 0)
    {
        schoolType = schoolType.concat(building + " in " + currentLocations.random() +  " with roots that can be traced back to " + pastLocations.random() + ".");
    }
    else
    {
        schoolType = schoolType.concat(building + " which originated in " + currentLocations.random() + ".");
    }
    
    //weapons
    var weaponsTaught = " Practitioners use ";
    var numWeapons = getRandomArbitrary(1,4);
    for(let x = 0; x < numWeapons ; x++)
    {
        if(x == 1)
        {
            weaponsTaught = weaponsTaught.concat("They also use ");
        }
        if(x == 2)
        {
            weaponsTaught = weaponsTaught.concat("Less commonly, they use ")
        }

        var weaponTypeRoll = getRandomArbitrary(0,4);
        switch(weaponTypeRoll)
        {
            case 0:
                weaponsTaught = weaponsTaught.concat(pickOneHandWeapon() + "s");
                break;
            case 1:
                weaponsTaught = weaponsTaught.concat(pickAuxiliaryWeapon());
                break;
            case 2: 
                weaponsTaught = weaponsTaught.concat(pickTwoHandWeapon() +"s");
                break;
            case 3:
                weaponsTaught = weaponsTaught.concat(pickOneHandWeapon()+"s paired with a " + shields.random() + " shield");
                break;
            default:
        }
        if(weaponsTaught.slice(-2) == "ss")
        {
            weaponsTaught = weaponsTaught.slice(0, -1);
        }
        weaponsTaught = weaponsTaught.concat(".  ");
    }
    //elements
    var elementsTaught = "The techniques are primarily "
    
    var numElements = getRandomArbitrary(1,4);
    for(let x = 0; x < numWeapons ; x++)
    {
        if(x == 1)
        {
            elementsTaught = elementsTaught.concat("They occasionally utilize ")
        }
        if(x == 2)
        {
            elementsTaught = elementsTaught.concat("In certain scenarios, they use ")
        }
        elementsTaught = elementsTaught.concat(pickElement() + " " + pickSchool() + " spells.  ");
    }
    //general philosophy
    //fighting style
    var fightingStyles = ["striking", "offensive actions", "defensive actions", "counterattacking", "adapting to unusual situations", "grappling", "being well rounded", "zoning", "gimmicks"].random();
    var stylesTaught = "Practitioners are often considered to excel at " + fightingStyles + ".  "
    //how its practiced
    var practiceMethods = ["reading manuscripts", "learning from a master", "enduring years of rigorous training", "sparring", "dueling", "partaking in gladitorial combat", "meditating", "cultivating one's inner self", "practicing kata"].random();
    var practiceTaught = "The most common way to study this school is by " + practiceMethods + ".  "
    //put it together
    var martialArtsSchool = prestige + schoolType + weaponsTaught + elementsTaught + stylesTaught + practiceTaught;
    return martialArtsSchool;
}

function pickAffinity()
{
    // s - 1/200 a 1/40 b 1/20  c 1/4 d 9/20 e 1/4
    var affinity = [];
    for(var i = 0; i < 6; i++)
    {
        var roll = Math.floor((Math.random() * 201));
        if(roll == 0)
        {
            affinity[i] = "S";
        }
        else if (roll <= 5)
        {
            affinity[i] = "A";
        }
        else if (roll <= 15)
        {
            affinity[i] = "B";
        }
        else if (roll <= 65)
        {
            affinity[i] = "C"; 
        }
        else if (roll <= 150)
        {
            affinity[i] = "D";
        }
        else
        {
            affinity[i] = "E";
        }
    }
    init();
    drawChart(affinity);
    return "Vis: " + affinity[0] + ", Aqua: " + affinity[1] + ", Nox: " + affinity[2] +  
           ", Terra: " + affinity[3] + ", Lux: " + affinity[4] + ", Ignis: " + affinity[5];
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
            weaponBase = "a " + weaponBase;
        } 
    }
    else
    {
        weaponBase = "a "+ pickOneHandWeapon() + " in the main hand";

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

function showDiv(element)
{
    //show and hide the appropriate elements for each dropdown selection
    //main focus is for affinity chart since i need to add a canvas to draw the hexagon
    //consider limiting the number of canvases
    switch(element.value)
    {
        case "affinity":
            document.getElementById("affinity").style.display = 'block';
            break;
        default:
            document.getElementById("affinity").style.display = 'none';
    }
}

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
