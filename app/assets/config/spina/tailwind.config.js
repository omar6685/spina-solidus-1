module.exports = {
  content: [
    '/home/omar6685/.rbenv/versions/3.2.0/lib/ruby/gems/3.2.0/gems/spina-2.14.0/app/views/**/*.*',
'/home/omar6685/.rbenv/versions/3.2.0/lib/ruby/gems/3.2.0/gems/spina-2.14.0/app/components/**/*.*',
'/home/omar6685/.rbenv/versions/3.2.0/lib/ruby/gems/3.2.0/gems/spina-2.14.0/app/helpers/**/*.*',
'/home/omar6685/.rbenv/versions/3.2.0/lib/ruby/gems/3.2.0/gems/spina-2.14.0/app/assets/javascripts/**/*.js',
'/home/omar6685/.rbenv/versions/3.2.0/lib/ruby/gems/3.2.0/gems/spina-2.14.0/app/**/application.tailwind.css'
  ],
  theme: {
    fontFamily: {
      body: ['Metropolis'],
      mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', "Liberation Mono", "Courier New", 'monospace']
    },
    extend: {
      colors: {
        spina: {
          light: '#797ab8',
          DEFAULT: '#6865b4',
          dark: '#3a3a70'
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
	require('@tailwindcss/aspect-ratio'),
	require('@tailwindcss/typography')
  ]
}
