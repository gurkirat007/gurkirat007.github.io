export function getThumbnail(description: string | undefined){
    if(!description) return ''
    let div = document.createElement('div')
    div.innerHTML = description ?? ''
    let imgList = div.getElementsByTagName('img');
    return imgList[0].getAttribute('src')
}

export function getTrailer(description: string | undefined){
    let div = document.createElement('div')
    div.innerHTML = description ?? ''
    let imgList = div.getElementsByTagName('p');
    return `${imgList[0].innerText.substring(0, 200)}...`
}