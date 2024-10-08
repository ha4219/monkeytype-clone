import { Letter } from './letter';

interface IProps {
  word: string;
}
export const Word = ({ word }: IProps) => {
  return (
    <div className="p-0.5">
      {[...word].map((x) => (
        <Letter char={x} />
      ))}
    </div>
  );
};
