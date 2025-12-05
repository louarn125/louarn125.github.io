let ready_htpp_request = false;
let xml_doc;


function load_xml_file() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            // j'ai un truc
            ready_htpp_request = true;
            xml_doc = xmlhttp.responseXML.getElementsByTagName("data")[0];
            create_exercice(1000, ["haut"], 0)
        }
    };
    xmlhttp.open("GET", "https://louarn125.github.io/data.xml", true);
    xmlhttp.send();
}


function trie_mouvement(groupes, equipement) {
    let mouv_posible = [];
    for (
        let idx_xml_question = 0;
        idx_xml_question < xml_doc.getElementsByTagName("mouvement").length;
        idx_xml_question++
    ) {
        if (equipement >= xml_doc.getElementsByTagName("mouvement")[idx_xml_question].getElementsByTagName("matériel")[0].textContent) {
            for (groupe in groupes) {
                console.log("groupe requis: " + groupes[groupe]);
                for (
                    let idx_xml_groupe = 0;
                    idx_xml_groupe < xml_doc.getElementsByTagName("mouvement")[idx_xml_question].getElementsByTagName("groupe").length;
                    idx_xml_groupe++
                ) {
                    console.log("groupe:", xml_doc.getElementsByTagName("mouvement")[idx_xml_question].getElementsByTagName("groupe")[idx_xml_groupe].textContent);
                    if (groupes[groupe] == xml_doc.getElementsByTagName("mouvement")[idx_xml_question].getElementsByTagName("groupe")[idx_xml_groupe].textContent) {
                        mouv_posible.push(xml_doc.getElementsByTagName("mouvement")[idx_xml_question]);
                    }
                }

            }

        }
    }
    console.log(mouv_posible);
    return mouv_posible;
}
function generate_exercice(d_total, mouvement_possible) {
    temps_exo = d_total % (mouvement_possible.length - 1)
    for (mouvement in mouvement_possible) {
        mouvement.getElementsByTagName("groupe")
    }
}

function create_exercice(d_total, groupes, equipement) {
    mouv_posible = trie_mouvement(groupes, equipement)


}
function load_page() {
    load_xml_file();
}
