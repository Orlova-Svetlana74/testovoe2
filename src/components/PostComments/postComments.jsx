import { useLazyGetCommentsQuery } from '../../redux/usersApi';

export function Postcomments() {
  const [getComments, { data }] = useLazyGetCommentsQuery();
  const Commentshow = () => {
    getComments();
  };
  console.log('привет');
  return (
    <div>
      {data?.map((item) => (
        <div key={item.id}>{item.comments}</div>
      ))}
      <button onClick={Commentshow}>Комментарии</button>
    </div>
  );
}
