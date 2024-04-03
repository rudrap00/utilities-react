import { useEffect, useState } from "react";

const useCurrenyInfo = (currency) => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `https://api.currencyapi.com/v3/latest?apikey=cur_live_CPnWbCXArvOCc65z32uqErU1mHJyNE4nHhDOfJph&currencies=&base_currency=${currency}`
    )
      .then((res) => res.json())
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [currency]);

  return data;
};

export default useCurrenyInfo;
