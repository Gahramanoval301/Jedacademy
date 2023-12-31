//! constructor cannot be a arrow function
function Animal(name, nick, age, voice) {
    this.name = name; //! vergul olmaz in constructors 
    this.nick = nick;
    this.age = age;
    this.voice = voice;
    this.makeVoice = () => {
        console.log(`${this.name} make voice ${this.voice}`)
    }
    //! object -> dede-baba function //! constructorda -> arrow--function

}
const aga = new Animal('aga', 'pisikaga', 6, 'meow');
const leman = new Animal('leman', 'dosan', 6, 'zzzz');
console.log(aga, leman);
aga.makeVoice();