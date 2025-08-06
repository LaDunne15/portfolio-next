'use client';
import { GlassElement } from '@/components/glassElement/GlassElement';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import TextInput from '@/components/UIKit/input';

const schema = z.object({
  name: z.string().min(1, 'Required'),
  email: z.string().min(1, 'Required'),
  message: z.string().min(1, 'Required'),
});

type SendMail = z.infer<typeof schema>;

export default function Contact() {
  const { control, handleSubmit } = useForm({
    mode: 'onBlur',
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const submit = (data: SendMail) => {
    console.log(data);
  };

  return (
    <main style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
      <GlassElement width="100%" height="100%" radius={30} depth={0} chromaticAberration={5}>
        <div style={{ padding: 30 }}>
          <span style={{ textAlign: 'center', display: 'block', height: 'auto', fontSize: '30px' }}>
            CONTACT
          </span>
        </div>
      </GlassElement>
      <GlassElement width="100%" height="100%" radius={30} depth={0} chromaticAberration={5}>
        <div style={{ display: 'flex', flexDirection: 'row', padding: '30px', gap: '10px' }}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '25px' }}>Get in Touch</span>
            <span style={{ fontSize: '20px', maxWidth: '60%' }}>
              If you are interested in my work or want to provide feedback about this website, I am
              open to exchanging ideas .
            </span>
          </div>
          <div style={{ flex: 1 }}>
            <form
              onSubmit={handleSubmit(submit)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              <TextInput control={control} name="name" label="Name" />
              <TextInput control={control} name="email" label="Email" />
              <TextInput control={control} name="message" label="Message" multiline />
              <button className="button" type="submit">
                Send
              </button>
            </form>
          </div>
        </div>
      </GlassElement>
    </main>
  );
}
