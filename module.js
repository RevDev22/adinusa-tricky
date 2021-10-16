const elm = $('.uk-accordion-content[aria-hidden=false] ul li a.not-active');
let urls = [];

$.each(elm, (i,e) => {
  let text = $(e).text();
  text = text.toLowerCase().trim().replaceAll(' ', '-').replaceAll('\n', '').replaceAll(',','').replaceAll('/','').replaceAll('.','').replaceAll('(','').replaceAll(')','');
  if(text.includes('kuis')){
    let chapter = text.split('-')[1];
    text = 'quiz-sec-601-chapter';
    chapter = ("0" + chapter).slice(-2);
    text += chapter;
  }else if(text.includes('lab')){
    let chapter = text.split('-')[1].replaceAll(':','');
    text = 'sec-pbq-';
    chapter = ("0" + chapter).slice(-2);
    text += chapter;
  }
  let url = 'https://course.adinusa.id/sections/' + text;
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
    success: res => {
      sendAjax(ind + 1);
    },
    error: res => {
      urls[ind * 1] = urls[ind * 1] + '-1';
      sendAjax(ind);
    }
  });
}
