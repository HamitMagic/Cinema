
function useItemsOnPage() {

    const width = window.outerWidth;
    const height = window.outerHeight;
    let columnCount, rowCount;

    if (width <= 1068) columnCount = 1;
    else if (width <= 1464) columnCount = 2;
    else if (width <= 1860) columnCount = 3;
    else if (width <= 2256) columnCount = 4;
    else columnCount = 5;
    
    if (height < 355) rowCount = 2;
    else if (height < 975) rowCount = 3;
    else if (height < 1574) rowCount = 4;
    else rowCount = 5;
    return rowCount * columnCount;
}

export default useItemsOnPage
