import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'components/Loader/Loader';
import { deleteContact, fetchContacts } from 'Redux/contacts/operations';
import { selectContacts, selectFilter, selectIsLoading } from 'Redux/selectors';
import { DeleteItem, Span } from './StyledListContact';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDelete = id => dispatch(deleteContact(id));

  const filtered = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );

  return (
    <div>
      {isLoading && <Loader />}
      {filtered?.length > 0 && (
        <ul>
          {filtered.map(({ id, name, phone }) => (
            <li key={id}>
              <Span>
                {name}: {phone}
              </Span>
              <DeleteItem onClick={() => handleDelete(id)} type="button">
                Delete
              </DeleteItem>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
