import { ColorImageConverter, initSync } from 'svgate';

export class ConverterRunner {
    private converter: ColorImageConverter;
    private stopped: boolean;

    constructor (converter_params: string) {
        this.converter = ColorImageConverter.new_with_string(converter_params);
        this.converter.init();
        this.stopped = false;
    }

    public run () {
        const This = this;
        let intervalId = setInterval(() => {
            if (This.stopped) {
                clearInterval(intervalId);
                return;
            }
        
            let done = false;
            const startTick = performance.now();
        
            while (!done && performance.now() - startTick < 25) {
                done = This.converter.tick();
            }
        
            if (done) {
                clearInterval(intervalId);
            }
        }, 1);
    }

    public stop () {
        this.stopped = true;
        this.converter.free();
    }
}

export async function initializeWasm() {
    const response = await fetch('/svgate_bg.wasm', {
        headers: {
            'Content-Type': 'application/wasm'
        }
    });

    const buffer = await response.arrayBuffer();
    
    return initSync(buffer);
}