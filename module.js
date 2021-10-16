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

$.each(urls, (i,e) => {
  $.ajax({
    url: e,
    method: 'GET',
    success: res => {
      console.log(res);
    }
  });
  
  if(i + 1 == urls.length){
  }
});
