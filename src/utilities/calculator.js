import { localStore } from './commands'

export class Calculator {
  constructor() {
    this.current = 0
    this.history = []
  }
  execute(command) {
    this.current = command.execute(
      this.current,
      command.value,
    )
    this.history.push(command)
    localStorage.setItem(
      'history',
      JSON.stringify(localStore),
    )
  }
  undo() {
    var command = this.history.pop()
    this.current = command.undo(this.current, command.value)
  }
  setCurrent(value) {
    this.current = Number(value)
  }
  getValue() {
    return parseFloat(this.current.toFixed(3))
  }
  reset() {
    this.current = 0
    this.history = []
  }
}
