import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import SideBar from "./components/layout/SideBar";
import TrafficLight from "./components/sample/TrafficLight/TrafficLight";
import JobBoard from "./components/sample/JobBoard/JobBoard";
import ColorBox from "./components/sample/Colorbox/ColorBox";
import Accordion from "./components/sample/Accordion/Accordion";
import Tabs from "./components/sample/Tabs/Tabs";
import ContactForm from "./components/sample/ContactForm/ContactForm";
import BookKeeper from "./components/sample/Bookkeeper/BookKeeper";
import BookKeeperHome from "./components/sample/Bookkeeper/components/BookKeeperHome";
import BookKeeperContact from "./components/sample/Bookkeeper/components/BookKeeperContact";
import BookKeeperInvoice from "./components/sample/Bookkeeper/components/BookKeeperInvoice";
import BookKeeperInvoiceDetail from "./components/sample/Bookkeeper/components/BookKeeperInvoiceDetail";

function App() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <SideBar />
      <div className="p-4 sm:ml-64 w-full">
        <Routes>
          <Route path="/accordion" element={<Accordion />} />
          <Route path="/job-board" element={<JobBoard />} />
          <Route path="/traffic-light" element={<TrafficLight />} />
          <Route path="/color-box" element={<ColorBox />} />
          <Route path="/tabs" element={<Tabs />} />
          <Route path="/contact-form" element={<ContactForm />} />
          <Route path="/bookkeeper" element={<BookKeeper />}>
            <Route index element={<Navigate to="home" replace />} />
            <Route path="home" element={<BookKeeperHome />} />
            <Route path="contact" element={<BookKeeperContact />} />

            <Route path="invoice" element={<BookKeeperInvoice />}>
              <Route index element={<div>Select an invoice</div>} />
              <Route path=":number" element={<BookKeeperInvoiceDetail />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
