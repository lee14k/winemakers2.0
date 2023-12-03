import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';


export default function Table({ db, collectionName }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const querySnapshot = await getDocs(collection(db, collectionName));
            const fetchedData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setData(fetchedData);
        };

        fetchData();
    }, [db, collectionName]);
  return (
      <tbody className="divide-y divide-gray-200">
        {data.map((item, index) => (
          <tr key={index}>
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
              {item.name}
            </td>
             <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
              {item.url}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.date}</td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.link}</td>
          </tr>
        ))}
      </tbody>
  );
}
