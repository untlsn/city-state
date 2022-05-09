import { autorun } from 'mobx';
import alphabetStore from '~/store/alphabet';

export default function OutLettersLogic() {
  const [params, setParams] = useSearchParams();
  const initOut = params.get('out') || '';

  useEffect(() => {
    initOut.split('').forEach(alphabetStore.remove);
    autorun(() => {
      const joined = alphabetStore.out.join('');
      const newParams = new URLSearchParams(params);

      if (!joined) {
        newParams.delete('out');
      } else {
        newParams.set('out', joined);
      }
      setParams(newParams);
    });
  }, []);

  return (
    <></>
  );
}
