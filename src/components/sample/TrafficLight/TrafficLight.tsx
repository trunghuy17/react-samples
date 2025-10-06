import TrafficLightDemo from './TrafficLightDemo'
import './styles/TrafficLight.css'

function TrafficLight() {
  return (
    <div className="p-5">
      <div className="colorbox-requirements">
        <h2 className="mb-2 text-2xl font-semibold text-gray-900 flex items-center">
          Requirements
        </h2>
        <div className="space-y-1 text-gray-500 list-disc list-inside">
         Build a traffic light where the lights switch from green to yellow to red after predetermined intervals and loop indefinitely. Each light should be lit for the following durations:
          <ul className='space-y-1 text-gray-500 list-disc list-inside mt-5 ml-5"'>
            <li>Red light: appear after 4000ms (red → 4s → green)</li>
            <li>
             Yellow light: appear after 1000ms (yellow → 1s → red)
            </li>
            <li>Green light: appear after 3000ms (green → 3s → yellow)</li>
          </ul>
        </div>
        <br />
        <br />
        <hr className="box-content" />
        <TrafficLightDemo/>
      </div>
    </div>
  )
}

export default TrafficLight
