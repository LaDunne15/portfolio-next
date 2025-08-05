import { Control, Controller, FieldValues, UseControllerProps } from 'react-hook-form';

interface Props<T extends FieldValues> extends UseControllerProps<T> {
  control: Control<T>;
  label?: string;
}

const TextInput = <T extends Record<string, any>>({ name, control, label }: Props<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label>{label}</label>
          <input type="text" value={value} onChange={onChange} onBlur={onBlur} />
          {error && <span>{error.message}</span>}
        </div>
      )}
    />
  );
};
export default TextInput;
