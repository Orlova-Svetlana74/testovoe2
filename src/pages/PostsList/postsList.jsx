import { useGetUsersQuery } from '../../redux/usersApi';
import myAvatar from '../../images/myAvatar.jpg';
import { useNavigate } from 'react-router-dom';
import s from './postlist.module.css';

import { Postcomments } from '../../components/PostComments/postComments';

export function PostsList() {
  const navigate = useNavigate();
const Usershow = () => {  
  navigate(`/ListUser/`);
}   
  const { data = {}, isLoading } = useGetUsersQuery();
  if (isLoading) return <h1>Loading...</h1>;
  console.log('привет');
  
  return (
    <div>
      <ul>
        {data?.map((item) => (
          <div key={item.id}>
            <div className={s.avatarstyl}>
              <img
                onClick={Usershow}
                className={s.avatarstyl}
                src={myAvatar}
                alt="мой аватар"
              />
            </div>
            <div className={s.title}>{item.title}</div>
            <div className={s.body}>{item.body}</div>
          </div>
        ))}
      </ul>
      <Postcomments />
    </div>
  );
}
