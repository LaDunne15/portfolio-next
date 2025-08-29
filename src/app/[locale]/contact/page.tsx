'use client';
import { GlassElement } from '@/components/glassElement/GlassElement';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import TextInput from '@/components/UIKit/input';
import dynamic from 'next/dynamic';

import { useRef } from 'react';
import { EMAIL_OWNER_TO } from '@/constants/env';
import { sendEmail } from '@/services/email.service';
import { SendMail, sendMailSchema } from '@/types/schemas/sendMail.schema';

import type { ReactSketchCanvasRef } from 'react-sketch-canvas';
import { useTranslations } from 'next-intl';
const ReactSketchCanvas = dynamic(
  () => import('react-sketch-canvas').then((mod) => mod.ReactSketchCanvas),
  { ssr: false }
);

export default function Contact() {
  const t = useTranslations('contact');

  const { control, handleSubmit } = useForm({
    mode: 'onBlur',
    resolver: zodResolver(sendMailSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const canvasRef = useRef<ReactSketchCanvasRef>(null);

  const submit = async (data2: SendMail) => {
    const base64Image = await canvasRef.current?.exportImage('png');
    if (!base64Image) return alert('Please draw something first!');

    const templateParams = {
      to: EMAIL_OWNER_TO,
      title: 'Contact Form',
      name: data2.name,
      time: new Date().toLocaleString(),
      message: data2.message,
      image: base64Image,
    };

    sendEmail(templateParams);
  };

  return (
    <main style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
      <GlassElement width="100%" height="100%" radius={30} depth={0} chromaticAberration={5}>
        <div style={{ padding: 30 }}>
          <span style={{ textAlign: 'center', display: 'block', height: 'auto', fontSize: '30px' }}>
            {t('CONTACT')}
          </span>
        </div>
      </GlassElement>
      <GlassElement width="100%" height="100%" radius={30} depth={0} chromaticAberration={5}>
        <div style={{ display: 'flex', flexDirection: 'row', padding: '30px', gap: '10px' }}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '25px' }}>{t('Get in touch')}</span>
            <span style={{ fontSize: '20px', maxWidth: '60%' }}>{t('Get in touch text')}</span>
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
              <TextInput control={control} name="name" label={t('Name')} />
              <TextInput control={control} name="email" label={t('Email')} />
              <TextInput control={control} name="message" label={t('Message')} multiline emoji />
              <div>
                <label>🌿 {t('Leave a trace')}</label>
                <ReactSketchCanvas
                  ref={canvasRef}
                  style={{ overflow: 'hidden', aspectRatio: 2 / 1, cursor: 'crosshair' }}
                  strokeWidth={4}
                  strokeColor="black"
                />
              </div>
              <button className="button" type="submit">
                {t('Send')}
              </button>
            </form>
          </div>
        </div>
      </GlassElement>
    </main>
  );
}
