const elm = $('.uk-accordion-content[aria-hidden=false] ul li a');
let urls = [];

$.each(elm, (i,e) => {
  let text = $(e).text();
  text = text.toLowerCase().trim().replaceAll(' ', '-').replaceAll('\n', '').replaceAll(',','');
  let url = 'https://course.adinusa.id/sections/' + text;
  if(text.includes('kuis') || text.includes('lab')){
    return false;
  }
  urls[i] = url;
});

sendAjax(0);

function sendAjax(ind){
  if(ind >= urls.length){
    return false;
  }
  $.ajax({
    url: urls[ind],
    method: 'GET',
    success: res => {
      sendAjax(ind + 1);
    }
  });
}
