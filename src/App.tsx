import { Nav } from '@/components/nav';
import { Logo } from '@/components/logo';
import { ConfigBar } from '@/components/config-bar';
import { WordWrapper } from '@/components/word/word-wrapper';

function App() {
  return (
    <main className="container mx-auto pt-8">
      <header className="flex">
        <Logo />
        <Nav />
      </header>
      <ConfigBar />
      <div className="">
        <input
          className="w-full opacity-0"
          type="text"
          autoComplete="off"
          autoCapitalize="off"
          autoCorrect="off"
          spellCheck="false"
        />
      </div>
      <WordWrapper />
    </main>
  );
}

export default App;
