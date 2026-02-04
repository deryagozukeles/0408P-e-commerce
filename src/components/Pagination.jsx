function Pagination({currentPage,totalPages,onPageChange}){
return(
    <div className="flex justify-center items-center gap-2 py-10 text-sm">
        <button 
            onClick={()=>onPageChange(currentPage-1)}
            disabled={currentPage===1}
            >
            Prev
        </button>
        {Array.from({length:totalPages}).map((_,index)=>{
            const page=index+1;
            return(
                <button
                key={page}
                onClick={()=>onPageChange(page)}
                className={`px-3 py-2 border rounded
                ${currentPage === page
                ? "bg-blue-500 text-white"
                : "hover:bg-gray-100"}`}
                >
                    {page}
                </button>
            );
        })}
        <button
            onClick={()=>onPageChange(currentPage+1)}
            disabled={currentPage===totalPages}
            className="px-3 py-2 border rounded disabled:opacity-50"

        
        >
            Next
        </button>

    </div>
)
}
export default Pagination;