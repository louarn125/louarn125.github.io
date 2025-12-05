let ready_htpp_request = false;
let xml_doc;

function flip_flop_name(name) {
  if (document.getElementById("box_" + name).checked) {
    //console.log("q_" + name);
    let element_to_show = document.getElementById("q_" + name);
    element_to_show.hidden = false;
    for (
      let idx_xml_question = 0;
      idx_xml_question < xml_doc.getElementsByTagName(name).length;
      idx_xml_question++
    ) {
      document.getElementById("select_q_" + name).innerHTML =
        document.getElementById("select_q_" + name).innerHTML +
        "<option id=" +
        idx_xml_question +
        ">" +
        xml_doc
          .getElementsByTagName(name)
        [idx_xml_question].getAttribute("nom") +
        " </option>";
    }
  } else {
    document.getElementById("q_" + name).hidden = true;
  }
  localStorage.setItem(
    "_box_" + name,
    document.getElementById("box_" + name).checked,
  );
}

function load_xml_file() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      // j'ai un truc
      ready_htpp_request = true;
      xml_doc = xmlhttp.responseXML.getElementsByTagName("data")[0];
      dynamic_charge_all();
      //create_exercice(1000, ["haut"], 1);
    }
  };
  xmlhttp.open("GET", "https://louarn125.github.io/data.xml", true);
  xmlhttp.send();
}

function dynamic_change(name) {
  // console.log(document.getElementById("text_" + name));
  // console.log(document.getElementById("text_" + name).value);
  localStorage.setItem(
    "_text_" + name,
    document.getElementById("text_" + name).value,
  );
  // localStorage.setItem(
  //   "Items", localStorage.getItem("Items")+document.get
  // )
  //dynamic_charge_all();
}

function dynamic_change_enums(name) {
  localStorage.setItem(
    "_select_" + name,
    document.getElementById("select_" + name).value,
  );
}

function dynamic_charge_all() {
  for (stored_value in localStorage) {
    if (stored_value.startsWith("_")) {
      better_stored_value = stored_value.slice(1);
      if (better_stored_value.startsWith("box_")) {
        document.getElementById(better_stored_value).checked =
          localStorage.getItem(stored_value) === "true";
        //console.log("je flip flop", better_stored_value.slice(4));
        flip_flop_name(better_stored_value.slice(4));
      } else if (better_stored_value.startsWith("text_")) {
        document.getElementById(better_stored_value).value =
          localStorage.getItem(stored_value);
      }
    }
  }
}
//code du nain
// function create_exercice(d_total, groupes, equipement) {
//   console.log("roux");
//   let mouv_posible = [];
//   console.log(xml_doc.getElementsByTagName("mouvement"));
//   for (mouv in xml_doc.getElementsByTagName(cardi"mouvement")) {
//     console.log(xml_doc.getElementsByTagName("mouvement").getAttribute("matériel"));
//     if (equipement >= xml_doc.getElementsByTagName("mouvement")[mouv].textContent) {
//       mouv_posible.push(mouv);
//     }
//   }
//   console.log(mouv_posible);
// }

function load_page() {
  load_xml_file();
  document.cookie += ";"; // pour que la fonction marche bien tqt
}

function encookization() {
  //document.cookie = newCookie;

  // fequence current
  setCookie(
    "frequence_current",
    document.getElementById("select_frequence_current").value,
    10,
  );

  // frequence promise
  setCookie(
    "frequence_promise",
    document.getElementById("select_frequence_promise").value,
    10,
  );

  // sport_pratique
  setCookie(
    "sport_pratique",
    document.getElementById("box_sport_pratique").checked,
    10,
  );

  // q_sport_pratique
  setCookie(
    "q_sport_pratique",
    document.getElementById("q_sport_pratique").value,
    10,
  );

  // raison_sport
  setCookie(
    "raison_sport",
    document.getElementById("select_raison_sport").value,
    10,
  );

  // competition
  setCookie(
    "competition",
    document.getElementById("box_competition").checked,
    10,
  );

  // cb_competition
  setCookie(
    "cb_competition",
    document.getElementById("text_competition").textContent,
    10,
  );

  // nv_competition
  setCookie(
    "nv_competition",
    document.getElementById("select_competition").value,
    10,
  );

  // next_comp
  setCookie(
    "next_competition",
    document.getElementById("box_next_competition").checked,
    10,
  );

  // q_next_comp
  setCookie(
    "nv_next_comb",
    document.getElementById("q_next_competition").value,
    10,
  );
  //alert(document.cookie);
}

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  //document.cookie = document.cookie + cname + "=" + cvalue + ";";
  //document.cookie = "roux=2;";
  //document.cookie = "caca=1;";
}
