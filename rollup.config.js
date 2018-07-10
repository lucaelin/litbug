import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

export default [{
    input: './elements.js',
    output: [
        {
            format: 'iife',
            file: 'elements.iife.js',
            sourceMap: true,
        }
    ],

    plugins: [
        resolve({browser: true}),
        commonjs(),
        babel({
            presets: [
                ['@babel/preset-env', {
                    modules: false,
                    targets: { "ie": 11 }
                }]
            ],
        }),
    ],
}]
