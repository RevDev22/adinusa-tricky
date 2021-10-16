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
        pattern_user: getPattern()
      },
      success: res => {
        if(res != 'true'){
          $.each(question, (i,e) => {
            if(res.includes(i)){
              question[i].answer = (question[i].answer * 1) + 1;
            }
          });
          sendAnswer(true);
        }else{
          sendAnswer(false);
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
console.log(question);
sendAnswer(true);
