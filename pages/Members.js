'use client'
import Search from "@/Components/Search";
import Navbar from "@/Components/Navbar";
import { useEffect } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/router';

const Members = () => {
  const { user, loading } = useUser();
  const router = useRouter();


  if (loading) return <p>Loading...</p>;
  if (!user) return null;

  return (
    <div>
      <h1>Welcome to Members Only Page</h1>
      <p>Hello, {user.name}!</p>
         <Navbar />
    <Search />
    </div>
  );
};

export default Members;