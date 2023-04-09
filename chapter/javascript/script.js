  /* const clickHandle = (node) => {
  let value = node.getAttribute("class") || "";
  value = value === "" ? "clicked" : "";
  node.setAttribute("class", value);
}; */

/* $(document).ready(function () {
  $("h1").prepend('<span class="node">-</span>');
  $("h1").click(function () {
    let node = $(this).children(".node");
    $(this)
      .next()
      .fadeToggle(500, "swing", function () {
        let mark = node.text();
        mark = mark === "-" ? "+" : "-";
        node.text(mark);
      });
  });
}); */

$(function(){
  let params = getParams();
  for(let parName in params){
    let row = $("<tr>").append($('<td>').html(parName)).append($('<td>').html(params[parName]));
    $('tbody').append(row);
  }
  $('#back').attr('href', params['formcaller']);
});

const getParams = () => {
  let params = {};
  let query = window.location.search.substring(1);
  if(query){
    query = query.substring(1);
    let queryArr = query.split("&");
    for(let i = 0; i < queryArr.length; i++){
      let pair = queryArr[i].split("=");
      params[pair[0]] = pair[1];
    }
  }
  return params;
}