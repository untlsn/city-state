import HeaderNav from '~/components/organisms/HeaderNav';

export default function Header() {
  return (
    <header className="flex items-center gap-32 border-(b-2 gray-200) py-2 px-6 bg-primary-main text-white h-16">
      <h1 className="text-2xl">
        <Link to="/">Państaw miasta</Link>
      </h1>
      <HeaderNav />
    </header>
  );
}
