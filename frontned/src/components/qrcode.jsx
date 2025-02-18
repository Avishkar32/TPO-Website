import { useState } from 'react';
import axios from 'axios';

const QRCodeGenerator = () => {
  const [qrCode, setQrCode] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const generateQRCode = async () => {
    setIsLoading(true);
    const data ={"data":"http://127.0.0.1:5000/api/events/markattendance/678a7504d953867a9956aee5/673e771179f10c83b76d658b"};
        
    try {
      const response = await axios.post('http://127.0.0.1:5000/api/qr/generateqr', data);
      if (response.data.status === 'success') {
        setQrCode(response.data.data.qrCode); // Correctly access qrCode in the response
        setError('');
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      setError('Failed to generate QR code');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-h-full bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 bg-[url('https://i.imgur.com/qIufhof.png')] bg-cover">
      <div className="max-w-3xl mx-auto max-h-full">
        {/* Ticket Container */}
        <div className="bg-[#1a1a1a] rounded-lg shadow-2xl overflow-hidden border-2 border-[#c4a747] p-6">
          {/* Ticket Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-medieval text-[#c4a747] tracking-wider">
              House Stark of Winterfell
            </h1>
            <div className="text-gray-400 mt-2 font-serif">
              Summoned by the Hand of the King
            </div>
          </div>

          {/* Ticket Content */}
          <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
            {/* QR Code Section */}
            <div className="flex-1">
              {isLoading ? (
                <div className="flex justify-center items-center h-48">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#c4a747]" />
                </div>
              ) : qrCode ? (
                <div className="flex justify-center">
                  <div className="p-4 bg-[#2a2a2a] rounded-lg border-2 border-[#c4a747]">
                    <img
                      src={qrCode}
                      alt="QR Code"
                      className="w-48 h-48 object-contain"
                    />
                  </div>
                </div>
              ) : (
                <div className="h-48 flex items-center justify-center border-2 border-dashed border-[#c4a747] rounded-lg">
                  <p className="text-gray-400">The Raven's Message Awaits</p>
                </div>
              )}
            </div>

            {/* Ticket Details */}
            <div className="flex-1 text-center md:text-left">
              <div className="space-y-4 text-[#c4a747]">
                <div className="border-b border-[#c4a747] pb-2">
                  <h3 className="text-lg font-medieval">Bearer of this Scroll</h3>
                  <p className="text-gray-400 font-serif">Lord John Snow</p>
                </div>
                <div className="border-b border-[#c4a747] pb-2">
                  <h3 className="text-lg font-medieval">Great Hall Assembly</h3>
                  <p className="text-gray-400 font-serif">Winter Solstice Feast</p>
                </div>
                <div>
                  <h3 className="text-lg font-medieval">Seat of Honor</h3>
                  <p className="text-gray-400 font-serif">High Table, North Wing</p>
                </div>
              </div>
            </div>
          </div>

          {error && (
            <div className="mt-4 text-red-500 text-sm text-center">
              {error}
            </div>
          )}

          <button
            onClick={generateQRCode}
            disabled={isLoading}
            className="mt-8 w-full bg-[#c4a747] text-gray-900 py-3 px-4 rounded-lg hover:bg-[#d4b757] disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 font-medieval text-lg"
          >
            {isLoading ? 'Summoning the Ravens...' : 'Generate Royal Summons'}
          </button>

          {/* Decorative Elements */}
          <div className="mt-6 text-center text-[#c4a747] text-xs font-serif">
            ⚔️ Sealed by the Order of the Seven Kingdoms ⚔️
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRCodeGenerator;