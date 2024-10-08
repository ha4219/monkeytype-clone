import {
  BellIcon,
  CrownIcon,
  InfoIcon,
  KeyboardIcon,
  SettingsIcon,
  UserIcon,
} from 'lucide-react';

export const Nav = () => {
  return (
    <nav className="grid w-full leading-4 gap-2 grid-flow-col text-secondary grid-cols-[auto_auto_auto_auto_1fr_auto]">
      <a className="p-2 leading-4">
        <div className="grid place-content-center w-5 h-5">
          <KeyboardIcon className="w-5 h-5" />
        </div>
      </a>
      <button className="p-2">
        <div className="grid place-content-center w-5 h-5">
          <CrownIcon className="w-5 h-5" />
        </div>
      </button>
      <a className="p-2 leading-4">
        <div className="grid place-content-center w-5 h-5">
          <InfoIcon className="w-5 h-5" />
        </div>
      </a>
      <a className="p-2 leading-4">
        <div className="grid place-content-center w-5 h-5">
          <SettingsIcon className="w-5 h-5" />
        </div>
      </a>
      <div></div>
      <button>
        <div className="grid place-content-center w-5 h-5">
          <BellIcon className="w-5 h-5" />
        </div>
      </button>
      <a className="p-2 leading-4">
        <div className="grid place-content-center w-5 h-5">
          <UserIcon className="w-5 h-5" />
        </div>
      </a>
    </nav>
  );
};
