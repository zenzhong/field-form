import type { Ref, ReactElement } from 'react';
import { forwardRef } from 'react';
import { FormInstance } from './interface';
import type { FormProps } from './components/Form';
import FieldForm from './components/Form';
import List from './components/List';
import Field from './components/Field';
import { FormProvider } from './context/FormContext';
import ListContext from './context/ListContext';
import FieldContext from './context/FieldContext';
import useForm from './hooks/useForm';
import useWatch from './hooks/useWatch';

const InternalForm = forwardRef<FormInstance, FormProps>(FieldForm) as <Values = any>(
  props: FormProps<Values> & { ref?: Ref<FormInstance<Values>> },
) => ReactElement;

type InternalFormType = typeof InternalForm;
interface RefFormType extends InternalFormType {
  FormProvider: typeof FormProvider;
  List: typeof List;
  Field: typeof Field;
  useForm: typeof useForm;
  useWatch: typeof useWatch;
}

const RefForm: RefFormType = InternalForm as RefFormType;

RefForm.FormProvider = FormProvider;
RefForm.Field = Field;
RefForm.List = List;
RefForm.useForm = useForm;
RefForm.useWatch = useWatch;

export {
  FormInstance,
  List,
  Field,
  FormProvider,
  ListContext,
  FieldContext,
  useForm,
  useWatch,
};

export type { FormProps };

export default RefForm;
