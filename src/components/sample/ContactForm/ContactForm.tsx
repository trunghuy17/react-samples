import ContactFormDemo from "./ContactFormDemo";

function ContactForm() {
  return (
    <div className="p-5">
      <div className="colorbox-requirements">
        <h2 className="mb-2 text-2xl font-semibold text-gray-900 flex items-center">
          Requirements
        </h2>
        <div className="space-y-1 text-gray-500 list-disc list-inside">
          Build a form user interface and show the data in a table.
          <ul className='space-y-1 text-gray-500 list-disc list-inside mt-5 ml-5"'>
            <li>Show error message when user input invalid data.</li>
            <li>Check password and confirm password are matched.</li>
            <li>Complete the form and show the data in a table.</li>
          </ul>
        </div>
        <br/>
        <h2 className="mb-2 text-2xl font-semibold text-gray-900 flex items-center">Technical</h2>
        <ul className='space-y-1 text-gray-500 list-disc list-inside mt-5 ml-5"'>
          <li>react hook form</li>
          <li>tailwindcss</li>
        </ul>
        <br />
        <br />
        <hr className="box-content" />
        <ContactFormDemo />
      </div>
    </div>
  );
}

export default ContactForm;
