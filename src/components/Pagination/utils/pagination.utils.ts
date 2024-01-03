export function composeVisiblePages(currentPage: number, totalPages: number) {
  let visiblePages = [];

  if (currentPage === 1) {
    visiblePages = [1, 2, 3];
  } else if (currentPage === totalPages) {
    visiblePages = [totalPages - 2, totalPages - 1, totalPages];
  } else {
    visiblePages = [currentPage - 1, currentPage, currentPage + 1];
  }

  return { visiblePages };
}
