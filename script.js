function openmenu(){
  document.getElementById("sidemenu").style.right = "0";
}

function closemenu(){
  document.getElementById("sidemenu").style.right = "-200px";
}

function opentab(tabname) {
  const tablinks = document.getElementsByClassName("tl");
  const tabcontents = document.getElementsByClassName("titlecontent");

  for (let tab of tablinks) tab.classList.remove("active");
  for (let content of tabcontents) content.classList.remove("active-title");

  event.currentTarget.classList.add("active");
  document.getElementById(tabname).classList.add("active-title");
}
