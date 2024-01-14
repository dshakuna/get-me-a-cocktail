import emailjs from 'emailjs-com';

export const sendCustomEmail = (details: { to_name: string; to_email: string; message: string; }) => {
  return emailjs.send(
    import.meta.env.VITE_EMAIL_SERVICE_ID,
    import.meta.env.VITE_EMAIL_TEMPLATE_ID,
    {
      to_name: details.to_name,
      to_email: details.to_email,
      message: details.message,
    },
    import.meta.env.VITE_EMAIL_USER_ID
  );
};
