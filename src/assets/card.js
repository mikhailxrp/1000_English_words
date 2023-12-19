export default class Card {
  constructor(id, en_text, ru_text, marked = false) {
    this.id = id;
    this.en_text = en_text;
    this.ru_text = ru_text;
    this.marked = marked;
  }
}
