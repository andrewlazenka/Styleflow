import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import external from 'rollup-plugin-peer-deps-external'

const resolveExtensions = ['.js', '.jsx', '.json']

const config = {
  input: 'src/index.js',
  output: [
    {
      file: 'build/index.js',
      format: 'umd',
      name: 'Example',
      exports: 'named',
      globals: {
        react: 'React',
      },
    },
    {
      file: 'build/index.cjs.js',
      format: 'cjs',
      name: 'Example',
      exports: 'named',
      globals: {
        react: 'React',
      },
    },
    {
      file: 'build/index.esm.js',
      format: 'es',
      exports: 'named',
      globals: {
        react: 'React',
      },
    },
  ],
  external: ['react'],
  plugins: [
    external({
      includeDependencies: true,
    }),
    babel({
      babelrc: false,
      exclude: 'node_modules/**',
      extensions: resolveExtensions,
      presets: [
        ['@babel/preset-env', { modules: false }],
        '@babel/preset-react',
      ],
    }),
    commonjs({ include: /node_modules/ }),
    resolve({
      extensions: resolveExtensions,
    }),
  ],
}

export default config
