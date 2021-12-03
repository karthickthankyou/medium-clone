export interface ICallout1Props {}

const Callout = () => (
  <div className='flex flex-wrap items-center justify-center p-6 bg-gray-100 rounded-md'>
    <div className='mr-2 text-gray-700'>
      Share your ideas with millions of readers.
    </div>
    <button
      type='button'
      className='hover:bg-black bg-gray-900 text-sm text-white px-3 py-1.5 whitespace-nowrap rounded-full'
    >
      Write on Normal
    </button>
  </div>
)

export default Callout
