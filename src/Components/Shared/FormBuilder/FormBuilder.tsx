import React, {Fragment} from 'react';
import FormInput, {FormInputProps} from '../FormInput/FormInput';
import Paper from '../Paper/Paper';

type FormBuilderProps = {
  formConfigArray: Array<FormInputProps>;
};

function FormBuilder(props: FormBuilderProps) {
  const {formConfigArray} = props;

  return (
    <Fragment>
      {formConfigArray.map((item, index) => (
        <Fragment key={index}>
          <FormInput {...item} />
          {index !== formConfigArray.length - 1 && <Paper h={15} />}
        </Fragment>
      ))}
    </Fragment>
  );
}

export default FormBuilder;
