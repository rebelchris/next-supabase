import Head from 'next/head';
import Image from 'next/image';
import CountryList from '../components/countryList';

export default function Home() {
  return (
    <main>
      <CountryList />
    </main>
  );
}
