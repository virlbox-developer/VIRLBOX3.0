import { useEffect, useMemo, useRef } from "react";

export type LightboxAction = { label: string; href: string };

export type LightboxItem =
  | {
      type: "image";
      src: string;
      title?: string;
      actions?: LightboxAction[];
    }
  | {
      type: "iframe";
      src: string;
      title: string;
      actions?: LightboxAction[];
    };

export default function Lightbox({
  open,
  item,
  onClose,
}: {
  open: boolean;
  item: LightboxItem | null;
  onClose: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const lastFocusedRef = useRef<HTMLElement | null>(null);

  const focusables = useMemo(() => {
    const panel = panelRef.current;
    if (!panel) return [];
    return Array.from(
      panel.querySelectorAll<HTMLElement>(
        'button,[href],input,select,textarea,[tabindex]:not([tabindex="-1"])'
      )
    ).filter((el) => !el.hasAttribute("disabled"));
  }, [open]);

  useEffect(() => {
    if (!open) return;

    lastFocusedRef.current = document.activeElement as HTMLElement;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key !== "Tab") return;

      const list = focusables.length ? focusables : [closeBtnRef.current!].filter(Boolean);
      if (!list.length) return;

      const first = list[0];
      const last = list[list.length - 1];
      const active = document.activeElement as HTMLElement;

      if (e.shiftKey) {
        if (active === first || !panelRef.current?.contains(active)) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (active === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      lastFocusedRef.current?.focus?.();
    };
  }, [open, onClose, focusables]);

  if (!open || !item) return null;

  return (
    <div className="vb-lightbox" role="dialog" aria-modal="true" aria-label={item.title ?? "Media viewer"}>
      <div className="vb-lightbox-backdrop" onClick={onClose} />

      <div className="vb-lightbox-panel" ref={panelRef}>
        <button ref={closeBtnRef} className="vb-lightbox-close" onClick={onClose} aria-label="Close">
          ×
        </button>

        <div className="vb-lightbox-body">
          {item.type === "image" ? (
            <img className="vb-lightbox-media" src={item.src} alt={item.title ?? "Expanded media"} />
          ) : (
            <iframe
              className="vb-lightbox-media"
              src={item.src}
              title={item.title}
              allow="autoplay; fullscreen; picture-in-picture"
            />
          )}
        </div>

        {(item.title || (item.actions && item.actions.length > 0)) && (
          <div className="vb-lightbox-footer">
            <div className="vb-lightbox-title">{item.title}</div>
            <div className="vb-lightbox-actions">
              {item.actions?.map((a) => (
                <a key={a.href} className="vb-btn-outline vb-btn-sm" href={a.href} target="_blank" rel="noreferrer">
                  {a.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
