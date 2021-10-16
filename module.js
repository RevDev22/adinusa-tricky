const elm = $('.uk-accordion-content[aria-hidden=false] ul li a.not-active');
let urls = [];

$.each(elm, (i,e) => {
  let text = $(e).text();
  text = text.toLowerCase().trim().replaceAll(' ', '-').replaceAll('\n', '').replaceAll(',','').replaceAll('/','').replaceAll('.','').replaceAll('(','').replaceAll(')','');
  let url = 'https://course.adinusa.id/sections/' + text;
  if(text.includes('kuis') || text.includes('lab')){
    return false;
  }
  urls[i] = url;
});

sendAjax(0);

function sendAjax(ind){
  if(ind >= urls.length){
    location.href = urls[urls.length - 1];
  }
  $.ajax({
    url: urls[ind],
    method: 'GET',
    complete: res => {
      sendAjax(ind + 1);
    }
  });
}
