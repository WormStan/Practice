function addMultiple() {
    for (let i = 1; i <= 9; i++) {
        let line = "";
        for (let j = 1; j <= i; j++) {
            line += (`${i}*${j}=${i*j}\t`);
        }
        document.write(line);
        document.write("<hr>");
    }
}

window.onload = addMultiple();


//1. Use JS only for the print out
//2. Use String features