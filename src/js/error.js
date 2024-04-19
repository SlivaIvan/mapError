export default class ErrorRepository {
  constructor() {
    this.errorMap = new Map();
  }

  addError(code, discription) {
    this.errorMap.set(code, discription);
  }

  translate(code) {
    const description = this.errorMap.get(code);
    return description !== undefined ? description : 'Unknown error';
  }
}
