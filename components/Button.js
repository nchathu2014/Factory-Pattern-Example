 class Button{
  constructor(name){
      this.name = name
  }

  create(text){
    const button = document.createElement('button');
    document.body.appendChild(button);
    button.value = text;
  }
}