import { Routes, Route } from 'react-router-dom';
import { PostsList } from '../pages/PostsList/postsList';
import { PostAboutMy } from './PostAboutMу/postAboutMy';
import { ListUser } from './ListUser/listUser';
// import  {Postcomments}  from '../components/PostComments/postComments';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PostsList />} />
      <Route path="/postAboutMy" element={<PostAboutMy />} />
      <Route path="/listUser" element={<ListUser />} />
      {/* < Route path ='/postComments' element = {<Postcomments />} /> */}
    </Routes>
  );
}
