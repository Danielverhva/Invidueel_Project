function myFunction() {
    var punten = document.getElementById("punten");
    var meerText = document.getElementById("meer");
    var knopText = document.getElementById("knop");
  
    if (punten.style.display === "none") {
      punten.style.display = "inline";
      knopText.innerHTML = "Lees Meer"; 
      meerText.style.display = "none";
    } else {
      punten.style.display = "none";
      knopText.innerHTML = "Lees Minder"; 
      meerText.style.display = "inline";
    }
  }