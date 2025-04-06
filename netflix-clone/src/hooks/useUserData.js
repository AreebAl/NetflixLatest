import { useState, useEffect } from 'react';
import UserService from '../services/userService';

const useUserData = () => {
  const [myList, setMyList] = useState([]);

  useEffect(() => {
    const fetchMyList = async () => {
      try {
        const data = await UserService.getMyList();
        setMyList(data);
      } catch (error) {
        console.error('Error fetching user list:', error);
      }
    };

    fetchMyList();
  }, []);

  return { myList };
};

export default useUserData;