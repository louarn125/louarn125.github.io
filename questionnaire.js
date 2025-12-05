let ready_htpp_request = false;
let xml_doc;

function flip_flop_name(name) {
  if (document.getElementById("box_" + name).checked) {
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

function append_childs(name_of_parent, elements_name) {
  // console.log("appenning");
  // console.log(name_of_parent, ":", document.getElementById(name_of_parent));
  for (
    let idx_xml_question = 0;
    idx_xml_question < xml_doc.getElementsByTagName(elements_name).length;
    idx_xml_question++
  ) {
    console.log(xml_doc.getElementsByTagName(elements_name)[idx_xml_question]);
    document.getElementById(name_of_parent).innerHTML =
      document.getElementById(name_of_parent).innerHTML +
      "<option id=" +
      idx_xml_question +
      ">" +
      xml_doc
        .getElementsByTagName(elements_name)
        [idx_xml_question].getElementsByTagName("nom")[0].innerHTML +
      " </option>";
  }
}

function load_xml_file(page) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      // j'ai un truc
      ready_htpp_request = true;
      xml_doc = xmlhttp.responseXML.getElementsByTagName("data")[0];
      init(page);

      //create_exercice(1000, ["haut"], 1);
    }
  };
  xmlhttp.open("GET", "https://louarn125.github.io/data.xml", true);
  xmlhttp.send();
}
function init(page) {
  // dynamic_charge_all();
  if (page == "questionnaire.html") {
    dynamic_charge_all();
    append_childs("select_q_sport_pratique", "sport"); //et similaire si autre bdd pour réponse aux qcm
  } else if (page == "exercices.html") {
    for (
      let idx_xml_question = 0;
      idx_xml_question < xml_doc.getElementsByTagName("muscle").length;
      idx_xml_question++
    ) {
      console.log(xml_doc.getElementsByTagName("muscle").length);
      document.getElementById("select_groupe_muscu").innerHTML =
        document.getElementById("select_groupe_muscu").innerHTML +
        "<option id=" +
        idx_xml_question +
        ">" +
        xml_doc.getElementsByTagName("muscle")[idx_xml_question].innerHTML +
        " </option>";
    }
  }
}

function dynamic_change(name) {
  localStorage.setItem(
    "_text_" + name,
    document.getElementById("text_" + name).value,
  );
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
        flip_flop_name(better_stored_value.slice(4));
      } else if (better_stored_value.startsWith("text_")) {
        document.getElementById(better_stored_value).value =
          localStorage.getItem(stored_value);
      }
    }
  }
}

function load_page(page) {
  load_xml_file(page);
  document.cookie += ";"; // pour que la fonction marche bien tqt
}

function encookization(page) {
  //document.cookie = newCookie;
  if (page == "questionnaire.html") {
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
      "competition", //document.cookie = document.cookie + cname + "=" + cvalue + ";";
      //document.cookie = "roux=2;";
      //document.cookie = "caca=1;";
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
  } else if (page == "exercices") {
    setCookie(
      "muscles",
      document.getElementById("select_groupe_muscu").value,
      10,
    );

    setCookie("equipement", document.getElementById("temp_dispo").value, 10);
  }

  //alert(document.cookie);
}

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
