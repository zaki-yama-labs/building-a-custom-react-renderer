import ReactReconciler from 'react-reconciler';

let reconciler = ReactReconciler({
  /* configuration for how to talk to the host env */
  /* aka "host config" */
  supportsMutation: true,

  createInstance(
    type,
    props,
    rootContainerInstance,
    hostContext,
    internalInnstanceHandle,
  ) {
    let el = document.createElement(type);
    if (props.className) el.className = props.className;
    if (props.src) el.src = props.src;
    return el;
  },

  createTextInstance(
    text,
    rootContainerInstance,
    hostContext,
    internalInnstanceHandle,
  ) {
    return document.createTextNode(text);
  },
    
  appendChildToContainer(container, child) {
    console.log('appendChildToContainer', container, child);
    container.appendChild(child);
  },

  appendChild(parent, child) {
    console.log('appendChild', parent, child);
  },

  appendInitialChild(parent, child) {
    console.log('appendInitialChild', parent, child);
    parent.appendChild(child);
  },

  getRootHostContext() {},

  prepareForCommit() {},
  resetAfterCommit() {},

  getChildHostContext() {},

  finalizeInitialChildren() {},

  shouldSetTextContent() {
  }
});

let ReactDOMMini = {
  render(whatToRender, div) {
    let container = reconciler.createContainer(div, false, false);
    reconciler.updateContainer(whatToRender, container, null, null);
  }
};

export default ReactDOMMini;
