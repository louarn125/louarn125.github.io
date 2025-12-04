let ready_htpp_request = false;
let xml_doc;
//console.log(xml_doc);

function sport_pratique() {
  if (document.getElementById("box_pratique_sport").checked) {
    let element_to_show = document.getElementById("q_sport_pratique");
    element_to_show.hidden = false;

    //console.log(xml_doc.getElementById("sport_pratique"));
    console.log(xml_doc.getElementsByTagName("sport_pratique"));
    for (idx_xml_question in xml_doc.getElementsByTagName("sport_pratique")) {
      // console.log(idx_xml_question);
      // console.log(
      //   xml_doc
      //     .getElementsByTagName("sport_pratique")
      //     [idx_xml_question].getAttribute("id"),
      // );
      var option = document.createElement("option", {
        value: xml_doc
          .getElementsByTagName("sport_pratique")
          [idx_xml_question].getAttribute("id"),
      });
      console.log(option);
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
      xml_doc = xmlhttp.responseXML.getElementsByTagName("data")[0];
    }
  };
  xmlhttp.open("GET", "https://louarn125.github.io/questions.xml", true);
  xmlhttp.send();
}
