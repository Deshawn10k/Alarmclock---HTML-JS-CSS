// Haalt het element op dat de pijl omhoog voor het uur bevat.
var hourUp = document.getElementById("js--hour-up");

// Haalt het element op dat de pijl omlaag voor het uur bevat.
var hourDown = document.getElementById("js--hour-down");

// Stelt het uur in op 0
var hour = 0;

// Dan zoekt hij het element waarin het uur wordt weergegeven.
var timeHour = document.getElementById("js--time-hour");

// Als er op de pijl omhoog voor het uur wordt geklikt, dan.........
hourUp.onclick = function () {
  hour += 1; // Verhoogt hij het uur met 1.
  if (hour > 23) {
    hour = 0; // Als het uur groter is dan 23, dan stel ie het in op 0.
  }
  // Deze regel zorgt ervoor dat het uur als twee cijfers wordt weergegeven.
  if (hour < 10) {
    timeHour.innerText = "0" + hour; // Deze regel zorgt ervoor dat er een 0 word toegevoegd aan het begin voor enkele cijfers.
  } else {
    timeHour.innerText = hour; // Laat het uur zien zoals het is als het twee cijfers heeft.
  }
}

// Als er op de pijl omlaag voor het uur wordt geklikt
hourDown.onclick = function () {
  hour -= 1; // Verlaagt het uur met 1.
  if (hour < 0) {
    hour = 23; // Als het uur kleiner is dan 0,  dan stelt ie het in als 23.
  }
  // Deze regel zorgt ervoor dat het uur altijd als twee cijfers wordt weergegeven.
  if (hour < 10) {
    timeHour.innerText = "0" + hour; // Deze regel zorgt ervoor dat er een 0 word toegevoegd aan het begin voor enkele cijfers.
  } else {
    timeHour.innerText = hour; // Laat het uur zien zoals het is als het twee cijfers heeft.
  }
}

// Stelt de minuten in op 0
var minute = 0;

// Zoekt het element waarin de minuten worden weergegeven.
var timeMinute = document.getElementById("js--time-minute");

// Als er op de pijl omhoog voor de minuten wordt geklikt.
var minuteUp = document.getElementById("js--minute-up");
minuteUp.onclick = function () {
  minute += 1; // Verhoog de minuten met 1.
  if (minute > 59) {
    minute = 0; // Als de minuten groter zijn dan 59, stel ze dan in op 0.
  }
  // Deze regel zorgt ervoor dat het uur als twee cijfers wordt weergegeven.
  if (minute < 10) {
    timeMinute.innerText = "0" + minute; // Deze regel zorgt ervoor dat er een 0 word toegevoegd aan het begin voor enkele cijfers.
  } else {
    timeMinute.innerText = minute; // Laat de minuten zien zoals ze zijn als het twee cijfers heeft.
  }
}

// Als er op de pijl omlaag voor de minuten wordt geklikt...
var minuteDown = document.getElementById("js--minute-down");
minuteDown.onclick = function () {
  minute -= 1; // Verlaag de minuten met 1.
  if (minute < 0) {
    minute = 59; // Als de minuten kleiner zijn dan 0, stel ze dan in op 59.
  }
  // Zorgt ervoor dat de minuten als twee cijfers worden weergegeven.
  if (minute < 10) {
    timeMinute.innerText = "0" + minute; // Deze regel zorgt ervoor dat er een 0 word toegevoegd aan het begin voor enkele cijfers.
  } else {
    timeMinute.innerText = minute; // Laat de minuten zien zoals ze zijn als het twee cijfers heeft.
  }
}

// Deze regel is voor in- en uitschakelen van het alarm.
var toggle = document.getElementById("js--toggle");

// Variabele om de timer bij te houden.
var timer = null;

// Zet de standaardwaarde van de toggle uit.
toggle.checked = false;

// Variabele om de timer uit te schakelen.
var getTimerOut = null;

// Zoek het dialoogelement voor het tonen van de alarmstatus.
var dialogue = document.getElementById("js--dialogue");

// Maak een nieuw geluidselement voor het alarmgeluid.
var audio = new Audio("/sounds/320852__datruth555__hiit_relax_sound.wav")

// Als de toggle wordt gewijzigd
toggle.onchange = function () {
  // Als de toggle is ingeschakeld, dan....
  if (toggle.checked === true){
    // Toont het een bericht met het ingestelde alarmtijd.
    dialogue.innerText = "Je alarm is gezet om " + hour + " uur en " + minute + " minuten.";
    // Voegt een visuele indicatie toe dat het alarm is ingeschakeld.
    toggle.classList.add("alarm__toggle--checked");
    // Toont het dialoog.
    dialogue.style.display = "flex";
    // Dan vrbergt het dialoogvenster na 3,5 seconden ongeveer
    getTimerOut = setTimeout(function () {
      dialogue.style.display = "none";
    }, 3500)
    // Start een interval om het alarmgeluid af te spelen.
    timer = setInterval(function () {
      var date = new Date();
      var dateHour = date.getHours();
      var dateMinute = date.getMinutes();

      // Controleert of de huidige tijd overeenkomt met de alarmtijd.
      if (hour === dateHour && minute === dateMinute) {
        audio.play(); // Speel het alarmgeluid af.
      }
    }, 1000)
  }
  // Als de toggle wordt uitgeschakeld dan anders
  else {
    // Verbergt het dialoogvenster
    dialogue.style.display = "none";
    
//Dit zorgt ervoor dat de visuele aanpassingen die aangeven dat het alarm is ingeschakeld, worden verwijderd. 
    toggle.classList.remove("alarm__toggle--checked");
    // Dan stoppen de timers voor het geluid en het dialoogvenster.
    clearTimeout(getTimerOut);
    clearInterval(timer);
  }
}

// Variabele voor de pijl omhoog voor het uur.
var hourUp = document.getElementById("js--hour-up");

// Variabele voor de pijl omlaag voor het uur.
var hourDown = document.getElementById("js--hour-down");

// Variabele voor het bijhouden van het uur, hij staat ingesteld op 0.
var hour = 0;

// Variabele voor het element waarin het uur wordt weergegeven
var timeHour = document.getElementById("js--time-hour");

// Eventlistener voor het verhogen van het uur wanneer er op de pijl omhoog wordt geklikt.
hourUp.onclick = function () {
  hour += 1; // Verhoog het uur met 1.
  if (hour > 23) {
    hour = 0; // Als het uur groter is dan 23, dan wordt hij op 0 gezet.
  }
  // Hier controleer je of het uur minder dan 10 is en dan voeg je een 0 toe.
  if (hour < 10) {
    timeHour.innerText = "0" + hour;
  } else {
    timeHour.innerText = hour;
  }
}

// Eventlistener voor het verlagen van het uur wanneer er op de pijl omlaag wordt geklikt.
hourDown.onclick = function () {
  hour -= 1; // Dit zorgt ervoor dat het wordt verlaagd met 1 uur.
  if (hour < 0) {
    hour = 23; // Als het uur kleiner is dan 0, dan wordt het gezet op 23.
  }
  // Je controleert of het uur minder dan 10 is en dan voeg je eigenlijk een 0 toe daarachter.
  if (hour < 10) {
    timeHour.innerText = "0" + hour;
  } else {
    timeHour.innerText = hour;
  }
}

// Variabele voor de minuten, staat meteen ingesteld op 0.
var minute = 0;

// Variabele voor het element waarin de minuten worden weergegeven.
var timeMinute = document.getElementById("js--time-minute");

// Eventlistener voor het verhogen van de minuten wanneer er op de pijl omhoog wordt geklikt
var minuteUp = document.getElementById("js--minute-up");
minuteUp.onclick = function () {
  minute += 1; // Verhoog de minuten met 1.
  if (minute > 59) {
    minute = 0; // Als de minuten groter zijn dan 59, zet ze dan op 0.
  }
  // Controleer of de minuten minder dan 10 zijn en voeg zo nodig een 0 toe.
  if (minute < 10) {
    timeMinute.innerText = "0" + minute;
  } else {
    timeMinute.innerText = minute;
  }
}

// Eventlistener voor het verlagen van de minuten wanneer er op de pijl omlaag wordt geklikt.
var minuteDown = document.getElementById("js--minute-down");
minuteDown.onclick = function () {
  minute -= 1; // Verlaag de minuten met 1.
  if (minute < 0) {
    minute = 59; // Als de minuten kleiner zijn dan 0, zet ze dan op 59.
  }
  // Controleer of de minuten minder dan 10 zijn en voeg zo nodig een 0 toe.
  if (minute < 10) {
    timeMinute.innerText = "0" + minute;
  } else {
    timeMinute.innerText = minute;
  }
}

// Variabele voor het schakelaarelement om het alarm in en uit te schakelen.
var toggle = document.getElementById("js--toggle");

// Variabele om de timer bij te houden
var timer = null;

// De toggle wordt uitgeschakeld
toggle.checked = false;

// Variabele om de timer uit te schakelen
var getTimerOut = null;

// Variabele voor het dialoog waarin de alarmstatus wordt weergegeven
var dialogue = document.getElementById("js--dialogue");

// Nieuwe audio voor het alarmgeluid.
var audio = new Audio("/sounds/520674__zhr__relaxation-music-2.mp3");

// Eventlistener voor het wijzigen van de toggle
toggle.onchange = function () {
  // Als de toggle is ingeschakeld...
  if (toggle.checked === true){
    // Toon een bericht met de ingestelde alarmtijd.
    dialogue.innerText = "Je alarm is gezet om " + hour + " uur en " + minute + " minuten.";
    // Voeg een visuele indicatie toe dat het alarm is ingeschakeld.
    toggle.classList.add("alarm__toggle--checked");
    // Toon het dialoogvenster.
    dialogue.style.display = "flex";
    // Verberg het dialoogvenster na 3,5 seconden.
    getTimerOut = setTimeout(function () {
      dialogue.style.display = "none";
    }, 3500)
    // Start een interval om het alarmgeluid af te spelen per seconde.
    timer = setInterval(function () {
      var date = new Date();
      var dateHour = date.getHours();
      var dateMinute = date.getMinutes();

      // Hier controleer je of de huidige tijd overeenkomt met de alarmtijd.
      if (hour === dateHour && minute === dateMinute) {
        audio.play(); // Dan speelt het alarmgeluid af.
      }
    }, 1000)
  }
  // Als de toggle wordt uitgeschakeld
  else {
    // Dan verbergt het dialoog.
    dialogue.style.display = "none";
    // En verwijdert hij de visuele indicatie dat het alarm is ingeschakeld
    toggle.classList.remove("alarm__toggle--checked");
    // Hiermee stop je de timers voor het geluid en het dialoog.
    clearTimeout(getTimerOut);
    clearInterval(timer);
  }
}