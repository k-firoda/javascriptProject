
if (document.readyState !== 'loading') {
    console.log("ready!");
    ready();
} else {
    document.addEventListener('DOMContentLoaded', ready);
}

function ready() {
    var accordion = document.getElementsByTagName("dt");

    for (var i = 0; i<accordion.length; i++){
        accordion[i].addEventListener('click', function(){(function () {
            const headings = document.querySelectorAll(".accordion__heading");
            const triggers = [];
            const accordionContents = document.querySelectorAll(".accordion__copy");
            const multiselect = document.getElementById("multiselect");
            const copyOpenClass = "accordion__copy--open";
          
            headings.forEach((h, i) => {
              let btn = h.querySelector("button");
              triggers.push(btn);
              let target = h.nextElementSibling;
              btn.onclick = () => {
                let expanded = btn.getAttribute("aria-expanded") === "true";
                if (expanded) {
                  closeItem(target, btn);
                } else {
                  openItem(target, btn);
                }
              };
            });
            function closeAllExpandedItems() {
              const expandedTriggers = triggers.filter(
                (t) => t.getAttribute("aria-expanded") === "true"
              );
              const expandedCopy = Array.from(accordionContents).filter((c) =>
                c.classList.value.includes(copyOpenClass)
              );
              expandedTriggers.forEach((trigger) => {
                trigger.setAttribute("aria-expanded", false);
              });
              expandedCopy.forEach((copy) => {
                copy.classList.remove(copyOpenClass);
                copy.style.maxHeight = 0;
                copy.style.padding = "0 1.5rem 0 1.5rem";
              });
            }
            function closeItem(target, btn) {
              if (!multiselect.checked) {
                closeAllExpandedItems();
              } else {
                btn.setAttribute("aria-expanded", false);
                target.classList.remove(copyOpenClass);
                target.style.maxHeight = 0;
                target.style.padding = "0 1.5rem 0 1.5rem";
              }
            }
            function openItem(target, btn) {
              if (!multiselect.checked) {
                closeAllExpandedItems();
              }
              btn.setAttribute("aria-expanded", true);
              target.classList.add(copyOpenClass);
              target.style.maxHeight = target.scrollHeight + "px";
              target.style.padding = "1rem 1.5rem 2rem 1.5rem";
            }
            setTimeout(() => triggers[0].click(), 750);
          })();
          
            accordionClick(event);
        
        });
    }
}

var accordionClick = (eventHappened) => {
    console.log(eventHappened);
    var targetClicked =event.target;
    console.log(targetClicked);
    var classClicked = targetClicked.classList;
    console.log("target clicked: " + targetClicked);
    console.log(classClicked[0]);
    while ((classClicked[0] !="description-title")){
        console.log("parent element: " + targetClicked.parentElement);
        targetClicked = targetClicked.parentElement;
        classClicked = targetClicked.classList;
        console.log("target clicked while in loop:" + targetClicked);
        console.log("class clicked while in loop: " + classClicked);
    }
    var description = targetClicked.nextElementSibling;
    console.log(description);
    var expander = targetClicked.children[0];
    if (description.style.maxHeight){
        description.style.maxHeight = null;
        expander.innerHTML = "&#10133;"
        
    }
    else {
        var allDescriptions = document.getElementsByTagName("dd");
        for (var i = 0; i < allDescriptions.length; i++){
            console.log("current description: " + allDescriptions[i]);
            if (allDescriptions[i].style.maxHeight){
                console.log("there is a description already open");
                allDescriptions[i].style.maxHeight = null;
                allDescriptions[i].previousElementSibling.children[0].innerHTML = "&#10133;"
            }
        }
        description.style.maxHeight = description.scrollHeight + "px";
        expander.innerHTML = "&#10134;";
        
    }
}