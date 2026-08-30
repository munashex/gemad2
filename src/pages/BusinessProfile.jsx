// BusinessProfile.jsx
import { PDFViewer } from '@monime/pdfio';
import '@monime/pdfio/style.css';

const BusinessProfile = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Header with download button */}
      <div className="bg-white border-b border-gray-200 px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold text-[#15202a]">Business Profile</span>
          <span className="text-xs text-gray-400 hidden sm:inline">| GEMAD</span>
        </div>
        <a
          href="/pb.pdf"
          download="GEMAD-Business-Profile.pdf"
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#c89a60] hover:bg-[#a06a32] text-white text-sm font-semibold rounded-lg transition-all duration-300 shadow-sm hover:shadow-md"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download PDF
        </a>
      </div>

      {/* PDF Viewer - Full width and height */}
      <div className="w-full h-[calc(100vh-72px)] bg-gray-100">
        <PDFViewer 
          src="/pb.pdf"
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default BusinessProfile;