function sport_pratique() {
  if (document.getElementById("box_pratique_sport").elements[0].checked) {
    let element_to_show = document.getElementById("q_sport_pratique");
    element_to_show.hidden = false;
    load_xml_file();
    /*
    for (xml_question in data.getElementByTagName("sport_pratique")) {
      element_to_show.appendChild(document.createElement("p"));
      }
    */
  } else {
    document.getElementById("q_sport_pratique").hidden = true;
  }
}

function load_xml_file() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "questions.xml", true);

  xhr.timeout = 2000; // time in milliseconds

  xhr.onload = function () {
    // Request finished. Do processing here.
    var xmlDoc = this.responseXML; // <- Here's your XML file
  };

  xhr.ontimeout = function (e) {
    // XMLHttpRequest timed out. Do something here.
  };

  xhr.send(null);
}
