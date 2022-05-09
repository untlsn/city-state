import Header from '~/components/organisms/Header';

export default function DefaultTemplate(props: { children: any }) {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
}
