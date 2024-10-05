import { MinusIcon, PlusIcon } from '@radix-ui/react-icons';

interface ICountButton {
  type: 'minus' | 'plus';
  setCount: (value: number | ((prev: number) => number)) => void;
  locked: boolean;
}

export default function CountButton({ type, setCount, locked }: ICountButton) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCount((prev) => {
      if (type === 'minus') {
        const newCount = prev - 1;
        if (newCount < 0) {
          return 0;
        }
        return newCount;
      } else {
        const newCount = prev + 1;
        if (newCount > 5) {
          return 5;
        }
        return newCount;
      }
    });

    e.currentTarget.blur();
  };

  return (
    <button disabled={locked} onClick={handleClick} className="count-btn">
      {type === 'minus' ? (
        <MinusIcon className="count-btn-icon" />
      ) : (
        <PlusIcon className="count-btn-icon" />
      )}
    </button>
  );
}
