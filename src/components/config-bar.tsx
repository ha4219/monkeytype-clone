import { AtSign, Hash } from 'lucide-react';

export const ConfigBar = () => {
  return (
    <div className="my-8 mx-8">
      <div className="bg-secondary-background text-secondary flex text-xs rounded-lg">
        <button className="ml-4 p-3 hover:text-primary">
          <AtSign className="w-4 inline mr-1" />
          punctuation
        </button>
        <button className="ml-4 p-3 hover:text-primary">
          <Hash className="w-4 inline mr-1" />
          numbers
        </button>
        <div className="bg-background w-2 m-3 rounded-sm" />
      </div>
    </div>
  );
};
