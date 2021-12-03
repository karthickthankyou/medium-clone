import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { HiOutlineDotsHorizontal } from '@react-icons/all-files/hi/HiOutlineDotsHorizontal'
import { HiOutlineBan } from '@react-icons/all-files/hi/HiOutlineBan'

const PopoverComponent = () => (
  <Popover className='relative'>
    {({ open }) => (
      <>
        <Popover.Button
          className={`
                ${open ? '' : 'text-opacity-90'}
                group bg-orange-700 rounded-md inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
        >
          <HiOutlineDotsHorizontal
            className={`${open ? '' : 'text-opacity-70'}
                  ml-2 h-5 w-5 group-hover:text-opacity-80 transition ease-in-out duration-150`}
            aria-hidden='true'
          />
        </Popover.Button>
        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='opacity-0 -translate-y-1'
          enterTo='opacity-100 translate-y-0'
          leave='transition ease-in duration-100'
          leaveFrom='opacity-100 translate-y-0'
          leaveTo='opacity-0 -translate-y-1'
        >
          <Popover.Panel className='absolute z-10 mt-2 text-sm transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-3xl'>
            <div className='flex flex-col items-start max-w-sm p-1 overflow-hidden bg-white rounded-lg shadow-lg '>
              {[
                {
                  key: '22',
                  display: (
                    <div className='flex items-center space-x-2'>
                      <HiOutlineBan className='w-5 h-5 ' />
                      <div>Show less like this</div>
                    </div>
                  ),
                },
                { key: 0, display: null },
                { key: 1, display: 'Mute this author' },
                { key: 2, display: 'Unfollow this publication' },
                {
                  key: 3,
                  display: <span className='text-red-600'>Report</span>,
                },
              ].map((item) =>
                item.display ? (
                  <div
                    key={item.key}
                    className='w-full px-3 py-2 text-left text-gray-700 rounded-md hover:text-black hover:bg-blue-50 whitespace-nowrap'
                  >
                    {item.display}
                  </div>
                ) : (
                  <hr
                    key={item.key}
                    className='w-full my-1 border-t border-gray-200'
                  />
                )
              )}
            </div>
          </Popover.Panel>
        </Transition>
      </>
    )}
  </Popover>
)

export default PopoverComponent
