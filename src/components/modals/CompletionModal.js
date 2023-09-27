const CompletionModal = ({ onClose }) => (
    <div className="fixed z-50 top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-8 rounded-md w-1/2 max-w-xl shadow-lg">
            <h2 className="text-xl mb-4 text-black">Congratulations!</h2>
            <p className="text-black">
                You've completed all the cards for this category!
            </p>
            <button
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
                onClick={onClose}
            >
                Close
            </button>
        </div>
    </div>
);

export default CompletionModal;
