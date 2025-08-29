import { Controller, FieldValues, UseControllerProps } from 'react-hook-form';

import EmojiPicker, { EmojiClickData } from 'emoji-picker-react';
import s from '@/styles/UIKit.module.scss';
import { useState } from 'react';

interface Props<T extends FieldValues> extends UseControllerProps<T> {
  label?: string;
  multiline?: boolean;
  emoji?: boolean;
}

const TextInput = <T extends FieldValues>({
  name,
  control,
  label,
  multiline = false,
  emoji = false,
}: Props<T>) => {
  const [showEmoji, setShowEmoji] = useState(false);

  const addEmoji = (emojiData: EmojiClickData, value: string, onChange: (v: string) => void) => {
    onChange((value || '') + emojiData.emoji);
  };

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label>{label}</label>
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column' }}>
            {multiline ? (
              <textarea
                className={s.inputMultiline}
                onChange={(e) => {
                  onChange(e.target.value);
                  e.target.style.height = 'auto';
                  e.target.style.height = e.target.scrollHeight + 'px';
                }}
                onBlur={onBlur}
                value={value || ''}
                style={{ overflow: 'hidden' }}
              />
            ) : (
              <input
                className={s.input}
                type="text"
                value={value || ''}
                onChange={(e) => onChange(e.target.value)}
                onBlur={onBlur}
              />
            )}

            {emoji && (
              <div
                onClick={() => setShowEmoji(!showEmoji)}
                style={{ position: 'absolute', right: 5, bottom: 5, cursor: 'pointer' }}
              >
                <span>😃</span>
              </div>
            )}
            {emoji && showEmoji && (
              <div
                style={{
                  position: 'absolute',
                  right: 0,
                  top: '100%',
                  transform: 'scale(0.7)',
                  transformOrigin: 'top right',
                  zIndex: 10,
                }}
              >
                <EmojiPicker
                  open={showEmoji}
                  onEmojiClick={(emoji) => addEmoji(emoji, value, onChange)}
                  skinTonesDisabled
                  searchDisabled
                  lazyLoadEmojis
                />
              </div>
            )}
          </div>
          {error && <span style={{ fontSize: '0.8rem' }}>{error.message}</span>}
        </div>
      )}
    />
  );
};
export default TextInput;
