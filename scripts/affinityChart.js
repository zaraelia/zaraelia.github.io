const c = document.getElementById("affinityChart");
const ctx = c.getContext('2d');

const a = 2 * Math.PI / 6;
const bgRadius = (c.width / 2) - 10;

var hexPoints = [];
var affinityPoints = [];

function init()
{
    clearCanvas();
    //draw hexagons
    for(var i = 0; i < 6; i++)
    {
        hexPoints.push(drawHexagon(c.width / 2, c.height / 2 , bgRadius - (i * (bgRadius / 6))));
    }
    //aesthetic circles
    drawCircle(c.width / 2, c.height / 2, bgRadius + 2);
    drawCircle(c.width / 2, c.height / 2, bgRadius + 5);
    //rearange points for each affinity
    for(var j = 0; j < 6; j++)
    {
        var affinityTemp = [];
        for(var k = 0; k < 6; k++)
        {
            affinityTemp.push(hexPoints[k][j]);
        }
        affinityPoints.push(affinityTemp);
    } 
}

function drawHexagon(x,y,r)
{
    var points = [];
    ctx.beginPath();
    for (var i = 0; i < 6; i++)
    {
        var _x = x + r * Math.sin(a * i);
        var _y = y + r * Math.cos(a * i);
        ctx.lineTo(_x, _y);
        points.push([_x, _y]);
    }
    ctx.closePath();
    ctx.stroke();
    return points;
}

function drawCircle(x,y,r)
{
    ctx.beginPath();
    ctx.arc(x,y,r,0,2 * Math.PI);
    ctx.stroke();
}

function clearCanvas()
{
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.beginPath();
}

function drawChart(affinityValues)
{
    var affinityMap = [];
    for(var i = 0; i < 6; i++)
    {
        switch(affinityValues[i])
        {
            case "S":
                affinityMap.push(affinityPoints[i][0]);
                break;
            case "A":
                affinityMap.push(affinityPoints[i][1]);
                break;
            case "B":
                affinityMap.push(affinityPoints[i][2]);
                break;
            case "C":
                affinityMap.push(affinityPoints[i][3]);
                break;
            case "D":
                affinityMap.push(affinityPoints[i][4]);
                break;
            case "E":
                affinityMap.push(affinityPoints[i][5]);
                break;
            default:
                console.log("something went wrong");
        }
    }


    
    ctx.beginPath();
    ctx.moveTo(affinityMap[0][0], affinityValues[0][1]);
    for(var i = 0; i < affinityMap.length; i++)
    {
        ctx.lineTo(affinityMap[i][0], affinityMap[i][1]);
    }
    ctx.lineTo(affinityMap[0][0], affinityValues[0][1]);
    
    ctx.closePath();
    ctx.fill();
}

