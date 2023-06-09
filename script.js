let section = document.querySelectorAll("section");//we create an 'array' comporting 3 sections and all of its children

let firstChild2section = section[ 1 ].querySelector(':first-child');

    firstChild2section.classList.add("TheThird");//add a class to the (firstChild2section) first child et donc le h2."the third section ..."

let firstChild3section = section[ 2 ].querySelector(':first-child');//select 1st child of the section[ 1 ] et donc de la div.

    firstChild3section.firstElementChild.classList.add("TheSecond");//add a class to the div(firstChild3section) first child et donc le h2."the second section ..."


////////////////////////////////////////////
        //Time to switch the titles//
///////////////////////////////////////////


let title3 = document.querySelector(".TheSecond");
let title2 = document.querySelector(".TheThird");

    let tempContent = title2.innerHTML;

    title2.innerHTML = title3.innerHTML;

    title3.innerHTML = tempContent;



    