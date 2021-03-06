import { UserData } from '@data';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function User({ user, selected, onClick }: UserProps) {
  return (
    <button
      className="flex items-center pl-4 pr-8 w-full h-12 hover:bg-blue-200 bg-white border-transparent rounded-none shadow"
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      <img
        className="mr-4 w-8 h-8 rounded-full"
        src={user.picture}
        alt={`${user.firstName} ${user.lastName}`}
      />
      <span className="flex flex-col flex-grow text-left">
        <p>
          {user.firstName} {user.lastName}
        </p>
      </span>
      {selected && (
        <FontAwesomeIcon icon={faCheck} className="text-green-400" />
      )}
    </button>
  );
}

type UserProps = {
  key: number | string;
  user: UserData;
  selected: boolean;
  onClick: () => void;
};
