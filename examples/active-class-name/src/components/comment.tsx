// import '../../../../../../../Users/Guilherme/AppData/Local/Microsoft/TypeScript/4.5/node_modules/@types/react';

type DefaultEvents = {
  [K in keyof GlobalEventHandlers]?: GlobalEventHandlers[K]
}
declare global {
  namespace React {
    interface HTMLAttributes<T> {
      class?: string
    }
    interface SVGAttributes<T> {
      class?: string
    }
    interface DOMAttributes<T> extends DefaultEvents { }
    interface Component<P = {}, S = {}, SS = any> {
      launch(): any
    }
  }
  namespace JSX {
    interface IntrinsicElements {
      // HTML
      a: JSX.IntrinsicElements['a'] & HTMLAnchorElement
    }
  }
}

class Comp extends React.Component {
  launch() {
      
  }
  render(): React.ReactNode {
    return false
  }
}