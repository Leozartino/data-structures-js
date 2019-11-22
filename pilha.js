function Pilha() {
  this.index = 0;
  this.storage = {};

  /* Em JavaScript , um objeto é um conjunto de pares chave e valor .
  Para adicionar um valor à pilha , usaremos a variável index como a chave do objeto storage ,
  e value será o seu valor . */
  this.insertPilha = value => {
    this.storage[this.index] = value;
    this.index += 1;
  };

  this.removePilha = () => {
    if (this.index > 0) {
      this.index -= 1;
      const result = this.storage[this.index];
      delete this.storage[this.index];
      return result;
    }
    return 'Não há itens na pilha';
  };

  this.sizePilha = () => this.index;
  this.isEmpty = () => this.index === 0;
  this.showPilha = () => this.storage;
  this.clearPilha = () => {
    this.index = 0;
    this.storage = {};
  };
  this.peekPilha = () => this.storage[this.index - 1];
}

const p = new Pilha();

p.insertPilha(5);
p.insertPilha(7);
p.insertPilha(8);
p.insertPilha(9);
p.insertPilha(7);

console.log(p.showPilha());

p.removePilha();
p.removePilha();
p.removePilha();
p.removePilha();
p.removePilha();


console.log(p.showPilha());

console.log(p.peekPilha());

console.log(p.sizePilha());

console.log(p.isEmpty());
