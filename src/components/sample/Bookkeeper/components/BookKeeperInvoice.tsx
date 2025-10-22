import { useEffect, useMemo, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";

interface Invoice {
  name: string;
  number: number;
  amount: string;
  due: string;
}

function BookKeeperInvoice() {
  const [data, setData] = useState<Invoice[]>([]);
  const { number } = useParams();

  useEffect(() => {
    import("../data/bookKeeper.json").then((res) => setData(res.default));
  }, []);
  const active = useMemo(() => (number ? Number(number) : NaN), [number]);

  return (
    <>
      <div className="flex">
        <nav className="border-r-2 p-3">
          <ul className="max-w-md space-y-1 list-inside underline">
            {data.map((i) => (
              <li key={i.number}>
                <NavLink
                  to={`${i.number}`}
                  className={i.number === active ? "font-semibold text-red-500 underline " : ""}
                >
                  {i.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <div className="p-4">
            <Outlet context={{ data }} />
          </div>
        </div>
      </div>
    </>
  );
}

export default BookKeeperInvoice;
