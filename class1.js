class Person {
    #secret;
  
    constructor(name, secret) {
      this.name = name;
      this.#secret = secret;
    }
  
    revealSecret() {
      return this.#secret;
    }
  }

  class Male extends Person {

    constructor(name, value){
        super(name, value);
    }
    gender(){
        console.log(`I'm a male and my name is ${this.name} and I ${super.revealSecret()}`);
    }
  }
  
  const john = new Person("John", "Loves JavaScript");
  console.log(john.revealSecret()); // Loves JavaScript
  //console.log(john.#secret); // Syntax Error: Private field '#secret' must be declared in an enclosing class

  const roy = new Male("Roy","Loves to eat");
  roy.gender();
  //console.log(roy.revealSecret()); 
  