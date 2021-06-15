// function $$(element){
//     return{
//         html:function(content){
//             const el = document.querySelector(element);
//             console.log(el, '====>')
//             el.innerHTML = content;
//             return;
//         }
//     }
// }


class MyQuery {
  constructor(selector) {
    const el = document.querySelector(selector);
    this.el = el;
  }

  html(content) {
    this.el.innerHTML = content;
  }
}

function $$(selector) {
  return new MyQuery(selector);
}

$$('button.test').html('Next step');

// the benifit of using the class method, instead of new object function.
const a = $$('button.test').html;
const b = $$('button.test').html;
console.log(a === b);


//-------- event listener