

export default function PrevIcon({ onClick }: { onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            className="w-12 h-12 flex justify-center items-center bg-gray-100 bg-opacity-90  text-gray-500 rounded-full  p-2"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
        </button>
    )
}