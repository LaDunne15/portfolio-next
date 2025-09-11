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

import s from '@/styles/Contact.module.scss';

import type { ReactSketchCanvasRef } from 'react-sketch-canvas';
import { useTranslations } from 'next-intl';
import { useBreakpointValue } from '@/hooks/useBreakpointValue';
import { toast } from 'react-toastify';
const ReactSketchCanvas = dynamic(
  () => import('react-sketch-canvas').then((mod) => mod.ReactSketchCanvas),
  { ssr: false }
);

export default function Contact() {
  const t = useTranslations('contact');

  const radius = useBreakpointValue({ base: 10, md: 20, lg: 40 });

  const { control, handleSubmit } = useForm({
    mode: 'onBlur',
    resolver: zodResolver(sendMailSchema(t)),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const canvasRef = useRef<ReactSketchCanvasRef>(null);

  const submit = async (data2: SendMail) => {
    const base64Image = await canvasRef.current?.exportImage('png');
    if (!base64Image) return toast.error(t('Please draw something first!'));

    const templateParams = {
      to: EMAIL_OWNER_TO,
      title: 'Contact Form',
      name: data2.name,
      time: new Date().toLocaleString(),
      message: data2.message,
      image: base64Image,
    };

    await toast.promise(sendEmail(templateParams), {
      pending: t('Sending'),
      success: t('Message sent'),
      error: t('Failed to send message'),
    });
  };

  return (
    <main className={s.contactContainer}>
      <GlassElement width="100%" height="100%" radius={radius} depth={0} chromaticAberration={5}>
        <div className={s.header}>
          <h2 className="center">{t('CONTACT')}</h2>
        </div>
      </GlassElement>
      <GlassElement width="100%" height="100%" radius={radius} depth={0} chromaticAberration={5}>
        <div className={s.formSection}>
          <div className={s.formSection_title}>
            <h3>{t('Get in touch')}</h3>
            <h4>{t('Get in touch text')}</h4>
          </div>
          <div className="flex">
            <form onSubmit={handleSubmit(submit)} className={s.form}>
              <TextInput control={control} name="name" label={t('Name')} />
              <TextInput control={control} name="email" label={t('Email')} />
              <TextInput control={control} name="message" label={t('Message')} multiline emoji />
              <div className={s.form_canvas}>
                <label>🌿 {t('Leave a trace')}</label>
                <ReactSketchCanvas
                  ref={canvasRef}
                  style={{
                    overflow: 'hidden',
                    aspectRatio: 2 / 1,
                    cursor: 'crosshair',
                    border: '1px solid black',
                    borderRadius: '10px',
                  }}
                  strokeWidth={4}
                  strokeColor="black"
                />
                <button
                  type="button"
                  className="button"
                  onClick={() => canvasRef.current?.clearCanvas()}
                  style={{ marginTop: '8px' }}
                >
                  {t('Clear')}
                </button>
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
