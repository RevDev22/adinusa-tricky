let url = location.href;
let formdata = $('form').serializeArray();
let data = {};

$.each(formdata, (i,e) => {
  data[e.name] = e.value;
});

$.ajax({
  url: url,
  method: 'POST',
  data: data,
  success: res => console.log(res)
});
