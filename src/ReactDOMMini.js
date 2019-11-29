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
    ['alt', 'className', 'href', 'rel', 'src', 'target'].forEach(k => {
      if (props[k]) el[k] = props[k];
    });

    if (props.onClick) {
      el.addEventListener('click', props.onClick);
    }

    if (props.bgColor) {
      el.style.backgroundColor = props.bgColor;
    }

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

  removeChildFromContainer(container, child) {
    console.log('removeChildFromContainer', container, child);
    container.removeChild(child);
  },
  removeChild(parent, child) {
    console.log('removeChild', parent, child);
    parent.removeChild(child);
  },
  insertInContainerBefore(container, child, before) {
    console.log('insertInContainerBefore', container, child);
    container.insertBefore(child, before);
  },
  insertBefore(parent, child, before) {
    console.log('insertBefore', parent, child);
    parent.insertBefore(child, before);
  },

  prepareUpdate(
    instance,
    type,
    oldProps,
    newProps,
    rootContainerInstance,
    currentHostContext,
  ) {
    let payload;
    if (oldProps.bgColor !== newProps.bgColor) {
      payload = { newBgColor: newProps.bgColor };
    }
    return payload;
  },
  commitUpdate(
    instance,
    uploadPayload,
    type,
    oldProps,
    newProps,
    finishedWork,
  ) {
    if (uploadPayload.newBgColor) {
      instance.style.backgroundColor = uploadPayload.newBgColor;
    }
  },

  finalizeInitialChildren() {},
  getChildHostContext() {},
  getPublicInstance() {},
  getRootHostContext() {},
  prepareForCommit() {},
  resetAfterCommit() {},
  shouldSetTextContent() {
    return false;
  }
});

let ReactDOMMini = {
  render(whatToRender, div) {
    let container = reconciler.createContainer(div, false, false);
    reconciler.updateContainer(whatToRender, container, null, null);
  }
};

export default ReactDOMMini;
