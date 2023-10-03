import { useGetUsersInfoQuery } from '../../redux/usersApi';

export function ListUser() {
  const { data = {} , isLoading} = useGetUsersInfoQuery();
  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div>
      {data?.map((item) => (
        <div key={item.id}>
          {item.name} {item.username} {item.email} {item.phone}
          {item.website}
        </div>
      ))}      
    </div>
  );
}
