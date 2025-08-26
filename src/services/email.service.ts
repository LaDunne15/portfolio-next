import { EMAIL_JS_PUBLIC_KEY, EMAIL_JS_SERVICE_ID, EMAIL_JS_TEMPLATE_ID } from '@/constants/env';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

export const sendEmail = async (templateParams: {
  to: string;
  title: string;
  name: string;
  time: string;
  message: string;
  image: string;
}) => {
  try {
    await emailjs.send(EMAIL_JS_SERVICE_ID, EMAIL_JS_TEMPLATE_ID, templateParams, {
      publicKey: EMAIL_JS_PUBLIC_KEY,
    });
    console.log('SUCCESS!');
  } catch (err) {
    if (err instanceof EmailJSResponseStatus) {
      console.log('EMAILJS FAILED...', err);
      return;
    }

    console.log('ERROR', err);
  }
};
