/**
 * Renders a modal popup overlay.
 *
 * The popup is conditionally rendered based on the `show` prop and
 * displays a title, arbitrary content, and a close button.
 *
 * @param {{
 *   show: boolean,
 *   title: string,
 *   children: React.ReactNode,
 *   onClose: function(): void
 * }} props Component props.
 * @param {boolean} props.show Whether the popup should be visible.
 * @param {string} props.title Title text displayed at the top of the popup.
 * @param {React.ReactNode} props.children Content rendered inside the popup body.
 * @param {function(): void} props.onClose Callback invoked when the popup is closed.
 * @return {JSX.Element|null} The rendered popup overlay, or null if not visible.
 */

export default function Popup({ show, title, children, onClose }) {
  if (!show) return null;

  return (
    <div className="overlay">
      <div className="popup">
        <h2>{title}</h2>
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
