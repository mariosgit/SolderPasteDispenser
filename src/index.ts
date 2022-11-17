console.log('moinsen')

const uploadFileEle: HTMLInputElement | null = <HTMLInputElement | null>document.getElementById("fileInput");
const uploadButton: HTMLButtonElement | null = <HTMLButtonElement | null>document.getElementById("uploadButton");
const padsField: HTMLDivElement | null = <HTMLDivElement | null>document.getElementById("padsField");
const coordsField: HTMLDivElement | null = <HTMLDivElement | null>document.getElementById("coordsField");

const dropZone: HTMLDivElement | null = <HTMLDivElement | null>document.getElementById("dropZone");

if (uploadFileEle && uploadButton && padsField && coordsField && dropZone) {
    uploadButton.onclick = () => {
        // check if user had selected a file
        if (uploadFileEle.files && uploadFileEle.files.length > 0) {
            let file = uploadFileEle.files[0]
            console.log(file);
            console.log(`file: ${file.name} size:${file.size}`);

            processGerberFile(file);

        } else {
            alert('please choose a file')
            return
        }
    }

    dropZone.ondrop = (ev) => {
        ev.preventDefault();
        console.log(ev);
        if (ev.dataTransfer.items) {
            // Use DataTransferItemList interface to access the file(s)
            [...ev.dataTransfer.items].forEach((item, i) => {
                // If dropped items aren't files, reject them
                if (item.kind === 'file') {
                    const file = item.getAsFile();
                    if(file) {
                        console.log(`… item[${i}].name = ${file.name}`);
                        processGerberFile(file);
                    }
                }
            });
        } else {
            // Use DataTransfer interface to access the file(s)
            [...ev.dataTransfer.files].forEach((file, i) => {
                if(file) {
                    console.log(`… file[${i}].name = ${file.name}`);
                    processGerberFile(file);
                }
        });
        }
    }
    dropZone.ondragover = (ev) => {
        console.log('File(s) in drop zone');

        // Prevent default behavior (Prevent file from being opened)
        ev.preventDefault();
    }

}

function processGerberFile(file: File) {
    file.arrayBuffer().then((buf) => {
        arrayBufferToString(buf, 'UTF-8', (text: string) => {
            console.log(text);
            // translate line ends...
            text = text.replace(/\r/g, ''); // remove windows trash
            const lines = text.split('\n');
            let floatFracts = 1;
            let floatDezis = 1;
            let lastPad = "";
            for (let line of lines) {
                // line = line.replace(/\n/g,'<br>');

                // Zahlenformat info line "%FSLAX34Y34*%"
                //   %FSLAX25Y25*% Coordinate format specification:
                //   Coordinates format is 2.5:
                //   2 digits in the integer part
                //   5 digits in the fractional part
                const matchNumFormat = line.match(/^%FSLAX([0-9])([0-9])Y([0-9])([0-9])[*]%/);
                if(matchNumFormat) {
                    // console.log(matchNumFormat);
                    floatDezis = parseInt(matchNumFormat[1]);
                    floatFracts = parseInt(matchNumFormat[2]);
                    console.log(`float digits = ${floatDezis} ${floatFracts}`);
                }

                // check for pad definitions
                const matchPad = line.match(/^(%AD)(D[0-9]+)([A-Za-z])[,]([0-9.]+)[X]([0-9.]+)/);///);
                // console.log(matchPad);
                if (matchPad) {
                    padsField.innerHTML += `${matchPad[2]} ${matchPad[4]} ${matchPad[5]}<br>`;
                }

                // a pad line: "X379984Y963930D03*"
                const matchPadCoord = line.match(/^X([0-9]+)Y([0-9]+)D([0-9]+)[*]/);///);
                const matchPadCoordInit = line.match(/^(D[0-9]+)[*]/);///);
                if(matchPadCoordInit) {
                    // console.log(matchPadCoordInit);
                    lastPad = matchPadCoordInit[1];
                }
                if(matchPadCoord) {
                    // console.log(matchPadCoord);
                    let sx = matchPadCoord[1];
                    let sy = matchPadCoord[2];
                    const len = floatDezis+floatFracts;
                    // fill freak's leading zeros
                    while(sx.length < len) {
                        sx = `0${sx}`;
                    }
                    while(sy.length < len) {
                        sy = `0${sy}`;
                    }
                    // make a freak'n float
                    let fx = 0.0;
                    let fy = 0.0;
                    sx = `${sx.substring(0,floatDezis)}.${sx.substring(floatDezis)}`;
                    sy = `${sy.substring(0,floatDezis)}.${sy.substring(floatDezis)}`;
                    fx = parseFloat(sx);
                    fy = parseFloat(sy);
                    coordsField.innerHTML += `${lastPad}:  x:${fx} y:${fy} <br>`;
                }

            }
        });
    })

}

// found on se web...

function arrayBufferToString(buffer, encoding, callback) {
    var blob = new Blob([buffer], { type: 'text/plain' });
    var reader = new FileReader();
    reader.onload = (evt) => { callback(evt.target.result); };
    reader.readAsText(blob, encoding);
}

function stringToArrayBuffer(string, encoding, callback) {
    var blob = new Blob([string], { type: 'text/plain;charset=' + encoding });
    var reader = new FileReader();
    reader.onload = (evt) => { callback(evt.target.result); };
    reader.readAsArrayBuffer(blob);
}
