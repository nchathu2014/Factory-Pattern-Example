 class Button{
  create(text){
    const button = document.createElement('button');
    document.body.appendChild(button);
    button.innerText = text;
  }
}

 class Label{
  create(text){
    const button = document.createElement('label');
    document.body.appendChild(button);
    button.innerText = text;
  }
}

class ElementFactory{
  create(type,name){
    switch(type){
       case 'BUTTON': return new Button(name);break;
       case 'LABEL': return new Label(name);break;
    }
    
  }
}

function handleOnChange(){
const selValue = document.getElementById('select-box').value
if(selValue === 'BUTTON'){
const btn = ef.create("BUTTON");
btn.create("I am a button")
}

if(selValue === 'LABEL'){
const lbl = ef.create("LABEL");
lbl.create('I am a label');
}

}

const ef = new ElementFactory();






