import { example } from '@/lib/utils';
import { Word } from './word';

export const WordWrapper = () => {
  const data = example.split(' ');
  return (
    <div className="overflow-clip flex flex-wrap">
      {data.map((x) => (
        <Word word={x} />
      ))}
    </div>
  );
};
