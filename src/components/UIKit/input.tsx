import { Control, Controller, FieldValues, UseControllerProps } from 'react-hook-form';

import s from '@/styles/UIKit.module.scss';

interface Props<T extends FieldValues> extends UseControllerProps<T> {
  control: Control<T>;
  label?: string;
  multiline?: boolean;
}

const TextInput = <T extends Record<string, any>>({
  name,
  control,
  label,
  multiline = false,
}: Props<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label>{label}</label>
          {multiline ? (
            <textarea
              className={s.inputMultiline}
              onChange={(e) => {
                // оновлюємо значення для react-hook-form
                onChange(e);
                // авто-висота
                e.target.style.height = 'auto'; // скидаємо висоту перед виміром
                e.target.style.height = e.target.scrollHeight + 'px';
              }}
              onBlur={onBlur}
              value={value}
              id="description"
              style={{ overflow: 'hidden' }} // прибираємо скрол
            />
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  zIndex: -1,
                  filter: 'blur(2px)',
                }}
              />
              <input
                className={s.input}
                type="text"
                value={value}
                onChange={onChange}
                onBlur={onBlur}
              />
            </div>
          )}
          {error && <span style={{ fontSize: '0.8rem' }}>{error.message}</span>}
        </div>
      )}
    />
  );
};
export default TextInput;
