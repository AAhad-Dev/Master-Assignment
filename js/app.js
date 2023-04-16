(async function()
{
    const response=await fetch("./data.json");
    const movie=await response.json();
    const genreElem=document.getElementById("genre");
    const yearElem=document.getElementById("year");    const rateElem=document.getElementById("rating");

})();