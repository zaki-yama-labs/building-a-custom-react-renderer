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
    console.log(type, props);
  },

  createTextInstance(
    text,
    rootContainerInstance,
    hostContext,
    internalInnstanceHandle,
  ) {},
    
  getRootHostContext() {},

  prepareForCommit() {},
  resetAfterCommit() {},

  getChildHostContext() {},

  appendChildToContainer() {},
  appendInitialChild() {},
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
