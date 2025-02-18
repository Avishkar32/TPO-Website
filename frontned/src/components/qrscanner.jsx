
// import React, { useState, useEffect } from 'react';
// import { Camera } from 'lucide-react';
// import { Html5QrcodeScanner } from 'html5-qrcode';

// const QRScanner = () => {
//   const [scannedCodes] = useState(new Set());
//   const [scanning, setScanning] = useState(false);
//   const [notification, setNotification] = useState(null);

//   useEffect(() => {
//     let scanner = null;

//     if (scanning) {
//       scanner = new Html5QrcodeScanner('reader', {
//         qrbox: {
//           width: 250,
//           height: 250,
//         },
//         fps: 5,
//       });

//       scanner.render(success, error);
//     }

//     function success(decodedText) {
//       if (!scannedCodes.has(decodedText)) {
//         scannedCodes.add(decodedText);
//         console.log('Marked:', decodedText);
        
//         setNotification({
//           type: 'success',
//           message: 'QR code scanned successfully'
//         });

//         // Optional: Stop scanning after successful read
//         if (scanner) {
//           scanner.clear();
//           setScanning(false);
//         }
//       } else {
//         setNotification({
//           type: 'error',
//           message: 'Sorry, QR code has already been used'
//         });
//       }

//       // Clear notification after 3 seconds
//       setTimeout(() => {
//         setNotification(null);
//       }, 3000);
//     }

//     function error(err) {
//       // Ignoring errors as they occur frequently during normal scanning
//       // console.warn(err);
//     }

//     return () => {
//       if (scanner) {
//         scanner.clear();
//       }
//     };
//   }, [scanning, scannedCodes]);

//   return (
//     <div className="p-4 max-w-md mx-auto">
//       <div className="mb-4 flex items-center justify-between">
//         <h2 className="text-xl font-bold">QR Scanner</h2>
//         <button
//           onClick={() => setScanning(!scanning)}
//           className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//         >
//           <Camera size={20} />
//           {scanning ? 'Stop Scanning' : 'Start Scanning'}
//         </button>
//       </div>
      
//       {notification && (
//         <div 
//           className={`mb-4 p-4 rounded-lg border ${
//             notification.type === 'success' 
//               ? 'bg-green-50 border-green-500 text-green-700'
//               : 'bg-red-50 border-red-500 text-red-700'
//           }`}
//         >
//           {notification.message}
//         </div>
//       )}
      
//       {scanning && (
//         <div className="border rounded p-4">
//           <div id="reader"></div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default QRScanner;

// import React, { useState, useEffect } from 'react';
// import { Camera } from 'lucide-react';
// import { Html5QrcodeScanner } from 'html5-qrcode';

// const QRScanner = () => {
//   const [scannedCodes] = useState(new Set());
//   const [scanning, setScanning] = useState(false);
//   const [notification, setNotification] = useState(null);

//   useEffect(() => {
//     let scanner = null;

//     if (scanning) {
//       scanner = new Html5QrcodeScanner('reader', {
//         qrbox: {
//           width: 250,
//           height: 250,
//         },
//         fps: 5,
//       });

//       scanner.render(success, error);
//     }

//     async function success(decodedText) {
//       if (!scannedCodes.has(decodedText)) {
//         try {
//           // Make API call to the scanned URL
//           const response = await fetch(decodedText, {
//             method: 'PATCH',
//             headers: {
//               'Content-Type': 'application/json',
//             },
//           });

//           const data = await response.json();

//           if (data.status === 'success' && !data.AlreadyAttended) {
//             scannedCodes.add(decodedText);
//             console.log('Marked:', decodedText);
            
//             setNotification({
//               type: 'success',
//               message: data.message || 'Attendance marked successfully'
//             });

//             // Stop scanning after successful read
//             if (scanner) {
//               scanner.clear();
//               setScanning(false);
//             }
//           } else {
//             setNotification({
//               type: 'error',
//               message: 'Sorry, attendance already marked'
//             });
//           }
//         } catch (err) {
//           console.error('Error making API call:', err);
//           setNotification({
//             type: 'error',
//             message: 'Error marking attendance. Please try again.'
//           });
//         }
//       } else {
//         setNotification({
//           type: 'error',
//           message: 'Sorry, QR code has already been used'
//         });
//       }

//       // Clear notification after 3 seconds
//       setTimeout(() => {
//         setNotification(null);
//       }, 3000);
//     }

//     function error(err) {
//       // Ignoring errors as they occur frequently during normal scanning
//       // console.warn(err);
//     }

//     return () => {
//       if (scanner) {
//         scanner.clear();
//       }
//     };
//   }, [scanning, scannedCodes]);

//   return (
//     <div className="p-4 max-w-md mx-auto">
//       <div className="mb-4 flex items-center justify-between">
//         <h2 className="text-xl font-bold">QR Scanner</h2>
//         <button
//           onClick={() => setScanning(!scanning)}
//           className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//         >
//           <Camera size={20} />
//           {scanning ? 'Stop Scanning' : 'Start Scanning'}
//         </button>
//       </div>
      
//       {notification && (
//         <div 
//           className={`mb-4 p-4 rounded-lg border ${
//             notification.type === 'success' 
//               ? 'bg-green-50 border-green-500 text-green-700'
//               : 'bg-red-50 border-red-500 text-red-700'
//           }`}
//         >
//           {notification.message}
//         </div>
//       )}
      
//       {scanning && (
//         <div className="border rounded p-4">
//           <div id="reader"></div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default QRScanner;


import React, { useState, useEffect } from 'react';
import { Camera } from 'lucide-react';
import { Html5QrcodeScanner } from 'html5-qrcode';

const QRScanner = () => {
  const [scanning, setScanning] = useState(false);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    let scanner = null;

    if (scanning) {
      scanner = new Html5QrcodeScanner('reader', {
        qrbox: {
          width: 250,
          height: 250,
        },
        fps: 5,
      });

      scanner.render(success, error);
    }

    async function success(decodedText) {
      try {
        // Make API call to the scanned URL
        const response = await fetch(decodedText, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const data = await response.json();

        if (data.status === 'success' && !data.AlreadyAttended) {
          console.log('Marked:', decodedText);
          
          setNotification({
            type: 'success',
            message: data.message || 'Attendance marked successfully'
          });

          // Stop scanning after successful read
          if (scanner) {
            scanner.clear();
            setScanning(false);
          }
        } else {
          setNotification({
            type: 'error',
            message: 'Sorry, attendance already marked'
          });
        }
      } catch (err) {
        console.error('Error making API call:', err);
        setNotification({
          type: 'error',
          message: 'Error marking attendance. Please try again.'
        });
      }

      // Clear notification after 3 seconds
      setTimeout(() => {
        setNotification(null);
      }, 3000);
    }

    function error(err) {
      // Ignoring errors as they occur frequently during normal scanning
      // console.warn(err);
    }

    return () => {
      if (scanner) {
        scanner.clear();
      }
    };
  }, [scanning]);

  return (
    <div className="p-4 max-w-md mx-auto">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-bold">QR Scanner</h2>
        <button
          onClick={() => setScanning(!scanning)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          <Camera size={20} />
          {scanning ? 'Stop Scanning' : 'Start Scanning'}
        </button>
      </div>
      
      {notification && (
        <div 
          className={`mb-4 p-4 rounded-lg border ${
            notification.type === 'success' 
              ? 'bg-green-50 border-green-500 text-green-700'
              : 'bg-red-50 border-red-500 text-red-700'
          }`}
        >
          {notification.message}
        </div>
      )}
      
      {scanning && (
        <div className="border rounded p-4">
          <div id="reader"></div>
        </div>
      )}
    </div>
  );
};

export default QRScanner;