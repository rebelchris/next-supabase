import { useEffect, useState } from 'react';
import { supabase } from '../lib/initSupabase';

export default function CountryList() {
  const [countries, setCountries] = useState([]);
  const [newCountry, setNewCountry] = useState('');

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

  const addCountry = async (countryName) => {
    let { data: country } = await supabase
      .from('countries')
      .insert({ name: countryName })
      .single();
    setCountries([...countries, country]);
  };

  return (
    <main>
      <div>
        <input
          type='text'
          placeholder='My Made Up Country'
          value={newCountry}
          onChange={(e) => {
            setNewCountry(e.target.value);
          }}
        />
        <button onClick={() => addCountry(newCountry)}>Add</button>
      </div>
      <ul>
        {countries.map((country) => (
          <li key={country.id}>{country.name}</li>
        ))}
      </ul>
    </main>
  );
}
