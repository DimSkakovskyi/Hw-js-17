import '@css/style.css'
import $ from 'jquery'
import Post from '@model/post'
import jsonData from '@assets/data'
import logo from '@assets/logo.png'

const post = new Post('Webpack Post Title', logo)

$('pre').html(post.toString())

console.log('JSON data:', jsonData)