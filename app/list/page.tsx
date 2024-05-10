import React from 'react'
import ListCard from '../components/ListCard'
interface List {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const ListPage = async () => {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/photos',
    { next: { revalidate: 10 } }
  );
  const lists: List[] = await response.json();
  return (
    <main>
      <div>ListPage</div>
      <ul>
        {lists.map(list => (
          <li key={list.id} >
            <img src={list.url}></img>
            <p>{list.title}</p>
          </li>
        )
        )}
      </ul >
      <ListCard />

    </main >
  )
}

export default ListPage