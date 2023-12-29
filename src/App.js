// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { toBeValid } from "@testing-library/jest-dom/dist/matchers";
import { useEffect, useState } from "react";

export default function App() {
  const [amount, setAmount] = useState();
  const [base, setBase] = useState("EUR");
  const [to, setTo] = useState("USD");
  const [output, setOutput] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCurrency = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${amount}&from=${base}&to=${to}`
        );
        const data = await res.json();
        setOutput(data.rates[to]);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    if (to === base) return setOutput(amount);
    fetchCurrency();
  }, [amount, to, base]);
  return (
    <div>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        disabled={loading}
      />
      <select
        value={base}
        onChange={(e) => setBase(e.target.value)}
        disabled={loading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>

      <select
        value={to}
        onChange={(e) => setTo(e.target.value)}
        disabled={loading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      {loading ? (
        <Loader />
      ) : (
        <p>
          {output} {to}
        </p>
      )}
    </div>
  );
}

function Loader() {
  return <p>Loading....</p>;
}
