 let a = document.body.getElementsByTagName('div')[0]
// a.innerHTML= a.innerHTML + '<h1> i am big boss</h1>'

let div = document.createElement('div')
div.innerHTML= '<h1> i am big boss</h1>'
// a.append(div);
// a.prepend(div);\
// a.before(div);
// a.after(div);
a.replaceWith(div);
