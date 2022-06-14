export default function Modal({ children, visible, onClose }) {
  const handleOnClose = () => {
    onClose();
  };

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-10"
      onClick={handleOnClose}
    >
      <div
        className="flex flex-col gap-5 justify-center bg-white p-14 rounded-xl"
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
