const getIndex = (start, end) => {
    start = --start;
    end = --end;

    if(start === end){
        end = ++end;
    }
}

module.exports = getIndex;