$.each($('.uk-accordion-content[aria-hidden=false] ul li a'), (i,e) => {
  let text = $(e).text();
  text = text.toLowerCase().replaceAll(' ', '-');
  let url = 'https://course.adinusa.id/sections/' + text;
  console.log(url);
})
