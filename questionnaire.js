let ready_htpp_request = false;
let xml_doc;
//console.log(xml_doc);

function sport_pratique() {
  if (document.getElementById("box_pratique_sport").checked) {
    let element_to_show = document.getElementById("q_sport_pratique");
    element_to_show.hidden = false;

    console.log(xml_doc.getElementById("sport_pratique"));
    console.log(xml_doc.getElementsByTagName("sport_pratique"));
    //console.log(xml_doc.childNodes.where((local_name = "sport_pratique")));
    //console.log(xml_doc.children.getElementsByTagName("sport_pratique"));

    // for (xml_question in get_element_in_childnode_list(
    //   xml_doc.childNodes,
    //   "sport_pratique",
    // )) {
    //   var option = document.createElement("option", {
    //     value: xml_question.getAttribute("id"),
    //   });

    //element_to_show.appendChild(document.createElement(option));
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

function get_element_in_childnode_list(childnode_list, name) {
  var list_of_element = [];
  for (element in childnode_list) {
    if (element.local_name == name) {
      list_of_element.push(element);
    }
  }
  return list_of_element;
}
