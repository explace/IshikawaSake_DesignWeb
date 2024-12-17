import ReactDOM from 'react-dom';

const Portal = ({ children }) => {
  return ReactDOM.createPortal(
    <div className="fixed top-0 left-0 overflow-y-auto bg-white w-screen h-screen z-50">
      {children}
    </div>,
    document.body // Renders directly into <body>
  );
};

export default Portal;
