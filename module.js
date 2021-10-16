const modules = $('.ukordion');
let urls = [];

$.each(modules, (i,e) => {
  let module = $(e).find('h4.text-gray-500');
  let sections = $(e).find('.uk-accordion-content ul li a.not-active');
  
  $.each(module,(a,b) => {
    let text = $(b).text();
    text = parseText(text);
    let url = 'https://course.adinusa.id/modules/' + text;
    urls.push(url);
  });
  
  $.each(sections, (a,b) => {
    let text = $(b).text();
    text = parseText(text);
    
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
    urls.push(url);
  });
});

sendAjax(0);

function parseText(string){
  return string.toLowerCase().trim().replaceAll(' ', '-').replaceAll('\n', '').replaceAll(',','').replaceAll('/','').replaceAll('.','').replaceAll('(','').replaceAll(')','');
}

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
      urls[(ind * 1) - 1] = urls[(ind * 1) - 1] + '-1';
      sendAjax(ind);
    }
  });
}
