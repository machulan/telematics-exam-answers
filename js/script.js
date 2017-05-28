// <div class="part">
//     <div class="part-name">Общие принципы телематики</div>
//     <ol start=1>
//         <li class="item">
//             <p class="item-question">Что включает научно-техническая дисциплина телематика</p>
//             <p class="item-answer"></p>
//         </li>
//     </ol>
// </div>

var personNames = ["Аня Тепер", "Никита Мачула", "Саня Павкин", "Саня Евсеев", "Саня Суворов", 
"Поля Долгова", "Артем Рокитянский", "Дима Носов", "Миша Качанов", "Даша Павлова", "Никита Мирзоев",
"Рустан Рафиков", "Ирина Селина", "Никита Харламов", "Виктор Давыдов"];

var personLastQuestionNumbers = [12, 24, 36, 48, 60, 72, 84, 96, 108, 120, 132, 144, 156, 168, 175]; 

var personLabel = document.createElement("span");
personLabel.className = "label";

var personLabelContent = document.createTextNode("Аноним");
personLabel.appendChild(personLabelContent);

var parts = document.body.getElementsByClassName("part");

//var divs = document.body.childNodes;
//document.body.insertBefore(personLabel, divs[0]);
//var parts = document.body.children;
// for(var part in parts){
var curPerson = 0;
var curQuestionNumber = 0;

for(var i = 0; i < parts.length; i++){
    var part = parts[i];
    //var ol = part.childNodes[1];
    var ol = part.getElementsByTagName("ol")[0];
    var itemList = ol.getElementsByClassName("item");
    for(var j = 0; j < itemList.length; j++){
        var item = itemList[j];
        var itemQuestion = item.getElementsByClassName("item-question")[0];

        var oldPersonLabelContent = personLabel.firstChild;
        if(curQuestionNumber == personLastQuestionNumbers[curPerson])
            curPerson++;
        var personLabelContent = document.createTextNode(personNames[curPerson]);

        personLabel.replaceChild(personLabelContent, oldPersonLabelContent);
        item.insertBefore(personLabel.cloneNode(true), itemQuestion);
        //alert("j : " + j);
        curQuestionNumber++;
    }
    // for(var li in ol.childNodes){
    //     var label = personLabel.cloneNode(true);
    //     var pq = li.childNodes[0];
    //     li.insertBefore(label, pq);
    // }
}