// eslint-disable-next-line max-classes-per-file
class Command {
  constructor(execute, undo, value) {
    this.execute = execute
    this.undo = undo
    this.value = value
  }
}

export const localStore =
  JSON.parse(localStorage.getItem('history')) || []
function add(x, y) {
  localStore.push({
    firstValue: x,
    memory: y,
    operator: '+',
  })
  return Number.isNaN(x + y) ? 0 : x + y
}
function sub(x, y) {
  localStore.push({
    firstValue: x,
    memory: y,
    operator: '-',
  })
  return Number.isNaN(x - y) ? 0 : x - y
}
function mul(x, y) {
  localStore.push({
    firstValue: x,
    memory: y,
    operator: '*',
  })
  return Number.isNaN(x * y) ? 0 : x * y
}
function div(x, y) {
  localStore.push({
    firstValue: x,
    memory: y,
    operator: '/',
  })
  return Number.isNaN(x / y) ? 0 : x / y
}

function rem(x, y) {
  localStore.push({
    firstValue: x,
    memory: y,
    operator: '%',
  })
  return Number.isNaN(x % y) ? 0 : x % y
}

export class AddCommand extends Command {
  constructor(value) {
    super(add, Number(value))
  }
}
export class SubCommand extends Command {
  constructor(value) {
    super(sub, Number(value))
  }
}
export class MulCommand extends Command {
  constructor(value) {
    super(mul, Number(value))
  }
}

export class DivCommand extends Command {
  constructor(value) {
    super(div, Number(value))
  }
}

export class RemCommand extends Command {
  constructor(value) {
    super(rem, Number(value))
  }
}
