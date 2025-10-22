// InvoiceDetail.tsx
import { useMemo } from "react";
import { useOutletContext, useParams } from "react-router-dom";

interface Invoice {
  name: string;
  number: number;
  amount: string;
  due: string;
}

export default function InvoiceDetail() {
  const { data } = useOutletContext<{ data: Invoice[] }>();
  const { number } = useParams<{ number: string }>();

  const invoice = useMemo(() => {
    if (!number) return null;
    const id = Number(number);
    return data.find((i) => i.number === id) ?? null;
  }, [data, number]);

  if (!number) return <p>Chọn một hóa đơn ở bên trái.</p>;
  if (!invoice) return <p>Không tìm thấy hóa đơn #{number}.</p>;

  return (
    <>
      <h2 className="text-xl font-bold mb-2">Invoice #{invoice.number}</h2>
      <p><span className="font-medium">Name:</span> {invoice.name}</p>
      <p><span className="font-medium">Amount:</span> {invoice.amount}</p>
      <p><span className="font-medium">Due:</span> {invoice.due}</p>
    </>
  );
}
