const CLASSES = {
    // Race icon and the items on the right side icons
    raceIcon: "h-8 w-8 m-0 p-0 z-10 flex-shrink-0 hover:bg-gray-400 cursor-pointer",
    timeIcon: "h-24 w-24 m-0 p-0 z-10",
    timeText: "absolute z-20 text-white",

    // Action selection container
    actionContainer: "flex flex-wrap bg-gray-600 m-1 p-1",

    // Action icon
    icon: "h-12 w-12 m-0 p-1 z-10 hover:bg-gray-400 cursor-pointer",

    // Icons in the build order at the top
    bo: "flex flex-row bg-green-700 m-1 p-0",
    boItem: "m-0 p-0 h-16 w-16 bg-green-700 border border-black hover:bg-green-400 cursor-move",
    // Build order area in the bottom left
    boArea: "overflow-x-auto bg-indigo-400",
    typeColor: {
        "time": "bg-orange-600",
        "worker": "bg-green-600",
        "action": "bg-red-600",
        "unit": "bg-pink-500",
        "structure": "bg-teal-500",
        "upgrade": "bg-purple-600",
    },
    // Should be 100-300 less than above
    hoverColor: {
        "time": "hover:bg-orange-400",
        "worker": "hover:bg-green-400",
        "action": "hover:bg-red-400",
        "unit": "hover:bg-pink-300",
        "structure": "hover:bg-teal-300",
        "upgrade": "hover:bg-purple-400",
    },
    boCol: "flex flex-col relative m-0 p-0 border border-black",
    boRow: "flex flex-row relative m-0 p-0 border border-black",
    boElementContainer: "z-50 flex flex-row flex-shrink-0 items-center border-l border-r border-t border-b border-black cursor-move",
    boElementIcon: "m-0 p-0 h-8",
    boElementText: "z-20 m-0 p-0 whitespace-no-wrap",

    // Dropdown of export import settings
    dropDown: "absolute left-0 top-auto z-50 rounded bg-gray-300 whitespace-no-wrap flex flex-col",
    dropDownContainer: "m-1 p-1 flex flex-row justify-between",
    dropDownLabel: "hover:bg-gray-400 px-2 flex flex-row justify-between",
    dropDownInput: "rounded w-20 mx-2",

    // Rectangle items in the BOArea
    // Import export buttons
    buttons: "hover:bg-blue-500 relative bg-gray-300 text-gray-700 font-semibold mx-1 py-2 px-4 rounded items-center select-none h-10",
}

export default CLASSES