var person = {
    "SNILS 1": ["Иванов","Иван", "Иванович", 22, "июня", 1941, "м", "медотвод"],
    "SNILS 2": ["Джугашвили", "Иосиф", "Виссарионович","jule",  17,  1900, "м", "исполнено"],
    "SNILS 3": ["Соловьев", "Владимир", "Рудольфович", 6, "may",  1968, "м", "исполнено"],
    "SNILS 4": ["Александр", "Рдионович", "Бородач", 1, , "April", 1999, "м", "назначено"],
    "SNILS 5": ["Жанна", "Иоановна", "Д'арк", 3, "December",  1380, "ж", "медотвод"],

            };
            console.log(person);
            let SNILS;
            var FirstFunction = function (person,SNILS) {
                SNILS=prompt("Введите SNILS пациента", SNILS);
                infoname=person[SNILS];
                //console.log(infoname);
                alert("информация о пациенте"+ infoname );
                statusPriv = person[SNILS][7];
                console.log(statusPriv);
                };
            var SecondFunction = function (statusPriv, infoname) {
                //statusPriv = person[SNILS][7];
                // console.log(statusPriv);
                if (statusPriv === "исполнено"){
                    alert("Отказано в прививке пациенту" + infoname);
                } else if ( statusPriv === "медотвод") {
                    alert("Отказано в прививке пациенту" + infoname);
                } else{
                    alert("Исполнить прививку пациенту" + infoname);
                }
            }
            var ForSecond = FirstFunction (person,SNILS);
            SecondFunction(statusPriv,infoname);
            
            while (confirm("Продолжить проверку прививочного статуса?")){
                ForSecond = FirstFunction(person,SNILS);
                SecondFunction(statusPriv,infoname);
        
            }