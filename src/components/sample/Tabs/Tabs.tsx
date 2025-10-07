import TabsDemo from './TabsDemo'

function Tabs() {
  return (
   <div className="p-5">
      <div className="colorbox-requirements">
        <h2 className="mb-2 text-2xl font-semibold text-gray-900 flex items-center">
          Requirements
        </h2>
        <div className="space-y-1 text-gray-500 list-disc list-inside">
        Build a tabs component that displays one panel of content at a time depending on the active tab element. Some HTML is provided for you as example contents.
          <ul className='space-y-1 text-gray-500 list-disc list-inside mt-5 ml-5"'>
            <li>Build a tabs component that displays one panel of content at a time depending on the active tab element. Some HTML is provided for you as example contents.</li>
            <li>
             At all times, only one panel's contents should be displayed — the one corresponding to the active tab's.
            </li>
          </ul>
        </div>
        <br />
        <br />
        <hr className="box-content" />
        <TabsDemo/>
      </div>
    </div>
  )
}

export default Tabs
