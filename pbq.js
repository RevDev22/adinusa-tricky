let selects = $('select');
let simulation_code = $('button:contains("Finish")').attr('onclick').split("'")[1];
let url = 'https://scoring.adinusa.id/simulation/';
let question = [];

$.each(selects, (i,e) => {
  question[i] = {
    answer: 1
  };
});

function sendAnswer(again){
  if(again){
    $.ajax({
      url: url,
      method: 'POST',
      data: {
        simulation_code: simulation_code,
        pattern_user: getPattern(),
      },
      success: res => {
        if(res != 'true'){
          let response = res.split(',');
          let count = 0;
          $.each(question, (i,e) => {
            let index = (i * 1) + 1;
            if(response.includes('' + index)){
              count += 1;
              question[i].answer = (question[i].answer * 1) + 1;
            }
          });
          console.log(count + ' question to go');
          sendAnswer(true);
        }else{
          sendAnswer(false);
          alert('success');
        }
      }
    });
  }else{
    return false;
  }
}

function getPattern(){
  let pattern = '';
  $.each(question, (i,e) => {
    pattern += e.answer;
  });
  return pattern;
}

sendAnswer(true);
