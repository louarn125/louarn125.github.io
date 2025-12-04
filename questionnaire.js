let ready_htpp_request = false;
let xml_doc = load_xml_file();
//let xml_doc = new XMLDocument();

function sport_pratique() {
  if (document.getElementById("box_pratique_sport").elements[0].checked) {
    let element_to_show = document.getElementById("q_sport_pratique");
    element_to_show.hidden = false;

    for (xml_question in xml_doc.getElementByTagName("sport_pratique")) {
      var option = document.createElement("option", {
        value: xml_question.getAttribute("id"),
      });

      element_to_show.appendChild(document.createElement(option));
    }
  } else {
    document.getElementById("q_sport_pratique").hidden = true;
  }
}

function load_xml_file() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      // j'ai un truc
      ready_htpp_request = true;
      console.log("pas neuille");
      return xmlhttp.responseXML.getElementsByTagName("data");
    } else {
      console.log("neuille");
    }
  };
  xmlhttp.open("GET", "https://louarn125.github.io/questions.xml", true);
  xmlhttp.send();
}
