import { ResetIcon } from '@radix-ui/react-icons';

export default function ResetButton({
  setCount,
}: {
  setCount: (value: number) => void;
}) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCount(0);
    e.currentTarget.blur();
  };

  return (
    <button onClick={handleClick} className="reset-btn">
      <ResetIcon className="reset-btn-icon" />
    </button>
  );
}
