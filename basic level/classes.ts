class Typescript {
  version: string;

  constructor(version: string) {
    this.version = version;
  }

  info(name: string): string {
    return `[${name}]: Typescript version is ${this.version}`;
  }
}

class Car1 {
  readonly model: string;
  readonly numberOfWheels: number = 4;

  constructor(theModel: string) {
    this.model = theModel; // we can reassign model only in constructor
  }
}

class Car2 {
  readonly numberOfWheels: number = 4;
  constructor(readonly model: string) {}
}

// Modificators

class Animal {
  protected voice: string = '';
  public color: string = 'black';

  constructor() {
    this.go();
  }

  private go() {
    console.log('Go');
  }
}

class Cat extends Animal {
  public setVoice(voice: string): void {
    this.voice = voice;
  }
}

const cat = new Cat();
cat.setVoice('test');
console.log(cat.color);

// Abstract Classes and methods

abstract class Component {
  abstract render(): void;
  abstract info(): string;
}

class AppComponent extends Component {
  render(): void {
    console.log('Component on render');
  }

  info(): string {
    return 'String';
  }
}
