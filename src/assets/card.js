export default class Card {
  constructor(id, enText, ruText, marked = false) {
    this.id = id;
    this.enText = enText;
    this.ruText = ruText;
    this.marked = marked;
  }
}
