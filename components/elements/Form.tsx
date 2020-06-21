import * as React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../store';
import { selectCurrent } from '../../store/backlog_list/Backlog.select';
import styled from 'styled-components';
import { Label, Input } from '../styled/utils/FormStyles';
import { Btn } from '../styled/utils/Button';
import { handleFlex } from '../styled/utils/flex';

interface Props {
  className: string;
  ctaText?: string;
}

interface FormData {
  text: string;
  desc: string;
}

const Form: React.FC<Props> = ({ className, ctaText }) => {
  const [formData, setFormData] = React.useState<FormData>({
    text: '',
    desc: '',
  });

  const currentBacklog = useSelector((state: AppState) => selectCurrent(state));

  React.useEffect(() => {
    if (currentBacklog) {
      setFormData({
        text: currentBacklog.text,
        desc: currentBacklog.desc,
      });
    }
  }, []);

  return (
    <form className={className}>
      <Label htmlFor="text">
        <span>Text</span>
        <Input
          type="text"
          id="text"
          name="text"
          placeholder="...text"
          value={formData.text}
        />
      </Label>
      <Label htmlFor="desc">
        <span>description</span>
        <Input
          type="text"
          id="desc"
          name="desc"
          placeholder="...desc"
          value={formData.desc}
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
