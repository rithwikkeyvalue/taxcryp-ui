import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../store/reducers';
import { useAppDispatch } from 'store/store';
import { useGetCountryQuery } from './api';
import { updateValue } from './slice';
import Button from 'components/button/Button';

const Home: React.FC = () => {
  const { isLoading, data: countries } = useGetCountryQuery();

  const dispatch = useAppDispatch();
  const { data } = useSelector(
    (state: RootState) => state.rootReducer.homePageData
  );
  return (
    <div className="flex flex-col justify-center items-center h-full text-4xl">
      {isLoading && <p>Loading...</p>}
      <p className="mb-10">HOME PAGE</p>
      <Button onClick={() => dispatch(updateValue('State Updated !'))}>
        Button
      </Button>
      <p className="mt-10">{data}</p>
      <p className="mt-10">
        {countries?.map(country => (
          <div key={country.name}>{country.name}</div>
        ))}
      </p>
    </div>
  );
};

export default Home;
