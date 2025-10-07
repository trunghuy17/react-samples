import AccordionDemo from "./AccordionDemo";

function Accordion() {
  return (
    <div className="p-5">
      <div className="accordion-requirements">
        <h2 className="mb-2 text-2xl font-semibold text-gray-900 flex items-center">
          Requirements
        </h2>
        <div className="space-y-1 text-gray-500 list-disc list-inside">
          Build an accordion component that a display a list of vertical stacked
          selections witch each container a title and content snipper.
          <ul className="space-y-1 text-gray-500 list-disc list-inside mt-5 ml-5">
            <li>
              User call toggle between hiding and showing large amount of
              content
            </li>
          </ul>
        </div>
      </div>
      <br />
      <br />
      <hr className="box-content" />
      <AccordionDemo/>
    </div>
  );
}

export default Accordion;
