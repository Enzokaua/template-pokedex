const statsView = document.getElementById('stats')
statsView.style.display = 'block'
function viewTab(name) {
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  const view = document.getElementById(name)
  view.style.display = 'block'
}