const gifText = document.getElementById('gifText');
const gif__container = document.querySelector('.gif__container');
document.querySelector('.tag__btn').addEventListener('click', () => {
    gif__container.style.display = gif__container.style.display === 'block' ? 'none': 'block';
})

const gify = document.getElementById('gify');

const debounce = (func, delay) => {
    let timeout;
    return (...args) => {
        timeout && clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
};

const fetchGif = debounce(async () => {
    const res = await fetch(`https://api.giphy.com/v1/stickers/search?api_key=d8NZea3Z4dQt0pgCORckZFofhx5E8oRS&q=${gifText.value}&limit=1&offset=0&rating=g&lang=en`)
    const data = await res.json();
    gify.src = data.data[0].images.preview_webp.url;
}, 300);