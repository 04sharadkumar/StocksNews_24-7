export function Dialog({ title, open, onClose, children }) {
    if (!open) return null;
  
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-5 rounded-lg shadow-lg w-96">
          <h2 className="text-xl font-bold mb-4">{title}</h2>
          {children}
          <button onClick={onClose} className="mt-4 p-2 bg-red-500 text-white rounded">
            Close
          </button>
        </div>
      </div>
    );
  }
  
  // Ensure DialogContent is exported
  export function DialogContent({ children }) {
    return <div className="mt-2">{children}</div>;
  }
  