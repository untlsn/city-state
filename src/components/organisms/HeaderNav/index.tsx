import './style.css';

interface NavPointProps {
  href: string,
  children: any,
}

function NavPoint(props: NavPointProps) {
  return (
    <li className="NavPoint relative">
      <Link to={props.href}>
        {props.children}
      </Link>
    </li>
  );
}

export default function HeaderNav() {
  return (
    <nav>
      <ul className="flex gap-4">
        <NavPoint href="card">Karta</NavPoint>
        <NavPoint href="random">Losowa litera</NavPoint>
      </ul>
    </nav>
  );
}
