import { readdirSync } from 'fs'

const list = document.getElementById('list')

const createListItem = () => {
    const listItem = document.createElement('li')
    listItem.className = 'list-item'
    return listItem
}

const createHyperlink = (folderName) => {
    const a = document.createElement('a')
    a.href = `${__dirname}/src/${folderName}/index.html`
    return a
}

const createButton = () => document.createElement('button')

const createImg = (folderName) => {
    const img = document.createElement('img')
    const imgName = readdirSync(`${__dirname}/${folderName}/preview`)[0]
    img.src = `${imgName}?as=webp&quality=1`
    return img
}

const generateListItem = (list) => {

}

window.onload = () => {

}

