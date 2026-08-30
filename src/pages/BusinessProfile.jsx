// pages/BusinessProfile.jsx
import { useEffect } from 'react';

const BusinessProfile = () => {
  useEffect(() => {
    window.location.href = '/pb.pdf';
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#15202a]">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#c89a60] mx-auto mb-4"></div>
        <p className="text-white/70">Redirecting to Business Profile...</p>
      </div>
    </div>
  );
};

export default BusinessProfile;