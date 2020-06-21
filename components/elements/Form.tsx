import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../store';
import { selectCurrent } from '../../store/backlog_list/Backlog.select';
import styled from 'styled-components';
import { Label, Input } from '../styled/utils/FormStyles';
import { Btn } from '../styled/utils/Button';
import { handleFlex } from '../styled/utils/flex';
import {
  editBacklog,
  clearCurrent,
} from '../../store/backlog_list/backlog.actions';

interface Props {
  className: string;
  ctaText?: string;
}

interface FormData {
  text: string;
  desc: string;
}

interface FormDataError<T> {
  textError: T;
  descError: T;
}

const Form: React.FC<Props> = ({ className, ctaText }) => {
  const [formData, setFormData] = React.useState<FormData>({
    text: '',
    desc: '',
  });

  const [errors, setErrors] = React.useState<FormDataError<string>>({
    textError: '',
    descError: '',
  });

  const currentBacklog = useSelector((state: AppState) => selectCurrent(state));
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (currentBacklog) {
      setFormData({
        text: currentBacklog.text,
        desc: currentBacklog.desc,
      });
    }
  }, [currentBacklog]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const dataToUpdate: FormData = {
      text: formData.text,
      desc: formData.desc,
    };
    if (formData.text.length <= 0 || formData.text.length <= 0) {
      setErrors({
        textError: 'Please fill in the text',
        descError: 'Please fill in the description',
      });
      setTimeout(() => {
        setErrors({
          textError: '',
          descError: '',
        });
      }, 4000);
      return;
    } else {
      dispatch(editBacklog(currentBacklog?._id, dataToUpdate));
      dispatch(clearCurrent());
    }
  };

  return (
    <form className={className} onSubmit={handleSubmit}>
      <Label htmlFor="text">
        <span>Text</span>
        {errors.textError && <p className="errorMsg">{errors.textError}</p>}
        <Input
          type="text"
          id="text"
          name="text"
          placeholder="...text"
          value={formData.text}
          onChange={handleChange}
          isError={errors}
        />
      </Label>
      <Label htmlFor="desc">
        <span>description</span>
        {errors.descError && <p className="errorMsg">{errors.descError}</p>}
        <Input
          type="text"
          id="desc"
          name="desc"
          placeholder="...desc"
          value={formData.desc}
          onChange={handleChange}
          isError={errors}
        />
      </Label>
      <Btn type="submit">{ctaText ? ctaText : 'Submit'}</Btn>
    </form>
  );
};

export default styled(Form)`
  padding: 3rem 1.5rem;
  ${handleFlex('column', 'center', 'center')};
  width: 80%;
`;
