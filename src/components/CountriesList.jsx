import styles from "./CountryList.module.css";
import Spinner from "../components/Spinner";
import CityItem from "../components/CityItem";
import Message from "../components/Message";

export default function CountriesList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  const countries = [];

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <countryItem country={country} key={country.id} />
      ))}
    </ul>
  );
}
