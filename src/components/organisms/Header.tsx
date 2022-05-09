import HeaderNav from '~/components/organisms/HeaderNav';
import letterStore from '~/store/letter';

export default function Header() {
  return (
    <header className="fixed flex items-center justify-between border-(b-2 gray-200) p-(y-2 x-6) bg-primary-main text-white h-16 z-100 w-full">
      <div className="flex gap-32 items-center">
        <h1 className="text-2xl">
          <Link to="/">Państaw miasta</Link>
        </h1>
        <HeaderNav />
      </div>
      <Observer>
        {() => (
          <div>
            {
              !!letterStore.letter && (
                <span>Ostatnio wylosowana: <b>{letterStore.letter}</b></span>
              )
            }
            {
              !!letterStore.remainLength && (
                <button type="button" className="p-2" onClick={letterStore.randLetter}>Losuj</button>
              )
            }
          </div>
        )}
      </Observer>
    </header>
  );
}
