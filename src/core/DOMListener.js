import {capitalize} from './utils';

export class DOMListener {
  constructor($root, listeners = []) {
    if (!$root) throw new Error('No $root provider for DOMListener');
    this.$root = $root;
    this.listeners = listeners;
  }
  initDOMListeners() {
    console.log(this);
    this.listeners.forEach((listener) => {
      const method = getMethodName(listener);
      if (!this[method]) {
        const name = this.name || '';
        throw new Error(`Method ${method} is not defined in ${name} Component`);
      }
      this.$root.on(listener, this[method].bind(this));
    });
  }
  removeDOMListeners() {}
}

function getMethodName(eventName) {
  // input --> onInput
  return 'on' + capitalize(eventName);
}
