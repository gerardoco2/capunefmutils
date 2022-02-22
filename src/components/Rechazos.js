import { useState } from "react";
import { saveAs } from 'file-saver';


export const Rechazos = () => {

    const [content, setContent] = useState('');

    const readFile = (e) => {

        const file = e.target.files[0];
        if (!file) return;

        const fileReader = new FileReader();

        fileReader.readAsText(file);

        fileReader.onload = () => {
            /* const lineas = encodeURIComponent(fileReader.result).split('%0D%0A');
    
                const composicion = [];
                composicion.push([lineas[0].slice(0, 45), "     ", lineas[0].slice(60, 77), "000000", lineas[0].slice(77, 86)].join('') + '\n');
    
                for (let i = 1; i < lineas.length - 1; i++) {
                    composicion.push([lineas[i].slice(0, 31), "     ", "000000", lineas[i].slice(46, 75)].join('') + '\n');
                }
     */
            //  const blob = new Blob(composicion, { type: 'text/plain;charset=uft-8', endings: 'native' });
            //saveAs(blob);

            const lineas = encodeURIComponent(fileReader.result).split('%0D%0A');;
            console.log(lineas);
            const blob = new Blob(lineas, { type: 'text/plain;charset=uft-8', endings: 'native' });
            saveAs(blob);

        }

        fileReader.onerror = () => {
            console.log(fileReader.error);
        }


    }


    return (
        <div className="App App-header">
            <div className="container">
                <div className="row">
                    <h1> convertirdor archivos del tesoro <br /> Para RECHAZOS</h1>
                </div>
                <div className="row">
                    <div className="col-6 mx-auto">
                        <input type="file" name="fileselector" id="" onChange={readFile} className="form-control" />
                    </div>
                </div>
            </div>

        </div>
    )
}
