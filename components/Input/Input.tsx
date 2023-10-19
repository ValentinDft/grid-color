import styles from './input.module.scss';

type propsInput = {
  type: string;
  placeholder: string;
  id: string;
};

const Input = ({ type, placeholder, id }: propsInput) => {
  return (
    <div className={styles['input-group']}>
      <input required={true} type={type} name={id} />
      <label>{placeholder}</label>
    </div>
  );
};

export default Input;
