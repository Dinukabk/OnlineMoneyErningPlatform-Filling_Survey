export default function LoadingSpinner({ fullScreen = false }) {
  return (
    <div className={`loading-spinner ${fullScreen ? 'full-screen' : ''}`}>
      <div className="spinner"></div>
    </div>
  );
}