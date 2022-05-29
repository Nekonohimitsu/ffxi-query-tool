import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
    input: 'src/index.ts',
    output: [
        {
            file: pkg.main,
            format: 'cjs',
            exports: 'named',
        },
        {
            file: pkg.module,
            format: 'es',
            compact: true
        }
   ],
   external: (id) => {
       return /material-ui\/.*/.test(id) || pkg.peerDependencies[id];
   },
   plugins: [
       resolve(),
       commonjs({
           include: /node_modules/,
           namedExports: {
               'prop-types': ['elementType'],
               'react-dom': ['createPortal', 'findDOMNode'],
               'react-is': ['ForwardRef', 'isFragment', 'Memo'],
           },
       }),
       typescript({
           typescript: require('typescript'),
       })
   ]
};