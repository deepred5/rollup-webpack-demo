import { terser } from 'rollup-plugin-terser';
import babel from 'rollup-plugin-babel';
export default {
    input: './src/main.js',
    output: {
        file: './dist/monitor.js',
        format: 'cjs',
        name: 'monitor'
    },
    plugins: [
        babel({
            exclude: 'node_modules/**'
        }),
        terser()
    ]
};