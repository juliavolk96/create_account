import React, { useState } from "react";
import Alert, { AlertColor } from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Dialog from '@mui/material/Dialog';

interface LoginButtonProps {
  formData: any;
}

const LoginButton: React.FC<LoginButtonProps> = ({ formData }) => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState<AlertColor>("success");
  const [alertMessage, setAlertMessage] = useState("");

  const handleClick = async () => {
    // Checking for presence of all required fields
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password || !formData.confirmPassword || !formData.dob) {
      setAlertMessage('Please fill in all fields');
      setAlertSeverity('error');
      setShowAlert(true);
      return;
    }

    // Checking the email or phone number format
    const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailFormat.test(formData.email)) {
      setAlertMessage('Please enter a valid email');
      setAlertSeverity('error');
      setShowAlert(true);
      return;
    }

    // Checking password match
    if (formData.password !== formData.confirmPassword) {
      setAlertMessage('Passwords do not match');
      setAlertSeverity('error');
      setShowAlert(true);
      return;
    }

    // Checking password complexity
    const passwordFormat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if (!passwordFormat.test(formData.password)) {
      setAlertMessage('The password must contain at least 8 characters, including uppercase and lowercase letters, as well as numbers');
      setAlertSeverity('error');
      setShowAlert(true);
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setAlertMessage(data.message);
        setAlertSeverity('success');
        setShowAlert(true);
      } else {
        setAlertMessage(data.error);
        setAlertSeverity('error');
        setShowAlert(true);
      }
    } catch (error) {
      setAlertMessage('An error occurred while processing your request.');
      setAlertSeverity('error');
      setShowAlert(true);
    }
  };

  return (
    <div >
      <button type="button" className="btn login-btn" onClick={handleClick}>Create account</button>
      <Dialog
        open={showAlert}
        onClose={() => setShowAlert(false)}
      >
        <Alert severity={alertSeverity}>
          <AlertTitle>{alertSeverity === 'success' ? 'Success' : 'Error'}</AlertTitle>
          {alertMessage}
        </Alert>
      </Dialog>
    </div>
  );
}

export default LoginButton;
