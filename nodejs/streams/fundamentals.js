// Writable Streams

// Netflix & Spotify

// Readable streams

// Importação de clientes via CSV(Excel)
// 1 gb - 1.000.000
// POST /upload import.csv

// 10mb/s - 100s

// 100s -> Inserções no banco de dados

// 10mb/s -> 10.000

// -----------------------------------------------------------------------------

// Streams ->

// process.stdin
//     .pipe(process.stdout)

import {Readable, Writable, Transform} from 'node:stream'

class OnetoHundredStream extends Readable{
    index = 1

    _read(){
        const i = this.index++

        setTimeout(() => {
            if (i > 3000){
                this.push(null)
            } else {
                const buf = Buffer.from(String(i))

                this.push(buf)
            }
        },1000)
    }
}

class InverseNumberStream extends Transform{
    _transform(chunk, encoding, callback){
        const transformed = Number(chunk.toString()) * -2

        callback(null, Buffer.from(String(transformed)))
    }
}

class MultiplyBytenStream extends Writable{
    _write(chunk, encoding, callback){
        console.log(Number(chunk.toString()) * 10)
        callback()
    }
}

new OnetoHundredStream()
    .pipe(new InverseNumberStream())
    .pipe(new MultiplyBytenStream())
