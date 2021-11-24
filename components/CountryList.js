import { useEffect, useState } from 'react';
import { supabase } from '../lib/initSupabase';

export default function CountryList() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    const { data: countries } = await supabase
      .from('countries')
      .select('*')
      .order('name', true);
    setCountries(countries);
  };

  return (
    <ul>
      {countries.map((country) => (
        <li key={country.id}>{country.name}</li>
      ))}
    </ul>
  );
}
