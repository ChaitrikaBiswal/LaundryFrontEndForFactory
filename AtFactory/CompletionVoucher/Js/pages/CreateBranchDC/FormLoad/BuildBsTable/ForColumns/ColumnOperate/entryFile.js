let StartFunc = ({ inFindColumn }) => {
    inFindColumn.formatter = jVarLocalFormatterFunc;
};

let jVarLocalFormatterFunc = (value, row, index) => {
    return [
        `<a class="like" href="./GenDcShow.html" title="DcGenarate">`,
        `<i class="bi bi-front"></i>`,
        '</a>  '
    ].join('');
};

export { StartFunc };