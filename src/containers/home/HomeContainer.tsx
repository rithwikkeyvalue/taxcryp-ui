import React from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../store/reducers";
import { useAppDispatch } from "store/store";
import { useGetCountryQuery } from "./api";
import { updateValue } from "./slice";
import { Button } from "components";

const HomeContainer: React.FC = () => {
  const { isLoading, data: countries } = useGetCountryQuery();
  console.log(countries, isLoading);

  const dispatch = useAppDispatch();
  const { data } = useSelector((state: RootState) => state.rootReducer.homePageData);
  return (
    <div className="flex flex-col items-center justify-center h-full text-4xl">
      {isLoading && <p>Loading...</p>}
      <p className="mb-10">HOME PAGE</p>
      <Button onClick={() => dispatch(updateValue("State Updated !"))}>
        Button
      </Button>
      <p className="mt-10">
        {data}
      </p>
      <p className="mt-10">
        {
          countries && countries.map((country) => (<div>{country.name}</div>))
        }
      </p>

    </div>
  )
};

export default HomeContainer;
