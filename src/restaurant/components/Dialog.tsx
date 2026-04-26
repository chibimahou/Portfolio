import { ReactNode, useRef } from "react";
import { useFocusTrap } from "../hooks/useFocusTrap";
import { useLockBodyScroll } from "../hooks/useLockBodyScroll";

interface DialogProps {
  isOpen: boolean;
  title: string;
  onClose: () => void;
  children: ReactNode;
}

export function Dialog({ isOpen, title, onClose, children }: DialogProps): JSX.Element | null {
  const ref = useRef<HTMLDivElement>(null);

  useLockBodyScroll(isOpen);
  useFocusTrap(ref, isOpen, onClose);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="overlay" onClick={onClose}>
      <div
        className="dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title"
        ref={ref}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="dialog-head">
          <h3 id="dialog-title">{title}</h3>
          <button className="icon-btn" onClick={onClose} aria-label="Close dialog">
            ×
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
