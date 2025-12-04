balise={}
balise["sport"] =  ["nom", "equipe", "muscle"]
balise["muscle"] = ["nom","groupe"]
balise["mouvement"] =  ["nom", "groupe","matériel","description","path" ]
balise["exercice"] =  ["nom", "muscle","mouvement"]

def generate_xml(balise,data_path):
    key = list(balise.keys())

    data = open(data_path,encoding="utf-8")
    data = data.read()
    data = data.split(";")
    xml = "<?xml version='1.0' encoding='UTF-8'?>\n<data>\n"
    balise_cursor = 0
    for table in data:
        

        tables_list = table.split("\n")
        for ligne in tables_list:
            if ligne != "":
                xml +="\t<" + key[balise_cursor] + ">\n"
                element_cursor = 0
                elements = ligne.split("|")

                for element in elements:
                    values = element.split("/")
                    for value in values:
                        xml +="\t\t<" + balise[key[balise_cursor]][element_cursor] + ">"+ value + "</" + balise[key[balise_cursor]][element_cursor] + ">\n"
                    element_cursor +=1


                xml +="\t</" + key[balise_cursor] + ">\n"
        balise_cursor += 1
    xml += "<data>"
    return xml
xml = generate_xml(balise,"data.txt")

file = open("data.xml","w",encoding="utf-8")
file.write(xml)
