function Pagination({ currentPage, totalPages, onPageChange }) {

  
  if (!totalPages || totalPages <= 1) return null;

  const getVisiblePages = () => {
    if (totalPages <= 3) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= 1) return [1, 2, 3];

    if (currentPage >= totalPages) {
      return [totalPages - 2, totalPages - 1, totalPages];
    }

    return [currentPage - 1, currentPage, currentPage + 1];
  };

  const pages = getVisiblePages();

  const handleFirst = () => {
    if (currentPage !== 1) {
      onPageChange(1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex justify-center py-10">
      <div className="flex border border-gray-300 rounded-md overflow-hidden shadow-sm">

        
        <button
          onClick={handleFirst}
          disabled={currentPage === 1}
          className={`px-4 py-3 text-sm font-bold border-r border-gray-300 transition-colors
            ${
              currentPage === 1
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "text-[#23A6F0] hover:bg-gray-50"
            }`}
        >
          First
        </button>

       
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-5 py-3 text-sm font-bold border-r border-gray-300 last:border-r-0 transition-colors
              ${
                currentPage === page
                  ? "bg-[#23A6F0] text-white"
                  : "text-[#23A6F0] bg-white hover:bg-gray-50"
              }`}
          >
            {page}
          </button>
        ))}

        
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`px-4 py-3 text-sm font-bold border-l border-gray-300 transition-colors
            ${
              currentPage === totalPages
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "text-[#23A6F0] hover:bg-gray-50"
            }`}
        >
          Next
        </button>

      </div>
    </div>
  );
}

export default Pagination;
