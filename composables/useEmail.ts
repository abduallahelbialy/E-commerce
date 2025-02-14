import emailjs from "@emailjs/browser";

interface EmailResponse {
  success: boolean;
  message: string;
}

export const useEmail = () => {
  const sendEmail = async (event: Event): Promise<EmailResponse> => {
    event.preventDefault();

    try {
      const form = event.target as HTMLFormElement;

      const response = await emailjs.sendForm(
        "service_tpai9vm", // Service ID
        "template_hzbvba9", // Template ID
        form,
        "Aq_AJR9eweINwXGdH" // Public Key 
      );

      console.log("SUCCESS!", response.status, response.text);
      return { success: true, message: "Email sent successfully!" };
    } catch (error) {
      console.error("FAILED...", error);
      return { success: false, message: "Email sending failed." };
    }
  };

  return { sendEmail };
};
