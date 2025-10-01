
import ColorBoxDemo from "./ColorBoxDemo";
import './styles/ColorBox.css'

function ColorBox() {
  return (
    <div className="p-5">
      <div className="colorbox-requirements">
        <h2 className="mb-2 text-2xl font-semibold text-gray-900 flex items-center">
          Requirements
        </h2>
        <div className="space-y-1 text-gray-500 list-disc list-inside">
          Build an playing color box. User can toggle switch color between boxes
          each other.
          <ul className='space-y-1 text-gray-500 list-disc list-inside mt-5 ml-5"'>
            <li>We have 4 blocks: red, yellow, aqua, purple.</li>
            <li>
              When user click red block. The other blocks will change same
              background color red.
            </li>
            <li>After user click red block again. They will go back normal.</li>
            <li>Perform the action same with Gold, Aqua, Purple. </li>
          </ul>
        </div>
        <br />
        <br />
        <hr className="box-content" />
        <ColorBoxDemo/>
      </div>
    </div>
  );
}

export default ColorBox;
