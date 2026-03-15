export default function Tab({ tabData, field, setField }) {
  return (
    <div
      className="my-6 flex max-w-max gap-x-1 rounded-full border border-richblack-700 bg-richblack-800 p-1"
    >
      {tabData.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setField(tab.type)}
          className={`${
            field === tab.type
              ? "bg-white text-richblack-5 shadow-soft"
              : "bg-transparent text-richblack-300 hover:text-richblack-5"
          } rounded-full py-2 px-5 font-medium transition-all duration-200`}
        >
          {tab?.tabName}
        </button>
      ))}
    </div>
  );
}
