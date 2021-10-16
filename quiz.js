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

function sendAjax(ind,text){
  if(ind >= urls.length){
    location.href = urls[urls.length - 1];
  }
  $.ajax({
    url: urls[ind],
    method: 'GET',
    success: res => {
      if(res.includes(text)){
        console.log(res);
      }else{
        sendAjax(ind + 1,text);
      }
    }
  });
}

sendAjax(0,text);
