import numeral from "numeral";

function DecimalFormat(number: number | string, decimal: number): string {
    let numberFormat: string;
    let tempNumber: number = 0;
    if (typeof number === "string") {
        tempNumber = parseFloat(number);
    } else {
        tempNumber = number;
    }
    const convertNumber = parseFloat(tempNumber.toFixed(10));
    const decimalOfNumber = convertNumber.toString().split(".");
    const pInt =
        `${decimalOfNumber[0].includes("-0") ? "-" : ""}` +
        numeral(decimalOfNumber[0]).format("0.0");
    const pDec = decimalOfNumber[1] ? decimalOfNumber[1].slice(0, decimal) : "";
    if (decimal <= 0) {
        numberFormat = pInt;
    } else {
        numberFormat = `${pInt}${pDec ? "." + pDec : pDec}`;
    }
    return numberFormat;
}

function VndFormat(number: number, decimal: number): string {
    const [integerPart, decimalPart] = number.toString().split('.');
    const truncatedDecimal = decimalPart ? decimalPart.slice(0, decimal) : '';
    const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return `${formattedInteger}${truncatedDecimal ? ',' + truncatedDecimal : ''}`;
}

function SymbolFormat(num: number, digits: number) {
    const lookup = [
        {value: 1, symbol: ""},
        {value: 1e3, symbol: "k"},
        {value: 1e6, symbol: "M"},
        {value: 1e9, symbol: "G"},
        {value: 1e12, symbol: "T"},
        {value: 1e15, symbol: "P"},
        {value: 1e18, symbol: "E"},
    ];
    const regexp = /\.0+$|(?<=\.[0-9]*[1-9])0+$/;
    const item = lookup.findLast((item) => num >= item.value);
    return item
        ? (num / item.value).toFixed(digits).replace(regexp, "").concat(item.symbol)
        : "0";
}

export {DecimalFormat, VndFormat, SymbolFormat};
