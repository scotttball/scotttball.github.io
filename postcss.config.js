module.exports = {
    plugins: [
      require('postcss-import')({path: ['resources/css']}),
      require('tailwindcss'),
      require('autoprefixer'),
    ]
}