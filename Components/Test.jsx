import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Test = () => {
  const [isAllowedToUpload, setIsAllowedToUpload] = useState(false);

  useEffect(() => {
    const checkUserRole = async () => {
      try {
        const response = await axios.get('/api/getRoles');
        const roles = response.data; // Assuming the response contains the roles array
        console.log(response.data)
        if (roles.includes('rol_8OvGC57Ir1jJMYq8')) {
          setIsAllowedToUpload(true);
        }
      } catch (error) {
        console.error('Error checking user role:', error);
      }
    };

    checkUserRole();
  }, []);

  if (!isAllowedToUpload) {
    return <p>You do not have permission to upload PDFs.</p>;
  }

  return (
<div>
    <h1>It worked</h1>
    </div>  );
};

export default Test;
