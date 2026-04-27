/// <reference types="vite/client" />

// Re-export React's JSX namespace globally so JSX.Element is available without
// importing React in every file (compatible with @types/react v19).
declare namespace JSX {
  type Element = import("react").JSX.Element;
  type ElementClass = import("react").JSX.ElementClass;
  type ElementAttributesProperty = import("react").JSX.ElementAttributesProperty;
  type ElementChildrenAttribute = import("react").JSX.ElementChildrenAttribute;
  type LibraryManagedAttributes<C, P> = import("react").JSX.LibraryManagedAttributes<
    C,
    P
  >;
  interface IntrinsicAttributes extends import("react").JSX.IntrinsicAttributes {}
  interface IntrinsicClassAttributes<T>
    extends import("react").JSX.IntrinsicClassAttributes<T> {}
  interface IntrinsicElements extends import("react").JSX.IntrinsicElements {}
}
