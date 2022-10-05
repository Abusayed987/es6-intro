document.getElementById('apply_bg').addEventListener('click', function () {
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.backgroundColor = 'lightblue';
    }
});
document.getElementById('text_center').addEventListener('click', function () {
    const friend = document.getElementById('center');
    friend.style.textAlign = 'center';
});
document.getElementById('addeded').addEventListener('click', function () {
    const friendsContainer = document.getElementById('friends');
    const friend = document.createElement('div');
    friend.classList.add('friend');
    friend.innerHTML = `
    <h3> this is a new friend </h3>
    <p> abol tabol sukumar ray </p>
    `;
    friendsContainer.appendChild(friend);
})